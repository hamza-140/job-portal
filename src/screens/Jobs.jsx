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
      const response = await fetch("http://localhost:3000/Jobs");
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

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
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
                            <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                              <span style={{ textTransform: 'capitalize' }} className="">{job.title}</span>
                            </h4>
                            <p  className="mt-4 text-base font-normal text-gray-500 leading-relax overflow-hidden h-20">
                              {job.description}
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
              <div className="flex justify-center mt-4">
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
