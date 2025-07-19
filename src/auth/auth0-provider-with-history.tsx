import React, { ReactNode } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

interface Auth0ProviderWithHistoryProps {
  children: ReactNode;
}

const Auth0ProviderWithHistory = ({ children }: Auth0ProviderWithHistoryProps) => {
  // Development defaults - replace these with your actual Auth0 credentials
  const domain = import.meta.env.VITE_AUTH0_DOMAIN || 'dev-xxxxxxxx.us.auth0.com';
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID || 'your-client-id';
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE || 'your-audience';
  const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI || window.location.origin;
  const scope = import.meta.env.VITE_AUTH0_SCOPE || 'openid profile email';

  const navigate = useNavigate();

  // Define a proper type for the appState parameter
  interface AppState {
    returnTo?: string;
    // Define specific properties that might be used instead of using index signature with any
    targetUrl?: string;
    path?: string;
    state?: unknown;
  }

  const onRedirectCallback = (appState?: AppState) => {
    // After login, redirect to the page the user was trying to access
    navigate(appState?.returnTo || window.location.pathname);
  };

  // Log configuration for debugging
  console.log('Auth0 Configuration:', {
    domain,
    clientId,
    redirectUri,
    audience: audience || 'None provided',
    scope
  });

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        ...(audience ? { audience } : {}),
        scope: scope,
        // Add response_type for OIDC compliance
        response_type: 'code',
        // Add response_mode for better security
        response_mode: 'query'
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
      useRefreshTokens={true}
      // Add additional configuration for Universal Login
      useRefreshTokensFallback={true}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
