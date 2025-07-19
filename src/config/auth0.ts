// Auth0 Configuration
export const authConfig = {
  domain: import.meta.env.VITE_AUTH0_DOMAIN || 'your-tenant.region.auth0.com',
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID || 'your-client-id',
  audience: import.meta.env.VITE_AUTH0_AUDIENCE || 'your-audience',
  redirectUri: import.meta.env.VITE_AUTH0_REDIRECT_URI || window.location.origin,
  scope: import.meta.env.VITE_AUTH0_SCOPE || 'openid profile email',
};

// Google Connection Name
export const googleConnection = 'google-oauth2';
