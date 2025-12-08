# J52 – Recent Innovations in Healthcare

J52 is a single page application (SPA) that explores recent healthcare innovations, with a focus on CRISPR-based gene editing for sickle cell disease. The app uses a React frontend and a Node.js / Express backend, connected to MongoDB and deployed on a single DigitalOcean Droplet behind NGINX. Authenticated users can log in, view a dashboard summary of the topic, and explore two data visualizations that show how this innovation is growing and how future treatments may change costs.

## Features

- Login page with JWT-based authentication
- Hardcoded credentials for testing (username = your first name, password = your first name)
- Protected routes for `/dashboard`, `/summary`, and `/reports`
- Dashboard with a 200-word summary of CRISPR gene editing for sickle cell disease and a technical overview of the stack
- Summary page with Chart #1 (growth in active CRISPR treatment sites)
- Reports page with Chart #2 (cost comparison between current gene therapy and future RNA-based approaches)
- Charts retrieved asynchronously from the backend over HTTP with JSON
- Accessible layout using semantic HTML, ARIA labels, and accessible SVG charts

## Tech Stack

### Frontend

- React (Single Page Application)
- React Router for client-side routing
- Protected routes using a custom component that checks for a JWT in `localStorage`
- Axios for HTTP calls to the backend API
- Custom styles using CSS with a color palette and accessible focus states

### Backend

- Node.js + Express
- REST API endpoints under `/api`
- JWT authentication with a secret stored in `.env`
- Mongoose and MongoDB for required database integration
- Hardcoded test credentials (both username and password are the student’s first name)
- Protected routes for chart data (`/api/chart/summary`, `/api/chart/reports`)

### Database

- MongoDB (local or Atlas)
- Connected via Mongoose
- Can be used to store chart data or any future expansion data

### Infrastructure

- One DigitalOcean Droplet hosting both frontend and backend
- NGINX serving the React build on port 80
- NGINX reverse proxy forwarding `/api` to the Node backend on port 3000
- PM2 (or systemd) keeping the backend running after SSH logout

## Project Structure

```text
J52/
  backend/
    src/...
    package.json
    .env          # not committed
  frontend/
    src/...
    package.json
  README.md
