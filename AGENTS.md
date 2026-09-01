# AlphaEdu Agent Instructions

These are rules for AI coding agents working on AlphaEdu.

### Project identity
AlphaEdu is a modern school management SaaS platform for secondary schools.

### Architecture principles
* Keep the project modular.
* Do not create unnecessary files.
* Do not rewrite working code without a reason.
* Do not modify unrelated parts of the project.
* Follow existing architecture before introducing new patterns.
* Keep frontend and backend responsibilities separated.
* Use reusable components.
* Use TypeScript strictly.
* Use Python type hints.
* Keep secrets out of source code.
* Every future school-owned resource must respect multi-tenant isolation.
* Business logic belongs in appropriate backend services.
* Do not put business logic directly inside route handlers.
* Write tests for important business logic.
* Prefer small, maintainable changes.
* Before making major architectural changes, explain the proposed change.

### Vibe coding rule
AI agents must NOT generate large amounts of unrelated code.
Work feature-by-feature and task-by-task.
Before implementing a requested feature:
1. Inspect the existing architecture.
2. Identify affected files.
3. Explain the implementation approach.
4. Make the smallest appropriate change.
5. Run relevant checks/tests.
6. Report what changed.

### Deployment architecture
* The frontend is hosted on Firebase Hosting (alphaedu.ng).
* The backend is hosted on Google Cloud Run (api.alphaedu.ng).
* The frontend must NEVER connect directly to PostgreSQL.
* FastAPI owns all database access.
* Keep the FastAPI backend independent so it can serve the future mobile app.
