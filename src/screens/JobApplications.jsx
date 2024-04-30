import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const JobApplications = () => {
    const { job_id } = useParams();
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchApplications = async () => {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const response = await axios.get(`http://localhost:8800/jobs/${job_id}/applications`);
        console.log(response.data);
        setApplications(response.data);
      } catch (error) {
        setErrorMessage("Error retrieving job applications. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, [job_id]); // Fetch applications when jobId changes

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 font-bold">Job Applications</h2>
      {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : applications.length === 0 ? (
        <p>No applicants</p>
      ) : (
        <ul>
          {applications.map((application) => (
            <li key={application._id} className="mb-4 p-4 bg-gray-100 rounded-lg">
              <p className="font-semibold">Name: {application.name}</p>
              <p>Email: {application.email}</p>
              <p>Phone Number: {application.phoneNumber || "NA"}</p>
              <p>CV Path: {application.cvPath || "NA"}</p>
              <p>Cover Letter: {application.coverLetter || "NA"}</p>
              <p>Applied At: {new Date(application.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobApplications;
