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
      const response = await fetch(`http://localhost:8800/Jobs/${_id}`);
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
      navigate(`/jobs/${_id}/apply`)
      console.log("Apply Now clicked for job ID:", _id);
    } else {
      // Redirect to login page with return URL
      navigate("/login", { state: { returnTo: `/jobs/${_id}` } });
    }
  };

  const applicants = ()=>{
    navigate(`/jobs/${_id}/applications`)
  }

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
        <div role="status">{/* Loading spinner */}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center items-center py-4 overflow-x-auto whitespace-nowrap">
        {/* Navigation bar */}
        <a
          href="/"
          style={{textDecoration:'none'}}
          class="text-gray-600 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
        <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <a
          href="/jobs"
          class="text-gray-600 dark:text-gray-400 hover:text-blue-500 hover:underline"
          style={{textDecoration:'none'}}

        >
          Jobs
        </a>
        <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <a
          class="text-blue-600 dark:text-blue-400 hover:text-blue-500 hover:underline"
          style={{textDecoration:'none'}}

        >
          {jobDetails.title}
        </a>
      </div>
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
              onClick={applicants}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              See applicants
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
    </div>
  );
};

export default Job;
