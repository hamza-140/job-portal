import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Mail, Phone } from "react-feather";
import Avatar from "./Avatar";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  // Fetch user details from local storage on component mount
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      console.log(JSON.parse(loggedInUser));
      setUserDetails(JSON.parse(loggedInUser));
    }
  }, []);

  // Handle logout button click
  const handleLogout = () => {
    // Remove user details from local storage
    localStorage.removeItem("loggedInUser");
    localStorage.setItem("isLoggedIn", "false");
    // Navigate back to the home page
    navigate("/");
  };

  return (
    <div className="content-center">
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
          Profile
        </a>
      </div>
      {userDetails ? (
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                  <div className="row m-l-0 m-r-0">
                    <div className="col-sm-4 user-profile blue-gradient d-flex align-items-center justify-content-center">
                      <div className="card-block text-center text-white">
                        <div className="m-b-25">
                          <Avatar
                            avatarId={
                              userDetails?.id || "6645eb4c1d994a8ed3519a80"
                            }
                          />
                        </div>
                        <h2
                          style={{ fontFamily: "Tilt Neon" }}
                          className="f-w-600"
                        >
                          {userDetails?.name || "NA"}
                        </h2>
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="card-block">
                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                          Information
                        </h6>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                              <Mail size={16} className="m-b-10" />
                              <p className="m-b-10 f-w-600 ms-2">Email</p>
                            </div>
                            <h6 className="text-muted f-w-400">
                              {userDetails?.email || "NA"}{" "}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                              <Phone size={16} className="m-b-10" />
                              <p className="m-b-10 f-w-600 ms-2">Phone</p>
                            </div>
                            <h6 className="text-muted f-w-400">
                              {userDetails?.phone || "NA"}
                            </h6>
                          </div>
                        </div>
                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                          Skills
                        </h6>
                        <div className="row"></div>
                        <div className="text-center mt-5">
                          <button
                            className="btn btn-outline-primary"
                            onClick={() => {
                              navigate(-1);
                            }}
                          >
                            Return
                          </button>
                          <button
                            className="btn btn-outline-danger ml-2"
                            onClick={handleLogout}
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>User is not logged in.</p>
      )}
    </div>
  );
};

export default Profile;
