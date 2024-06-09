import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { Admin } from "./pages/admin";
import { ProtectedRoute } from "./components/protected-route";
import { Login } from "./pages/auth/login";
import { SignUp } from "./pages/auth/sign-up";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/sign-up" element={<SignUp />} />
      <Route
        path="/super-admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
