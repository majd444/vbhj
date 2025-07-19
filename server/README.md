# Backend Server for OAuth Authentication

This is a Node.js backend server that handles Google OAuth authentication and user session management.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=3001
   FRONTEND_URL=http://localhost:5173
   FRONTEND_REDIRECT_URI=http://localhost:5173/dashboard
   ```

3. Start the development server:
   ```bash
   node index.js
   ```

## API Endpoints

- `GET /api/oauth2/callback/google` - Handles the OAuth callback from Google
- `GET /api/user` - Returns the current user's information
- `POST /api/logout` - Logs out the current user

## Environment Variables

- `PORT` - Port to run the server on (default: 3001)
- `FRONTEND_URL` - URL of the frontend application
- `FRONTEND_REDIRECT_URI` - URL to redirect to after successful authentication
