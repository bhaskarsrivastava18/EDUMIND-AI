import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import ProfileSetup from "./pages/ProfileSetup";
import Interests from "./pages/Interests";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfileSetup />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;