# Personal Portfolio - Samiullah

A modern, premium personal branding portfolio website built with Next.js 16, TypeScript, and Tailwind CSS 4.

## Features

- ✨ **Modern Design**: Vibrant gradients, glassmorphism effects, and smooth animations
- 🌓 **Dark Mode**: Fully functional dark/light mode toggle with localStorage persistence
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🚀 **GitHub Integration**: Automatically fetches your latest repositories via GitHub API
- ⚡ **Performance**: Optimized with Next.js 16 and React 19
- 🎨 **Premium UI**: Scroll-based animations, hover effects, and micro-interactions

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **API**: GitHub REST API (via Octokit)
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A GitHub account
- GitHub Personal Access Token (for fetching repositories)

### Installation

1. **Clone the repository** (or you're already in it!)

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:

Create a `.env.local` file in the root directory and add your GitHub token:

```env
NEXT_PUBLIC_GITHUB_TOKEN=your_github_personal_access_token_here
```

**How to get a GitHub token:**
- Go to https://github.com/settings/tokens
- Click "Generate new token" → "Generate new token (classic)"
- Give it a name (e.g., "Portfolio Website")
- Select scopes: `public_repo` (or just `repo` for full access)
- Click "Generate token"
- Copy the token and paste it in your `.env.local` file

4. **Run the development server**:
```bash
npm run dev
```

5. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
my_portfolio/
├── public/
│   ├── profile.png          # Your profile photo
│   └── resume.pdf           # Your CV/Resume
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & design system
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main page
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Skills.tsx       # Skills showcase
│   │   ├── Projects.tsx     # Projects (GitHub API)
│   │   ├── Experience.tsx   # Experience timeline
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer
│   ├── constants/
│   │   └── data.ts          # Personal information & static data
│   ├── services/
│   │   └── github.ts        # GitHub API service
│   ├── hooks/
│   │   ├── useDarkMode.ts   # Dark mode hook
│   │   └── useScrollAnimation.ts  # Scroll animation hook
│   └── config/
│       └── index.ts         # Configuration
└── .env.local               # Environment variables (create this!)
```

## Customization

### Personal Information

Edit `src/constants/data.ts` to update:
- Name, title, and tagline
- Bio and contact information
- Skills and categories
- Experience timeline
- Social media links

### Profile Photo

Replace `public/profile.png` with your own photo (recommended: 500x500px, circular crop works best)

### Resume/CV

Replace `public/resume.pdf` with your own CV

### Colors & Design

Edit `src/app/globals.css` to customize:
- Color palette (CSS variables)
- Animations
- Typography
- Glassmorphism effects

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed to:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your GitHub repo
- **Any Node.js hosting**: Build and serve the `.next` folder

### Environment Variables for Production

Don't forget to add your `NEXT_PUBLIC_GITHUB_TOKEN` to your hosting platform's environment variables!

## Features Breakdown

### GitHub API Integration

The portfolio automatically fetches your repositories from GitHub and displays them in the Projects section. It:
- Filters out forks
- Sorts by stars
- Extracts topics/tags
- Shows language and star count
- Links to repo and live demo (if available)

### Dark Mode

- Automatic detection of system preference
- Manual toggle in navbar
- Persists choice in localStorage
- Smooth transitions

### Animations

- Scroll-based reveal animations
- Floating elements
- Gradient animations
- Hover effects
- Smooth scrolling navigation

## License

MIT License - feel free to use this for your own portfolio!

## Credits

Built with ❤️ by Samiullah

---

**Need help?** Open an issue or reach out at sami606713@gmail.com
