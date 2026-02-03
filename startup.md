# TheBotLab Backend - AI Agent Platform

TheBotLab is a comprehensive, production-ready AI agent platform that enables users to build, train, and deploy intelligent agents using their own data. Built with FastAPI, LangChain, and LangGraph, it provides enterprise-grade features including multi-tenant architecture, RBAC, vector search, and real-time processing.

## 🚀 Features

### Core Capabilities
- **🤖 AI Agent Management**: Create and configure intelligent agents with custom LLM settings
- **📚 Knowledge Base**: Multi-source data ingestion (web scraping, crawling, documents, URLs)
- **🔍 Vector Search**: Pinecone-powered semantic search for accurate context retrieval
- **💬 Playground**: Interactive chat interface for testing and development
- **🔐 Enterprise RBAC**: Two-tier role-based access control (platform + agent level)
- **👥 Multi-Workspace**: Isolated workspaces for team collaboration
- **🛠️ Tool Integration**: Extensible tool system for agent capabilities
- **📊 Admin Dashboard**: Comprehensive analytics and user management

### Data Sources
- 🌐 **Web Scraping**: Extract content from individual web pages
- 🕷️ **Web Crawling**: Deep crawl entire websites with configurable depth (powered by Crawl4AI)
- 📄 **Document Processing**: PDF, DOCX, and text file processing
- 🔗 **Batch URLs**: Process multiple URLs simultaneously
- 🎥 **YouTube**: Extract transcripts from YouTube videos

### AI/ML Stack
- **LangChain**: Framework for LLM application development
- **LangGraph**: Workflow orchestration and state management
- **OpenAI**: GPT models for generation and embeddings
- **Groq**: Fast inference for LLM models
- **Cohere**: Additional embedding and reranking capabilities
- **Pinecone**: Vector database for semantic search

## 🏗️ Architecture

```mermaid
graph TB
    Client[Frontend Client] --> API[FastAPI Server]
    API --> Auth[Auth Middleware]
    API --> RBAC[RBAC Service]
    
    API --> WS[Workspace Service]
    API --> AS[Agent Service]
    API --> KS[Knowledge Service]
    API --> PS[Playground Service]
    
    AS --> DB[(PostgreSQL)]
    KS --> DB
    PS --> DB
    WS --> DB
    
    KS --> VC[Vector Store<br/>Pinecone]
    PS --> LG[LangGraph<br/>Workflow]
    LG --> LLM[LLM Providers<br/>OpenAI/Groq]
    LG --> VC
    
    style API fill:#4CAF50
    style DB fill:#2196F3
    style VC fill:#FF9800
    style LG fill:#9C27B0
```

## 📁 Project Structure

```
backend/
├── src/
│   ├── api/
│   │   ├── config/              # Configuration management
│   │   ├── database/            # Database connection & setup
│   │   ├── deps/                # Dependency injection
│   │   ├── middleware/          # Custom middleware & exceptions
│   │   ├── models/              # SQLAlchemy ORM models
│   │   │   ├── agents/          # Agent, AgentConfig, AgentLLM, AgentRole
│   │   │   ├── workspace/       # Workspace models
│   │   │   ├── knowledge/       # Knowledge base models
│   │   │   └── users/           # User, Role, Permission models
│   │   ├── routes/              # API endpoints
│   │   │   └── v1/
│   │   │       ├── auth/        # Authentication routes
│   │   │       ├── users/       # User management
│   │   │       ├── workspace/   # Workspace & nested resources
│   │   │       │   ├── agents/  # Agent CRUD
│   │   │       │   ├── knowledge/ # Knowledge base operations
│   │   │       │   ├── playground/ # Chat interface
│   │   │       │   └── tools/   # Tool integrations
│   │   │       ├── admin/       # Admin panel routes
│   │   │       └── public/      # Public agent access
│   │   ├── schema/              # Pydantic models (DTOs)
│   │   ├── services/            # Business logic layer
│   │   │   ├── agent_service.py
│   │   │   ├── workspace_service.py
│   │   │   ├── playground_service.py
│   │   │   ├── rbac_service.py
│   │   │   └── ...
│   │   ├── store/               # LangGraph store integration
│   │   ├── templates/           # Email templates
│   │   └── server.py            # FastAPI application entry point
│   └── utils/                   # Utility functions & logger
├── migrations/                  # Alembic database migrations
├── scripts/                     # Maintenance & setup scripts
├── seeds/                       # Database seeding
├── docs/                        # Additional documentation
├── configs/                     # Configuration files
├── storage/                     # File storage
├── requirements.txt             # Python dependencies
├── pyproject.toml              # UV package manager config
└── alembic.ini                 # Alembic configuration
```

## 🛠️ Technology Stack

