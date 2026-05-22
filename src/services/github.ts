import { Octokit } from "octokit";

export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    topics: string[];
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    created_at: string;
    updated_at: string;
    pushed_at: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    fullDescription?: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
    stars: number;
    language: string;
    techStack?: string[];
    features?: string[];
    useCase?: string;
    readme?: string;
}

export class GitHubService {
    private octokit: Octokit;
    private username: string;

    constructor(token?: string, username: string = "Sami606713") {
        this.octokit = new Octokit({
            auth: token,
        });
        this.username = username;
    }

    async getRepositories(): Promise<GitHubRepo[]> {
        try {
            const response = await this.octokit.rest.repos.listForUser({
                username: this.username,
                sort: "updated",
                per_page: 100,
            });

            return response.data as GitHubRepo[];
        } catch (error) {
            console.error("Error fetching repositories:", error);
            return [];
        }
    }

    async getFeaturedProjects(featuredRepoNames?: string[], limit: number = 20): Promise<Project[]> {
        try {
            const repos = await this.getRepositories();

            let filteredRepos = repos;

            // If specific repo names are provided, filter for those
            if (featuredRepoNames && featuredRepoNames.length > 0) {
                filteredRepos = repos.filter((repo) =>
                    featuredRepoNames.some((name) =>
                        repo.name.toLowerCase() === name.toLowerCase()
                    )
                );
            } else {
                // Default filtering: exclude forks and repos without descriptions
                filteredRepos = repos
                    .filter((repo) => !repo.name.includes("fork"))
                    .filter((repo) => repo.description);
            }

            // Sort by stars and take the limit
            const sortedRepos = filteredRepos
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .slice(0, limit);

            // Fetch detailed information for each project
            const detailedProjects = await Promise.all(
                sortedRepos.map(repo => this.getDetailedProject(repo))
            );

            return detailedProjects;
        } catch (error) {
            console.error("Error fetching featured projects:", error);
            return [];
        }
    }

    async getRepositoryReadme(owner: string, repo: string): Promise<string | null> {
        try {
            const response = await this.octokit.rest.repos.getReadme({
                owner,
                repo,
            });

            // Decode base64 content
            const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
            return content;
        } catch (error) {
            console.error(`Error fetching README for ${owner}/${repo}:`, error);
            return null;
        }
    }

    async getDetailedProject(repo: GitHubRepo): Promise<Project> {
        const readme = await this.getRepositoryReadme(this.username, repo.name);

        return {
            id: repo.id,
            title: this.formatRepoName(repo.name),
            description: repo.description || "No description available",
            fullDescription: this.extractFullDescription(readme),
            image: `/projects/${repo.name}.jpg`,
            tags: this.getRepoTags(repo),
            github: repo.html_url,
            demo: repo.homepage || "",
            stars: repo.stargazers_count,
            language: repo.language || "Unknown",
            techStack: this.extractTechStack(readme, repo),
            features: this.extractFeatures(readme),
            useCase: this.extractUseCase(readme),
            readme: readme || undefined,
        };
    }

    private extractFullDescription(readme: string | null): string {
        if (!readme) return "";

        // Extract first meaningful paragraph
        const lines = readme.split('\n');
        let description = "";
        let foundStart = false;

        for (const line of lines) {
            // Skip title
            if (line.startsWith('#')) {
                foundStart = true;
                continue;
            }

            if (foundStart && line.trim() && !line.startsWith('```')) {
                description += line + " ";
                if (description.length > 250) break;
            }
        }

        return description.trim().slice(0, 300);
    }

