import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Mail, Phone } from "react-feather";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  // Fetch user details from local storage on component mount
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
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
                          <img
                            src="https://img.icons8.com/bubbles/100/000000/user.png"
                            className="img-radius"
                            alt="User-Profile-Image"
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
