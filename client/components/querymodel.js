import { useState } from "react";
import { questions } from "./questions";
import { toast } from "react-hot-toast";
import axios from "axios";

const ModelPrediction = () => {
  const [inputValues, setInputValues] = useState({});
  const [prediction, setPrediction] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

    const handleSubmit = async (event) => {
    event.preventDefault();
    const token = "9307bfd5fa011428ff198bb37547f979";
    const model = "58d3bcf97c6b1644db73ad12";
    const apiUrl = `https://api.up2tom.com/v3/decision/${model}`;
    const data = {
        data: {
        type: "scenario",
        attributes: {
            input: inputValues,
        },
        },
    };
    try {
        const response = await axios.post(apiUrl, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/vnd.api+json",
        },
        });
        setPrediction(response.data);
    } catch (error) {
        console.error(error.message);
        alert(error.message);
    }
    };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">{currentQuestion.label}</label>
          {currentQuestion.type === "number" && (
            <input
              type="number"
              name={currentQuestion.name}
              value={inputValues[currentQuestion.name] || ""}
              onChange={handleInputChange}
              className="w-full border rounded py-2 px-3"
            />
          )}
          {currentQuestion.type === "select" && (
            <select
              name={currentQuestion.name}
              value={inputValues[currentQuestion.name] || ""}
              onChange={handleInputChange}
              className="w-full border rounded py-2 px-3"
            >
              {currentQuestion.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
        {currentQuestionIndex < questions.length - 1 && (
          <button
            type="button"
            onClick={() => setCurrentQuestionIndex((index) => index + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        )}
        {currentQuestionIndex === questions.length - 1 && (
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        )}
      </form>
      {prediction && (
        <div className="mt-4 bg-green-100 p-4 rounded">
          <p className="font-bold mb-2">Decision Infomation:</p>
          <p>Decision: {prediction.data.attributes.decision}</p>
          <p>Level of confidence: {prediction.data.attributes.confidence}</p>
          <p>Date of decision: {new Date(prediction.data.attributes.timestamp).toLocaleDateString("en-UK")}</p>
          <p>Type of query: {prediction.data.type}</p>
        </div>
      )}
    </div>
  );
};

export default ModelPrediction;
