# Manual Installation
- Install Node.js locally
- Clone the repository
- Install dependencies (`npm install`)
- Start the DB locally:
    - `docker run --name local-postgres -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres`
- Update the `.env` file with your DB credentials (make sure port, database name, and password match)
- Run migrations: `npx prisma migrate dev`
- Generate Prisma Client: `npx prisma generate`
- Build the project: `npm run build`
- Start the application: `npm run start`

## Docker Installation (Manual)
- Install Docker
- Create a new network: `docker network create usernet`
- Start PostgreSQL container on the network named `db`:
    - `docker run --name db --network usernet -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres`
- Build the Docker image: `docker build -t userproject .`
- Start the application container: `docker run --network usernet -p 3000:3000 -e DATABASE_URL="postgresql://postgres:mypassword@db:5432/postgres" userproject`

## Docker Compose Installation Steps (Recommended)
- Install Docker and Docker Compose
- Run `docker compose up --build`