import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ApplyJobForm = () => {
  const { job_id } = useParams();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [user_Id, setUser_Id] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setName(JSON.parse(loggedInUser)?.name || "NA");
      setEmail(JSON.parse(loggedInUser)?.email || "NA");
      setPhoneNumber(JSON.parse(loggedInUser)?.phone || "NA");
      setUser_Id(JSON.parse(loggedInUser)?._id || "NA");
      setUserDetails(JSON.parse(loggedInUser));
    }
    console.log(JSON.parse(loggedInUser));
  }, []);
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:8800/jobs/${job_id}/apply`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_Id, name, email, phoneNumber }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to apply for job");
      }
      // Clear form fields on successful submission

      setIsLoading(false);
      setSuccessMessage("Applied successfully!");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setErrorMessage("Failed to apply for job");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 font-bold">Apply for Job</h2>
      {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
      {successMessage && (
        <p className="text-green-500 mb-2">{successMessage}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cvFile"
            className="block text-sm font-medium text-gray-700"
          >
            CV File (.doc, .pdf, .docx)
          </label>
          <input
            type="file"
            id="cvFile"
            accept=".doc, .docx, .pdf"
            onChange={(e) => setCvFile(e.target.files[0])}
            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="coverLetter"
            className="block text-sm font-medium text-gray-700"
          >
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isLoading ? "Submitting..." : "Submit Application"}
        </button>
        <button
          onClick={handleReturn}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Return
        </button>
      </form>
    </div>
  );
};

export default ApplyJobForm;