### Backend Framework
- **FastAPI**: High-performance async web framework
- **Uvicorn**: ASGI server for production
- **SQLAlchemy 2.0**: Async ORM with relationship management
- **Alembic**: Database migration tool
- **Pydantic v2**: Data validation and serialization

### Database & Storage
- **PostgreSQL**: Primary relational database (with asyncpg driver)
- **Pinecone**: Vector database for embeddings
- **LangGraph Checkpointer**: Conversation state persistence

### Authentication & Security
- **JWT**: Token-based authentication
- **PyJWT**: JWT encoding/decoding
- **Passlib + Bcrypt**: Password hashing
- **Python-JOSE**: Cryptographic signing

### AI/ML Libraries
- **LangChain**: LLM application framework
- **LangChain Community**: Additional integrations
- **LangGraph**: Stateful workflow orchestration
- **Crawl4AI**: Advanced web crawling
- **Unstructured**: Document parsing
- **DuckDuckGo Search**: Web search integration

### Testing
- **Pytest**: Testing framework
- **Pytest-asyncio**: Async test support
- **Pytest-cov**: Code coverage
- **HTTPX**: Async HTTP client for testing

## 📦 Installation

### Prerequisites
- Python 3.11+
- PostgreSQL 14+
- Pinecone account
- OpenAI API key
- Groq API key (optional)

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TheBotLab/backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. **Install dependencies**
   
   Using pip:
   ```bash
   pip install -r requirements.txt
   ```
   
   Or using uv (faster):
   ```bash
   uv pip install -r requirements.txt
   ```

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   # Database
   POSTGRES_URI=postgresql+asyncpg://user:password@localhost:5432/botlab
   
   # AI Services
   OPENAI_API_KEY=sk-...
   GROQ_API_KEY=gsk_...
   COHERE_API_KEY=...
   PINECONE_API_KEY=...
   PINECONE_INDEX=thebotlab
   
   # Authentication
   JWT_SECRET=your-secret-key-here
   JWT_ALGORITHM=HS256
   
   # Email (optional)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_ADDRESS=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   
   # Development
   DEBUG=true
   ```

5. **Initialize database**
   ```bash
   # Run migrations
   python migrate.py upgrade
   
   # Seed initial data (roles, permissions, plans)
   python scripts/run_all_seeders.py
   ```

6. **Start the server**
   ```bash
   python -m src.api.server
   ```
   
   The API will be available at `http://localhost:8000`

## 🚀 Usage

### API Documentation

Once the server is running, access the interactive API documentation:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

### Quick Start Example

```python
import httpx
import asyncio

async def main():
    base_url = "http://localhost:8000/api/v1"
    
    # 1. Register a user
    async with httpx.AsyncClient() as client:
        response = await client.post(f"{base_url}/auth/register", json={
            "email": "user@example.com",
            "username": "testuser",
            "password": "SecurePass123!",
            "first_name": "Test",
            "last_name": "User"
        })
        print("User registered:", response.json())
        
        # 2. Login
        response = await client.post(f"{base_url}/auth/login", json={
            "email": "user@example.com",
            "password": "SecurePass123!"
        })
        token = response.json()["data"]["access_token"]
        headers = {"Authorization": f"Bearer {token}"}
        
        # 3. Create a workspace
        response = await client.post(f"{base_url}/workspaces/", 
            json={"name": "My Workspace"},
            headers=headers
        )
        workspace_id = response.json()["data"]["id"]
        
        # 4. Create an agent
        response = await client.post(
            f"{base_url}/workspaces/{workspace_id}/agents/",
            json={
                "name": "My AI Assistant",
                "description": "A helpful assistant"
            },
            headers=headers
        )
        agent_id = response.json()["data"]["id"]
        
        # 5. Add knowledge (web scraping)
        response = await client.post(
            f"{base_url}/workspaces/{workspace_id}/agents/{agent_id}/knowledge/scrape",
            json={"url": "https://example.com"},
            headers=headers
        )
        
        # 6. Chat with the agent
        response = await client.post(
            f"{base_url}/workspaces/{workspace_id}/agents/{agent_id}/playground/chat",
            json={
                "session_id": "session-123",
                "query": "What information do you have?"
            },
            headers=headers
        )
        print("Agent response:", response.json()["data"]["response"])

asyncio.run(main())
```

## 🔐 Authentication & Authorization

### Two-Tier RBAC System

TheBotLab implements a sophisticated two-tier RBAC system:

#### 1. Platform-Level Roles
- **Super Admin**: Full system control
- **Organization Admin**: Manages organization users and billing
- **Developer**: Default role, can create and manage agents
- **Viewer**: Read-only access