    private extractTechStack(readme: string | null, repo: GitHubRepo): string[] {
        const techStack: Set<string> = new Set();

        // Add primary language
        if (repo.language) {
            techStack.add(repo.language);
        }

        // Add topics
        if (repo.topics && repo.topics.length > 0) {
            repo.topics.forEach(topic => techStack.add(topic));
        }

        if (!readme) return Array.from(techStack);

        const readmeLower = readme.toLowerCase();

        // Common tech keywords to look for
        const techKeywords = [
            'python', 'pytorch', 'tensorflow', 'scikit-learn', 'numpy', 'pandas',
            'fastapi', 'flask', 'django', 'langchain', 'langgraph', 'openai',
            'docker', 'kubernetes', 'mlops', 'mlflow', 'dvc', 'streamlit',
            'react', 'nextjs', 'typescript', 'javascript', 'postgresql', 'mongodb',
            'redis', 'celery', 'rabbitmq', 'aws', 'gcp', 'azure', 'groq', 'pinecone'
        ];

        techKeywords.forEach(tech => {
            if (readmeLower.includes(tech)) {
                techStack.add(tech);
            }
        });

        return Array.from(techStack).slice(0, 10);
    }

    private extractFeatures(readme: string | null): string[] {
        if (!readme) return [];

        const features: string[] = [];
        const lines = readme.split('\n');
        let inFeaturesSection = false;

        for (const line of lines) {
            // Check if we're in features section
            if (line.toLowerCase().includes('## features') ||
                line.toLowerCase().includes('## key features') ||
                line.toLowerCase().includes('## 🚀 features')) {
                inFeaturesSection = true;
                continue;
            }

            // Stop at next section
            if (inFeaturesSection && line.startsWith('##')) {
                break;
            }

            // Extract bullet points
            if (inFeaturesSection && (line.trim().startsWith('-') || line.trim().startsWith('*') || line.trim().startsWith('•'))) {
                const feature = line.replace(/^[\s\-\*•🔹🔸]+/, '').replace(/[\*\`]/g, '').trim();
                if (feature && feature.length > 10 && feature.length < 150) {
                    features.push(feature);
                }
            }
        }

        return features.slice(0, 6);
    }

    private extractUseCase(readme: string | null): string {
        if (!readme) return "";

        // Look for use case section
        const useCasePatterns = [
            /use case[s]?[:\s]+([^\n#]+)/i,
            /application[s]?[:\s]+([^\n#]+)/i,
            /purpose[:\s]+([^\n#]+)/i,
            /what is[:\s]+([^\n#]+)/i,
        ];

        for (const pattern of useCasePatterns) {
            const match = readme.match(pattern);
            if (match && match[1]) {
                return match[1].trim().slice(0, 200);
            }
        }

        return "";
    }

    async getUserProfile() {
        try {
            const response = await this.octokit.rest.users.getByUsername({
                username: this.username,
            });

            return {
                name: response.data.name || this.username,
                bio: response.data.bio || "",
                avatar_url: response.data.avatar_url,
                location: response.data.location || "",
                blog: response.data.blog || "",
                twitter_username: response.data.twitter_username || "",
                public_repos: response.data.public_repos,
                followers: response.data.followers,
                following: response.data.following,
            };
        } catch (error) {
            console.error("Error fetching user profile:", error);
            return null;
        }
    }

    private formatRepoName(name: string): string {
        return name
            .split(/[-_]/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    private getRepoTags(repo: GitHubRepo): string[] {
        const tags: string[] = [];

        // Add language
        if (repo.language) {
            tags.push(repo.language);
        }

        // Add topics (GitHub tags)
        if (repo.topics && repo.topics.length > 0) {
            tags.push(...repo.topics.slice(0, 3));
        }

        // If no topics, infer from name/description
        if (tags.length < 2) {
            const keywords = [
                "machine-learning",
                "ml",
                "ai",
                "deep-learning",
                "nlp",
                "mlops",
                "docker",
                "fastapi",
                "pytorch",
                "tensorflow",
            ];

            const repoText = `${repo.name} ${repo.description || ""}`.toLowerCase();

            keywords.forEach((keyword) => {
                if (repoText.includes(keyword) && !tags.includes(keyword)) {
                    tags.push(keyword);
                }
            });
        }

        return tags.slice(0, 5);
    }
}

// Singleton instance
let githubService: GitHubService | null = null;

export function getGitHubService(token?: string): GitHubService {
    if (!githubService) {
        githubService = new GitHubService(token);
    }
    return githubService;
}
