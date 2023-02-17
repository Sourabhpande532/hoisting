import { useEffect, useState } from 'react';
import jwt from 'jwt-decode';

const useAuth = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const verifyAuth = () => {
      const userToken = localStorage.getItem('token');
      const decodedToken = userToken && jwt(userToken, { complete: true });
      const dateNow = new Date();

      if (decodedToken && decodedToken.exp * 1000 > dateNow.getTime()) {
        return true;
      }

      return false;
    };

    const checkForToken = () => {
      const data = verifyAuth();
      setAuth(data);
    };

    checkForToken();
  });

  return { auth };
};

export default useAuth;
