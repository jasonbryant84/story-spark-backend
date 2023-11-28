# Backend
Backend Node & Express server to handle session tokens and generating AI text and images to return to the client. Will run on port `3001` at url `http://127.0.0.1:3001`

## Setup
From root directory...

### Install
Install dependencies

`npm install`

Start backend server

`npm run dev`

### Sanity Check

Healthcheck can be executed [here](http://127.0.0.1:3001/healthcheck) to ensure the backend is up and running. CORS not implemented for this endpoint.

### Env Vars

```bash
FRONTEND_URL=http://127.0.0.1
FRONTEND_PORT=3000
OPENAI_API_KEY=your-key-goes-here
```