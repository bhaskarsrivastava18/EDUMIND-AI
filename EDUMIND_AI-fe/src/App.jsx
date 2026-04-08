import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import ProfileSetup from "./pages/ProfileSetup";
import Interests from "./pages/Interests";
import Dashboard from "./pages/Dashboard";
import Exam from "./pages/Exam";
import StudyPlan from "./pages/Studyplan";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfileSetup />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/Studyplan" element={<StudyPlan />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;