import React from "react";

const Job = ({ jobId }) => {
  // Fetch job details based on jobId
  // You can fetch the job details from an API or use a dummy data array

  // Dummy job data
  const jobDetails = {
    id: jobId,
    category: "CATEGORY",
    title: "Job Web",
    description: "Job Description",
    likes: "1.2K",
    comments: "6"
  };

  const handleApplyNow = () => {
    // Handle apply now action
    console.log("Apply Now clicked for job ID:", jobId);
  };

  return (
    <div>
      <h1>Job Detail Page</h1>
      <h2>{jobDetails.title}</h2>
      <p>{jobDetails.description}</p>
      {/* Render other job details as needed */}
      <button onClick={handleApplyNow} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
        Apply Now
      </button>
    </div>
  );
};

export default Job;
