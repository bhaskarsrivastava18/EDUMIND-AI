import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Interests() {
  const navigate = useNavigate();

  const options = [
    "Engineering (JEE)",
    "Medical (NEET)",
    "UPSC",
    "SSC",
    "Banking",
    "Railways",
    "Defence",
    "State Govt Exams",
  ];

  const [selected, setSelected] = useState([]);

  const toggleInterest = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const handleContinue = () => {
    console.log("Selected Interests:", selected);

    // 👉 later send to backend

    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="w-[1000px] h-[600px] bg-white rounded-3xl flex overflow-hidden shadow-xl">

        {/* LEFT PANEL */}
        <div className="w-1/3 bg-gradient-to-br from-blue-600 to-blue-400 text-white p-8 flex flex-col justify-between">

          <div>
            <h2 className="text-lg font-semibold mb-6">EduMind AI</h2>

            <h1 className="text-2xl font-bold mb-4">
              Choose Your Interests
            </h1>

            <p className="text-sm opacity-90">
              Help us personalize your exam strategy.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <p className="opacity-70">1. Basic Info</p>
              <p className="font-semibold">2. Interests</p>
            </div>
          </div>

          <p className="text-xs opacity-70">
            "Success is where preparation meets opportunity."
          </p>

        </div>

        {/* RIGHT PANEL */}
        <div className="w-2/3 p-10 flex flex-col justify-center">

          <h2 className="text-xl font-bold mb-2">
            What are you preparing for?
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Select one or more options
          </p>

          {/* OPTIONS GRID */}
          <div className="grid grid-cols-2 gap-4 mb-6">

            {options.map((item, index) => (
              <div
                key={index}
                onClick={() => toggleInterest(item)}
                className={`p-4 rounded-lg border cursor-pointer transition ${
                  selected.includes(item)
                    ? "bg-blue-50 border-blue-600"
                    : "border-gray-200 hover:border-blue-400"
                }`}
              >
                {item}
              </div>
            ))}

          </div>

          {/* BUTTONS */}
          <div className="flex justify-between">

            <button
              onClick={() => navigate("/profile")}
              className="text-gray-500"
            >
              Back
            </button>

            <button
              onClick={handleContinue}
              disabled={selected.length === 0}
              className={`px-6 py-3 rounded-lg shadow-md transition ${
                selected.length === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              Continue →
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Interests;
