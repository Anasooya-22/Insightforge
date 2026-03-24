import { useEffect, useState } from "react";
import axios from "axios";

interface Question {
  id: string;
  questionText: string;
  questionType: string;
}

interface Study {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export default function SurveyPage() {
  const [study, setStudy] = useState<Study | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const studyId = "8f47c4b3-8050-401f-b292-ff4b3fa0b932"; // 🔁 replace with your study id
  const userId = "38d234af-5bf3-4b50-804f-af5f71b9f54f"; // 🔁 your user id

  // 🔹 Fetch study + questions
  useEffect(() => {
    const fetchStudy = async () => {
      const res = await axios.get(
        `http://127.0.0.1:3000/api/studies/${studyId}/full`
      );
      setStudy(res.data);
    };

    fetchStudy();
  }, []);

  // 🔹 Handle input change
  const handleChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  // 🔹 Submit all responses
  const handleSubmit = async () => {
    try {
      const requests = Object.entries(answers).map(
        ([questionId, answer]) =>
          axios.post("http://127.0.0.1:3000/api/responses", {
            questionId,
            userId,
            answer,
          })
      );

      await Promise.all(requests);

      alert("Responses submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit responses");
    }
  };

  if (!study) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{study.title}</h1>
      <p>{study.description}</p>

      {study.questions.map((q) => (
        <div key={q.id} style={{ marginBottom: "20px" }}>
          <p><strong>{q.questionText}</strong></p>

          {/* TEXT QUESTION */}
          {q.questionType === "text" && (
            <input
              type="text"
              onChange={(e) => handleChange(q.id, e.target.value)}
            />
          )}

          {/* RATING QUESTION */}
          {q.questionType === "rating" && (
            <select onChange={(e) => handleChange(q.id, e.target.value)}>
              <option value="">Select rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2</option>
              <option value="3">3 - Average</option>
              <option value="4">4</option>
              <option value="5">5 - Excellent</option>
            </select>
          )}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}