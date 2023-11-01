import { useContext, useEffect } from "react";

import { AuthContext } from "../context/auth";
import { UserContext } from "../context/user";
import { getUser } from "../services/api/users";

export const useCheckAuth = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const { setRole } = useContext(UserContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);

      getUser(token).then((user) => {
        setRole(user.role);
      });
    } else {
      setIsAuthenticated(false);
      setRole("");
      localStorage.clear();
    }
  }, [token]);
};
