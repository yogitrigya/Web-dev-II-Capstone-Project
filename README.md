# Rivertrack - Capstone Project

A React-based web application to track water levels of Indian rivers and monitor government river restoration projects.

## Features

- **River Monitoring**: View water levels with advanced filtering and pagination.
- **Project Management**: CRUD operations for government river restoration projects.
- **Dashboard**: Visualize water level trends and project delivery status with charts and statistics.
- **Alerts**: Real-time alerts for rivers at danger levels.
- **Performance Optimized**: Lazy loading for routes.
- **State Management**: Redux Toolkit for global state.
- **Styling**: Tailwind CSS with professional blue and white theme.

## Tech Stack

- Frontend: React (Vite) with JavaScript (ES6+)
- State Management: Redux Toolkit
- Routing: React Router with lazy loading
- API Integration: Axios with mock data
- Styling: Tailwind CSS
- Charts: Recharts

## Setup Instructions

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open `http://localhost:5173` in your browser.

## Project Structure

```
src/
├── components/
│   ├── Nav.jsx
│   ├── Footer.jsx
│   ├── RiverList.jsx
│   ├── ProjectList.jsx
│   └── DashboardCharts.jsx
├── pages/
│   ├── Home.jsx
│   ├── Rivers.jsx
│   ├── Projects.jsx
│   ├── Dashboard.jsx
│   └── Alerts.jsx
├── store/
│   ├── index.js
│   └── slices/
│       ├── riversSlice.js
│       └── projectsSlice.js
├── utils/
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css
```

## Usage

- Navigate to `/` for the home page.
- `/rivers` for river data with search, filter, sort, and pagination.
- `/projects` for managing projects with CRUD.
- `/dashboard` for visualizations and stats.
- `/alerts` for danger level alerts.