import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileSetup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    city: "",
    classType: "",
    institute: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="w-[1000px] h-[600px] bg-white rounded-3xl flex overflow-hidden shadow-xl">

        {/* LEFT PANEL */}
        <div className="w-1/3 bg-gradient-to-br from-blue-600 to-blue-400 text-white p-8 flex flex-col justify-between">

          <div>
            <h2 className="text-lg font-semibold mb-6">Lumina Academy</h2>

            <h1 className="text-2xl font-bold mb-4">
              Your Journey Starts Here
            </h1>

            <p className="text-sm opacity-90 mb-6">
              Help us personalize your learning experience.
            </p>

            <div className="space-y-3 text-sm">
              <p className="font-semibold">1. Basic Info</p>
              <p className="opacity-70">2. Interests</p>
              <p className="opacity-70">3. Target Exams</p>
            </div>
          </div>

          <p className="text-xs opacity-70">
            "Education is the kindling of a flame, not the filling of a vessel."
          </p>

        </div>

        {/* RIGHT PANEL */}
        <div className="w-2/3 p-10 flex flex-col justify-center">

          <h2 className="text-xl font-bold mb-2">
            Let's get the basics right
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Where are you studying and what’s your current grade?
          </p>

          {/* CITY */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">
              Current City in India
            </label>
            <input
              type="text"
              name="city"
              placeholder="e.g. Mumbai, Kota, Delhi"
              value={form.city}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* CLASS SELECTION */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">
              Current Academic Standing
            </label>

            <div className="flex gap-4 mt-2">

              <div
                onClick={() =>
                  setForm({ ...form, classType: "12th" })
                }
                className={`flex-1 p-4 rounded-lg cursor-pointer border ${
                  form.classType === "12th"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200"
                }`}
              >
                <p className="font-semibold">Class 12th</p>
                <p className="text-xs text-gray-500">
                  Senior Secondary
                </p>
              </div>

              <div
                onClick={() =>
                  setForm({ ...form, classType: "dropper" })
                }
                className={`flex-1 p-4 rounded-lg cursor-pointer border ${
                  form.classType === "dropper"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200"
                }`}
              >
                <p className="font-semibold">12th Plus / Dropper</p>
                <p className="text-xs text-gray-500">
                  Preparation Year
                </p>
              </div>

            </div>
          </div>

          {/* INSTITUTE */}
          <div className="mb-6">
            <label className="text-sm text-gray-600">
              School or Coaching Institute
            </label>
            <input
              type="text"
              name="institute"
              placeholder="Optional"
              value={form.institute}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate("/login")}
              className="text-gray-500"
            >
              Back
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
            >
              Continue →
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProfileSetup;