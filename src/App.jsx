import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes";
import { AuthProvider } from "./context/auth";
import { UserProvider } from "./context/user";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
