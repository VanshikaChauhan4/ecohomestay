# Backend — How to Run Locally

This project's backend lives in the `/backend` folder and is built with **Node.js + Express**. It exposes a REST API for homestay listings and bookings, currently backed by in-memory data (a real database is added in Week 5).

## 1. Setup

```bash
cd backend
npm install
```

## 2. Configure environment variables

Copy the example file and adjust if needed:

```bash
cp .env.example .env
```

`.env` (gitignored, never committed):
```
PORT=5000
FRONTEND_ORIGIN=http://localhost:5173
```

## 3. Run the server

```bash
npm run dev      # with nodemon (auto-restart on changes)
# or
npm start        # plain node
```

The API will be available at `http://localhost:5000`.

## 4. Available Endpoints

| Method | Endpoint                       | Description                          |
|--------|---------------------------------|---------------------------------------|
| GET    | `/api/homestays`               | List all homestays                    |
| GET    | `/api/homestays/:id`           | Get a single homestay                 |
| POST   | `/api/homestays`               | Create a new homestay                 |
| PUT    | `/api/homestays/:id`           | Update a homestay                     |
| DELETE | `/api/homestays/:id`           | Delete a homestay                     |
| GET    | `/api/homestays/search?q=&type=&location=` | Search/filter homestays |
| GET    | `/api/bookings`                | List all bookings                     |
| POST   | `/api/bookings`                | Create a new booking                  |

## 5. Status Codes Used

- `200` — successful GET / PUT
- `201` — successful POST (resource created)
- `204` — successful DELETE (no content returned)
- `400` — validation error (missing/invalid fields)
- `404` — resource or route not found
- `500` — unexpected server error

## 6. Connecting the Frontend

The backend allows CORS requests from the origin set in `FRONTEND_ORIGIN` (defaults to the Vite dev server at `http://localhost:5173`). Update your frontend `fetch`/`axios` calls to point to `http://localhost:5000/api/...`.
