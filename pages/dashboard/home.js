import ModelPrediction from "@/components/querymodel";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [models, setModels] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchModels = async () => {
      const token = "9307bfd5fa011428ff198bb37547f979";
      const response = await fetch("https://api.up2tom.com/v3/models", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setModels(data.data);
    };
    fetchModels();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % models?.length);
  };

  if (models?.length === 0) {
    return <div>Loading...</div>;
  }

  const currentModel = models[currentIndex];

    const navigateToDashboard = () => {
        window.location.href = "/dashboard/home";
    };

    const navigateToLogin = () => {
        localStorage.removeItem("token");
        window.location.href = "/auth/login";
    };

  return (
    <>
      <div className="flex justify-between items-center py-4 px-8 bg-white">
        <div onClick={navigateToDashboard} className="text-lg font-bold cursor-pointer">Assessment App</div>
        <button
          onClick={navigateToLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>

      <ModelPrediction/>

      <div className="container mx-auto mt-8">
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-lg font-bold">{currentModel.attributes.name}</h2>
            <p className="text-sm text-black">Model ID {currentModel.id}</p>
            <p className="text-sm text-gray-500">{currentModel.attributes.description}</p>
          </div>
          <div className="p-4 bg-gray-50 flex justify-between">
            <button
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </div>
        </div>
      </div>

      <footer className="py-4 px-8 bg-gray-200 text-gray-600 text-sm text-center">
        &copy; 2023 Assessment App. All rights reserved.
      </footer>
    </>
  );
};

export default Dashboard;