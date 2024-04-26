import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Job = () => {
  const { _id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobDetails();
  }, [_id]);

  const fetchJobDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/Jobs/${_id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch job details");
      }
      const data = await response.json();
      setJobDetails(data);
      setIsLoading(false); // Update loading status when data is fetched
    } catch (error) {
      console.error(error);
    }
  };

  const handleApplyNow = () => {
    if (isLoggedIn()) {
      console.log("Apply Now clicked for job ID:", _id);
    } else {
      // Redirect to login page with return URL
      navigate("/login", { state: { returnTo: `/jobs/${_id}` } });
    }
  };

  const handleReturn = () => {
    navigate(-1);
  };

  const isLoggedIn = () => {
    // Check if user is logged in
    return localStorage.getItem("isLoggedIn") === "true";
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div role="status">
          {/* Loading spinner */}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm rounded overflow-hidden bg-purple-100 shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{jobDetails.title}</div>
          <p className="text-gray-700 text-base">{jobDetails.description}</p>
        </div>
        <div className="px-6 py-4">
          <button
            onClick={handleApplyNow}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Apply Now
          </button>
          <button
            onClick={handleReturn}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
