import { useContext, useEffect } from "react";

import { AuthContext } from "../context/auth";

export const useCheckAuth = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      localStorage.clear();
    }
  }, []);
};
