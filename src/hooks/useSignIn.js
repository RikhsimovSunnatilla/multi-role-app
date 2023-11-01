import { useContext } from "react";

import { AuthContext } from "../context/auth";
import { signIn } from "../services/api/signIn";

const useSignIn = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const triggerSignIn = async (formData) => {
    return await signIn(formData)
      .then(() => {
        localStorage.setItem("token", formData.email);
        setIsAuthenticated(true);
      })
      .catch((err) => {
        localStorage.clear();
        console.error(err);
        setIsAuthenticated(false);
      });
  };

  return {
    triggerSignIn,
  };
};

export default useSignIn;
