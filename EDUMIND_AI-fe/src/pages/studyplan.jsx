import { useState } from "react";
import axios from "axios";

function StudyPlan() {
  const [hours, setHours] = useState("");
  const [exam, setExam] = useState("");
  const [weakness, setWeakness] = useState("");
  const [plan, setPlan] = useState([]);

  const generatePlan = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/generate-plan", {
        hours_per_day: hours,
        exam: exam,
        weakness: weakness,
      });

      setPlan(res.data.plan);
    } catch (err) {
      console.log(err);
      alert("Failed to generate plan");
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      <h1 className="text-2xl font-bold mb-6">AI Study Plan Generator</h1>

      {/* INPUT FORM */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6 w-[400px]">

        <input
          type="number"
          placeholder="Hours per day"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          placeholder="Exam (e.g. UPSC, JEE)"
          value={exam}
          onChange={(e) => setExam(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          placeholder="Weak subject"
          value={weakness}
          onChange={(e) => setWeakness(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={generatePlan}
          className="bg-blue-600 text-white w-full py-3 rounded"
        >
          Generate Plan 🚀
        </button>
      </div>

      {/* OUTPUT */}
      <div className="grid grid-cols-3 gap-4">
        {plan.map((day, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">{day.day}</h3>
            <ul className="text-sm text-gray-600">
              {day.tasks.map((task, i) => (
                <li key={i}>• {task}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>

    </div>
  );
}

export default StudyPlan;