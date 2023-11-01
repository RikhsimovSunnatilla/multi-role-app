import { createContext, useState } from "react";

export const UserContext = createContext({
  role: "",
  setRole: (val) => null,
});

export const UserProvider = ({ children }) => {
  const [role, setRole] = useState("");

  return <UserContext.Provider value={{ role, setRole }}>{children}</UserContext.Provider>;
};
