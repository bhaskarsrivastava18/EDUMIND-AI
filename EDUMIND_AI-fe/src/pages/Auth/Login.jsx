import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../services/api";
import { setUser } from "../../utils/auth";

function Login() {
  const [isSignup, setIsSignup] = useState(true);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async () => {
    try {
      setLoading(true);

      if (isSignup) {
        await registerUser(form);
        alert("Signup successful! Please login.");
        setIsSignup(false);
      } else {
        const res = await loginUser({
          email: form.email,
          password: form.password,
        });

        setUser(res.data);

        // ✅ FIXED NAVIGATION
        navigate("/profile");
      }
    } catch (err) {
      alert(
        "Error: " +
          (err.response?.data?.detail || "Something went wrong")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="w-[950px] h-[600px] bg-white rounded-3xl flex overflow-hidden shadow-xl">

        {/* LEFT SIDE */}
        <div className="w-1/2 bg-gradient-to-br from-blue-600 to-blue-400 text-white p-10 flex flex-col justify-between">

          <h2 className="text-lg font-semibold">EduMind AI</h2>

          <div>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Join Your <br /> Digital Atelier
            </h1>

            <p className="text-sm opacity-90">
              Start your learning journey with thousands of students across India.
            </p>
          </div>

          <p className="text-sm opacity-80">🌱 Growing Community</p>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 p-10 flex flex-col justify-center">

          <h2 className="text-2xl font-bold mb-2">
            {isSignup ? "Create your account" : "Welcome back"}
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            {isSignup
              ? "Begin your mastery today with personalized mentorship."
              : "Login to continue your journey."}
          </p>

          {/* GOOGLE BUTTON */}
          <button className="bg-gray-100 hover:bg-gray-200 transition p-3 rounded-lg mb-4 flex items-center justify-center gap-2">
            🔍 {isSignup ? "Sign up with Google" : "Login with Google"}
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="text-gray-400 text-xs">OR EMAIL</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* NAME (SIGNUP ONLY) */}
          {isSignup && (
            <div className="mb-4">
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Aarav Sharma"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="aarav@lumina.edu"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-md transition"
          >
            {loading
              ? "Please wait..."
              : isSignup
              ? "Create Account"
              : "Login"}
          </button>

          {/* TOGGLE */}
          <p className="text-sm text-center mt-4">
            {isSignup
              ? "Already have an account?"
              : "Don't have an account?"}

            <span
              onClick={() => setIsSignup(!isSignup)}
              className="text-blue-600 ml-1 cursor-pointer font-medium"
            >
              {isSignup ? "Login" : "Sign up"}
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;