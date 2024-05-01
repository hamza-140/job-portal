import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import thumbnail from "../assets/7753420.jpg";
import creator from "../assets/creator.png";

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
          className="text-gray-600 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
        <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <a
          className="text-blue-600 dark:text-blue-400 hover:text-blue-500 hover:underline"
          style={{ textDecoration: "none" }}
        >
          Jobs
        </a>
      </div>
      <section className="mt-5 text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          {isLoading ? (
            <div className="container px-6 py-10 mx-auto animate-pulse">
              {/* Skeleton UI markup */}
              <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>
              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>
                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>
                <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>
                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>
                <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>
                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>
                \{" "}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-wrap mx-auto md:flex-nowrap p-12">
                {jobs.length === 0 ? (
                  <div className="w-full text-center">No jobs available.</div>
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
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={creator}
                                alt="thumbnail"
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "50%",
                                }}
                              />

                              <p className="text-gray-400 text-sm mt-3">
                                Posted By {job?.creator || "NA"}
                              </p>
                            </div>
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
