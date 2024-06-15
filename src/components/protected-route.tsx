import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import api from "@/actions/api";
import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    auth().catch(() => setIsAuthorized(false));
  }, []);

  const refreshToken = async () => {
    const RefreshToken = localStorage.getItem(REFRESH_TOKEN);

    try {
      const res = await api.post("api/token/refresh/", {
        refresh: RefreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access),
          setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.error(error);
      setIsAuthorized(false);
    }
  };
  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      return;
    }

    const decodedToken = jwtDecode(token);

    const tokenExp = decodedToken.exp;
    const now = Date.now() / 1000;
    if (tokenExp < now) {
      await refreshToken();
    } else {
      setIsAuthorized(true);
    }
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }
  return isAuthorized ? children : <Navigate to={"/auth/login"} />;
};
