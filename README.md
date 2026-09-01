# AlphaEdu

A modern school management platform for secondary schools.

## Project overview
AlphaEdu is a modern multi-tenant school management system designed primarily for secondary schools in Nigeria.

## Vision
To provide a scalable, user-friendly SaaS platform for managing school operations, students, teachers, parents, and payments efficiently.

## Current technology stack
- **Frontend**: Next.js, TypeScript, Tailwind CSS, shadcn/ui, Lucide Icons
- **Backend**: Python, FastAPI, Pydantic, SQLAlchemy, Alembic
- **Database**: PostgreSQL
- **Infrastructure**: Docker, Docker Compose, Redis (development)
- **Version Control**: Git, GitHub

## Repository structure
This project is a monorepo containing:
- `apps/web`: Next.js frontend
- `apps/api`: FastAPI backend
- `packages/*`: Shared packages (ui, types, config)
- `docs/*`: Architecture and product documentation
- `infrastructure/*`: Docker and scripts

## Development setup

### Prerequisites
- Node.js (v20+)
- Python (v3.11+)
- Docker and Docker Compose

### Environment variables
Copy `.env.example` to `.env` in the root directory and update the values as needed.
```bash
cp .env.example .env
```

### How to start the frontend
```bash
cd apps/web
npm install
npm run dev
```

### How to start the backend
```bash
cd apps/api
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### How to start Docker services
```bash
docker-compose up -d
```

## Git workflow
- Branch off from `main`.
- Create pull requests for new features/fixes.
- Never commit secrets.

## Development roadmap
- [x] Project Initialization
- [ ] Authentication & User Management
- [ ] Core School Administration
- [ ] Student & Teacher Portals
- [ ] Payments Integration

## Deployment Architecture (Planned)
- **Frontend**: Firebase Hosting (`alphaedu.ng`)
- **Backend**: Google Cloud Run (`api.alphaedu.ng`)
- **Database**: PostgreSQL (Only accessible by the Backend)
For more details, see [docs/architecture/deployment.md](docs/architecture/deployment.md).
