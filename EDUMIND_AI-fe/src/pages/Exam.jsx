import { useEffect, useState } from "react";
import axios from "axios";

function Exams() {
  const [exams, setExams] = useState([]);

    const fetchExams = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/exams");
      setExams(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to load exams");
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);


  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      <h1 className="text-2xl font-bold mb-6">Explore Government Exams</h1>

      <div className="grid grid-cols-3 gap-6">

        {exams.map((exam) => (
          <div
            key={exam.id}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-lg font-semibold mb-2">
              {exam.name}
            </h2>

            <p className="text-sm text-gray-500 mb-2">
              {exam.description}
            </p>

            <p className="text-sm mb-1">
              📅 Date: {exam.date}
            </p>

            <p className="text-sm mb-3">
              🎓 Eligibility: {exam.eligibility}
            </p>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              View Details
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Exams;