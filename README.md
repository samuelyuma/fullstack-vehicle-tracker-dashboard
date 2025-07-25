# Vehicle Tracker Dashboard App

## 🛠️ Tech Stack

- **Frontend**: Vite, React, Typescript, Tailwind CSS, Zustand, shadcn/ui
- **Backend**: Express, Typescript, Prisma, Postgres, Zod

## 🔧 Requirement

Make sure [Docker](https://docs.docker.com/engine/install/) installed on your machine

## 🚀 Initial Setup

- Clone the repository: `git clone https://github.com/samuelyuma/fullstack-vehicle-tracker-dashboard`
- Navigate: `cd fullstack-vehicle-tracker`

## ⚙️ Environment Configuration

- Create `.env`: Copy `.env.template` to `.env` in the root, frontend, and backend directory
- Update `.env`: Fill in necessary environment variables. For example:

  **Root**

  ```
  NODE_ENV="production"

  # Frontend

  VITE_API_URL="http://localhost:8080/api"

  # Backend

  PORT="8080"
  HOST="localhost"

  JWT_SECRET="1A2S3D4F5G"

  CORS_ORIGIN="http://localhost:3000"

  POSTGRES_HOST="postgres"
  POSTGRES_USER="postgres"
  POSTGRES_PASSWORD="admin"
  POSTGRES_DB="dummy_db"
  POSTGRES_PORT="5432"
  
  DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public"
  ```

  **Frontend**

  ```
  VITE_API_URL="http://localhost:8080/api"
  ```

  **Backend**

  ```
  NODE_ENV="production"
  PORT="8080"
  HOST="localhost"

  JWT_SECRET="1A2S3D4F5G"

  CORS_ORIGIN="http://localhost:3000"

  POSTGRES_HOST="postgres"
  POSTGRES_USER="postgres"
  POSTGRES_PASSWORD="admin"
  POSTGRES_DB="dummy_db"
  POSTGRES_PORT="5432"
  
  DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public"
  ```

## 👷🏻 Run the Application

- Make sure `Docker` is running, then run this command: `docker-compose up -d --build`

Open [http://localhost:3000/](http://localhost:3000/) to access the `frontend`, and [http://localhost:8080/docs](http://localhost:8080/docs) to access the API documentation.

## 🪪 Credentials

- Email: `admin@hotmail.com`
- Password: `s3cur3.p4ssw0rd`

## 📌 Assignment Criteria

- [X] Functional API
- [X] Proper React component and state structure
- [X] Responsive and readable UI
- [X] Type safety (Already using typescript for both frontend and backend)
- [X] JWT (Implemented httpOnly JWT)
- [X] Tailwind CSS (Combined with shadcn/ui)