#### 2. Agent-Level Roles
- **Owner**: Full control over the agent
- **Admin**: Can configure and manage members
- **Editor**: Can modify prompts and training data
- **Viewer**: Read-only access
- **Tester**: Can test agent interactions

See [docs/RBAC_README.md](docs/RBAC_README.md) for detailed permission mappings.

### Authentication Flow

1. User registers → Assigned **Developer** role
2. User creates agent → Becomes **Owner** of that agent
3. Owner can invite team members with specific roles
4. JWT tokens used for API authentication
5. Middleware enforces permissions on all routes

## 📊 Database Schema

### Core Tables

- **users**: Platform users with authentication
- **workspaces**: Isolated workspaces for teams
- **agents**: AI agent configurations
- **agent_config**: Agent system prompts and settings
- **agent_llm**: LLM provider and model settings
- **agent_roles**: Agent-level roles
- **agent_memberships**: User-agent-role assignments
- **knowledge_bases**: Training data sources
- **conversations**: Chat sessions
- **messages**: Individual chat messages
- **roles**: Platform-level roles
- **permissions**: All permissions (global + agent)
- **role_permissions**: Role-permission mappings
- **user_roles**: User-role assignments
- **plans**: Subscription tiers
- **user_subscriptions**: User subscription status
- **audit_logs**: Action tracking for compliance
- **usage_records**: Daily usage metrics

See [docs/BotLabTables.md](docs/BotLabTables.md) for complete schema details.

## 🔄 Database Migrations

### Common Commands

```bash
# Create a new migration
python migrate.py create "description of changes"

# Apply all pending migrations
python migrate.py upgrade

# Rollback last migration
python migrate.py downgrade

# View migration history
python migrate.py history

# Check current version
python migrate.py current

# Reset database (WARNING: destructive)
python scripts/reset_database.py
```

### Migration Workflow

1. Modify models in `src/api/models/`
2. Create migration: `python migrate.py create "add new field"`
3. Review generated migration in `migrations/versions/`
4. Apply migration: `python migrate.py upgrade`
5. Commit both model changes and migration file

## 🧪 Testing

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=src --cov-report=html

# Run specific test file
pytest tests/test_agents.py

# Run with verbose output
pytest -v
```

## 🛠️ Development

### Running in Development Mode

```bash
# With auto-reload
python -m src.api.server

