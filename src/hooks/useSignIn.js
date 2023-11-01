import { useContext } from "react";

import { AuthContext } from "../context/auth";
import { getUsers } from "../services/api/users";

const useSignIn = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const triggerSignIn = async (formData) => {
    const users = await getUsers();

    const foundUser = users.find((user) => user.email === formData.email);

    if (foundUser) {
      localStorage.setItem("token", foundUser.id);
      setIsAuthenticated(true);
    } else {
      alert("User not found :(");
      localStorage.clear();
      setIsAuthenticated(false);
    }
  };

  return {
    triggerSignIn,
  };
};

export default useSignIn;
