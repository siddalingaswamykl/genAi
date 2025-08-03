# GenAI Vehicle Configuration App

## Overview

Production-ready app with Node.js/Express/TypeScript backend, React/TypeScript frontend, PostgreSQL, and Docker Compose orchestration.

## Directory Structure

```
genAi/
├── backend/
├── frontend/
├── Dockerfile.backend
├── Dockerfile.frontend
├── docker-compose.yml
└── README.md
```

## Setup Instructions

### 1. Clone the repo

```sh
git clone <your-repo-url>
cd genAi
```

### 2. Backend Setup

- Go to `backend/`
- Add a `.env` file with:

```
DATABASE_URL=postgres://admin:adminpass@db:5432/vehicle_genai
PORT=3001
```

- Install dependencies:

```sh
cd backend
npm install
```

### 3. Frontend Setup

- Go to `frontend/`
- Install dependencies:

```sh
cd frontend
npm install
```

### 4. Build and Run with Docker Compose

In the project root, run:

```sh
docker-compose up --build
```

This will:
- Start PostgreSQL database
- Build and run backend on port **3001**
- Build and run frontend on port **3000**

### 5. Access the App

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:3001/api/vehicles](http://localhost:3001/api/vehicles)
- **Postgres:** localhost:5432

## Manual Dev Mode (Optional)

- Backend:  
  ```sh
  cd backend
  npm run dev
  ```
- Frontend:  
  ```sh
  cd frontend
  npm start
  ```

## Customization

- **OpenAI API integration:** Add your key and logic to backend for GenAI features.
- **Vehicle model:** Edit `backend/src/models/vehicle.ts` to fit your requirements.
- **Frontend:** Adjust `frontend/src/components/VehicleConfig.tsx` for custom UI/logic.

## Troubleshooting

- Ensure Docker Desktop is running.
- Check `.env` and database connection strings.
- Use `docker-compose logs` for error details.
