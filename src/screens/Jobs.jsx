import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import thumbnail from "../assets/7753420.jpg";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleReturn = () => {
    navigate(-1);
  };

  const fetchJobs = async () => {
    try {
      const response = await fetch("http://localhost:8800/Jobs");
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
      const data = await response.json();
      setJobs(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const getTimeDifference = (createdAt) => {
    const currentTime = new Date();
    const postedTime = new Date(createdAt);
    const timeDifference = currentTime - postedTime;
    // Calculate time difference in milliseconds

    // Convert time difference to human-readable format
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);

    if (daysDifference > 0) {
      return `${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`;
    } else if (hoursDifference > 0) {
      return `${hoursDifference} hour${hoursDifference > 1 ? "s" : ""} ago`;
    } else if (minutesDifference > 0) {
      return `${minutesDifference} minute${
        minutesDifference > 1 ? "s" : ""
      } ago`;
    } else {
      return "Just now";
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center py-4 overflow-x-auto whitespace-nowrap">
        {/* Navigation bar */}
        <a
          href="/"
          style={{ textDecoration: "none" }}
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
          class="text-blue-600 dark:text-blue-400 hover:text-blue-500 hover:underline"
          style={{ textDecoration: "none" }}
        >
          Jobs
        </a>
      </div>
      <section className="mt-5 text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-screen">
              {/* Loading Spinner */}
            </div>
          ) : (
            <div>
              <div className="flex flex-wrap mx-auto md:flex-nowrap p-12">
                {jobs.length === 0 ? (
                  <div className="w-full text-center">No jobs available</div>
                ) : (
                  jobs.map((job) => (
                    <div key={job._id}>
                      <div className="flex w-full mr-5">
                        <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 hover:translate-y-[-8px] hover:translate-x-[16px]">
                          <img
                            className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                            src={thumbnail}
                            alt="blog"
                          />

                          <div className="px-6 py-8">
                            <p className="text-gray-400 text-sm mt-2">
                              Posted {getTimeDifference(job?.createdAt || "NA")}
                            </p>
                            <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                              <span
                                style={{ textTransform: "capitalize" }}
                                className=""
                              >
                                {job?.title || "NA"}
                              </span>
                            </h4>
                            <p className="mt-4 text-base font-normal text-gray-500 leading-relax overflow-hidden h-20">
                              {job?.description || "NA"}
                            </p>

                            <Link
                              to={`/Jobs/${job._id}`}
                              className="text-indigo-500 inline-flex items-center"
                            >
                              Learn More
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="flex justify-center mt-4 mb-10">
                <button
                  onClick={handleReturn}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Return
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Jobs;