# Or using uvicorn directly
uvicorn src.api.server:app --reload --host 0.0.0.0 --port 8000
```

### Code Style

The project follows PEP 8 guidelines. Key conventions:
- Async/await for all I/O operations
- Type hints for function signatures
- Pydantic models for request/response validation
- Service layer pattern for business logic
- Repository pattern via SQLAlchemy

### Adding New Features

1. **Create model** in `src/api/models/`
2. **Create schema** in `src/api/schema/`
3. **Create service** in `src/api/services/`
4. **Create routes** in `src/api/routes/v1/`
5. **Register router** in `src/api/server.py`
6. **Create migration** using `python migrate.py create`
7. **Add tests** in `tests/`

## 🌐 API Routes Overview

### Public Routes
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `GET /api/v1/public/agents/{agent_id}` - Public agent access

### User Routes
- `GET /api/v1/users/me` - Get current user
- `PUT /api/v1/users/me` - Update profile
- `GET /api/v1/users/me/subscription` - Get subscription info

### Workspace Routes
- `GET /api/v1/workspaces/` - List workspaces
- `POST /api/v1/workspaces/` - Create workspace
- `GET /api/v1/workspaces/{id}` - Get workspace
- `PUT /api/v1/workspaces/{id}` - Update workspace
- `DELETE /api/v1/workspaces/{id}` - Delete workspace

### Agent Routes
- `GET /api/v1/workspaces/{ws_id}/agents/` - List agents
- `POST /api/v1/workspaces/{ws_id}/agents/` - Create agent
- `GET /api/v1/workspaces/{ws_id}/agents/{id}` - Get agent
- `PUT /api/v1/workspaces/{ws_id}/agents/{id}` - Update agent
- `DELETE /api/v1/workspaces/{ws_id}/agents/{id}` - Delete agent
- `GET /api/v1/workspaces/{ws_id}/agents/{id}/config` - Get config
- `PUT /api/v1/workspaces/{ws_id}/agents/{id}/config` - Update config
- `GET /api/v1/workspaces/{ws_id}/agents/{id}/llm` - Get LLM settings
- `PUT /api/v1/workspaces/{ws_id}/agents/{id}/llm` - Update LLM settings

### Knowledge Routes
- `POST /api/v1/workspaces/{ws_id}/agents/{agent_id}/knowledge/scrape` - Scrape URL
- `POST /api/v1/workspaces/{ws_id}/agents/{agent_id}/knowledge/crawl` - Crawl website
- `POST /api/v1/workspaces/{ws_id}/agents/{agent_id}/knowledge/upload` - Upload file
- `GET /api/v1/workspaces/{ws_id}/agents/{agent_id}/knowledge/` - List knowledge
- `DELETE /api/v1/workspaces/{ws_id}/agents/{agent_id}/knowledge/{id}` - Delete knowledge

### Playground Routes
- `POST /api/v1/workspaces/{ws_id}/agents/{agent_id}/playground/chat` - Chat with agent
- `GET /api/v1/workspaces/{ws_id}/agents/{agent_id}/playground/conversations` - List conversations
- `GET /api/v1/workspaces/{ws_id}/agents/{agent_id}/playground/conversations/{id}` - Get conversation

### Admin Routes
- `GET /api/v1/admin/users` - List all users
- `GET /api/v1/admin/agents` - List all agents
- `GET /api/v1/admin/analytics` - Platform analytics
- `GET /api/v1/admin/roles` - Manage roles
- `GET /api/v1/admin/permissions` - Manage permissions
- `GET /api/v1/admin/plans` - Manage subscription plans

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `POSTGRES_URI` | PostgreSQL connection string | Yes | - |
| `OPENAI_API_KEY` | OpenAI API key | Yes | - |
| `GROQ_API_KEY` | Groq API key | No | - |
| `COHERE_API_KEY` | Cohere API key | No | - |
| `PINECONE_API_KEY` | Pinecone API key | Yes | - |
| `PINECONE_INDEX` | Pinecone index name | Yes | - |
| `JWT_SECRET` | JWT signing secret | Yes | - |
| `JWT_ALGORITHM` | JWT algorithm | No | HS256 |
| `EMAIL_HOST` | SMTP server host | No | - |
| `EMAIL_PORT` | SMTP server port | No | 587 |
| `EMAIL_ADDRESS` | Sender email address | No | - |
| `EMAIL_PASSWORD` | Email password/app password | No | - |
| `DEBUG` | Enable debug mode | No | false |
| `NGROK_AUTH_TOKEN` | Ngrok auth token | No | - |

### Subscription Plans

Default plans seeded in database:

| Plan | Agents | Deployments | Price |
|------|--------|-------------|-------|
| Free | 1 | No | $0 |
| Pro | 5 | Yes | $29/mo |
| Business | 20 | Yes | $99/mo |

## 📚 Additional Documentation

- [QUICK_START.md](docs/QUICK_START.md) - Database setup guide
- [RBAC_README.md](docs/RBAC_README.md) - Role & permission reference
- [BotLabTables.md](docs/BotLabTables.md) - Database schema details
- [EXAMPLE_QUERIES.py](docs/EXAMPLE_QUERIES.py) - Example database queries
- [MODEL_REVIEW_AND_FIXES.md](docs/MODEL_REVIEW_AND_FIXES.md) - Model documentation

## 🐛 Troubleshooting

### Common Issues

**Issue**: Database connection failed
```bash
# Check PostgreSQL is running
sudo systemctl status postgresql

# Verify connection string in .env
# Format: postgresql+asyncpg://user:password@host:port/database
```

**Issue**: Migration conflicts
```bash
# Reset database (WARNING: deletes all data)
python scripts/reset_database.py

# Re-run migrations
python migrate.py upgrade
```

**Issue**: Pinecone index not found
```bash
# Create index in Pinecone dashboard with:
# - Dimension: 1536 (for OpenAI embeddings)
# - Metric: cosine
# - Update PINECONE_INDEX in .env
```

**Issue**: Import errors
```bash
# Ensure all dependencies are installed
pip install -r requirements.txt

# Check Python version
python --version  # Should be 3.11+
```

## 🚢 Deployment

### Docker Deployment

```bash
# Build image
docker build -t thebotlab-backend .

# Run container
docker run -p 8000:8000 --env-file .env thebotlab-backend
```

### Production Checklist

- [ ] Set `DEBUG=false` in production
- [ ] Use strong `JWT_SECRET` (32+ characters)
- [ ] Enable PostgreSQL SSL connections
- [ ] Set up database backups
- [ ] Configure CORS for specific origins
- [ ] Enable rate limiting
- [ ] Set up monitoring (Sentry, DataDog, etc.)
- [ ] Use environment-specific `.env` files
- [ ] Enable HTTPS/TLS
- [ ] Set up log aggregation
- [ ] Configure auto-scaling
- [ ] Set up health check endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

- **Documentation**: Check the `docs/` directory
- **Issues**: Open an issue on GitHub
- **Email**: support@thebotlab.com

---

**TheBotLab** - Building the future of AI agents, one conversation at a time. 🚀