import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth";

const useLogOut = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate("/");
  };

  return {
    logOut,
  };
};

export default useLogOut;
