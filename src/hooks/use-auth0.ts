import { useAuth0 as useAuth0Original } from '@auth0/auth0-react';

// This is a wrapper around the Auth0 hook to provide consistent access
export const useAuth0 = () => {
  const auth0 = useAuth0Original();
  
  return {
    ...auth0,
    // You can add custom methods or override existing ones here
  };
};
