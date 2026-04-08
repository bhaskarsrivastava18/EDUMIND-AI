import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUser, logout } from "../utils/auth";

function Dashboard() {
  const navigate = useNavigate();
  const user = getUser();

  useEffect(() => {
    if (!user) navigate("/login");
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-linear-to-b from-blue-700 to-blue-500 text-white p-6 flex flex-col justify-between rounded-r-3xl">

        <div>
          <h1 className="text-xl font-bold mb-10">EduMind AI</h1>

          <nav className="space-y-4">
            <p className="bg-white text-blue-600 px-4 py-2 rounded-lg cursor-pointer">
              Dashboard
            </p>

            <p
              onClick={() => navigate("/study-plan")}
              className="cursor-pointer hover:opacity-80"
            >
              Study Plan
            </p>

            <p
              onClick={() => navigate("/exams")}
              className="cursor-pointer hover:opacity-80"
            >
              Exams
            </p>

            <p
              onClick={() => navigate("/profile")}
              className="cursor-pointer hover:opacity-80"
            >
              Profile
            </p>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-6 overflow-y-auto">

        {/* HEADER */}
        <h2 className="text-2xl font-bold mb-6">
          Welcome, {user?.name || "User"} 🧠✨
        </h2>

        {/* TOP CARDS */}
        <div className="grid grid-cols-3 gap-6 mb-6">

          {/* Study Plan */}
          <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Study Plan</h3>
              <p className="text-sm text-gray-500">
                Generate your personalized study schedule.
              </p>
              <button
                onClick={() => navigate("/Studyplan")}
                className="mt-3 bg-blue-600 text-white px-4 py-1 rounded"
              >
                Create Plan
              </button>
            </div>
            <span className="text-3xl">📅</span>
          </div>

          {/* Exams */}
          <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Explore Exams</h3>
              <p className="text-sm text-gray-500">
                Browse government exams and details.
              </p>
              <button
                onClick={() => navigate("/Exam")}
                className="mt-3 bg-blue-600 text-white px-4 py-1 rounded"
              >
                View Exams
              </button>
            </div>
            <span className="text-3xl">🌍</span>
          </div>

          {/* Profile */}
          <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Profile</h3>
              <p className="text-sm text-gray-500">
                Update your preferences and info.
              </p>
              <button
                onClick={() => navigate("/profile")}
                className="mt-3 bg-blue-600 text-white px-4 py-1 rounded"
              >
                Edit Profile
              </button>
            </div>
            <span className="text-3xl">⚙️</span>
          </div>

        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-3 gap-6 mb-6">

          {/* Performance */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-2">AI Exam Performance Insights</h3>
            <p className="text-sm text-gray-500 mb-3">
              Preparation Score: 78% (On Track)
            </p>

            <div className="h-32 flex items-center justify-center text-blue-600 font-bold">
              📊 Chart Placeholder
            </div>
          </div>

          {/* Roadmap */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Dynamic Study Roadmap</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✔ Quantitative Aptitude</li>
              <li>✔ English Practice</li>
              <li>✔ Mock Tests</li>
              <li>✔ General Awareness</li>
            </ul>
          </div>

          {/* Community */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Top Strategies</h3>

            <div className="text-sm text-gray-600 space-y-2">
              <p>🔥 SSC CGL Strategy (Top Rated)</p>
              <p>📘 JEE Plan (Top Rated)</p>
              <p>📊 UPSC Timeline Guide</p>
            </div>
          </div>

        </div>

        {/* THIRD ROW */}
        <div className="grid grid-cols-3 gap-6">

          {/* Recommendations */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-2">AI Skill Recommendations</h3>

            <ul className="text-sm text-gray-600 list-disc ml-4">
              <li>Practice Percentage</li>
              <li>Improve English</li>
              <li>Revise Reasoning</li>
              <li>General Awareness</li>
            </ul>
          </div>

          <div></div>
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-2">AI Daily Tip</h3>
            <p className="text-sm text-gray-600">
              Take a 5-minute break every hour to improve focus.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;