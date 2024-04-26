import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  // Fetch user details from local storage on component mount
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUserDetails(JSON.parse(loggedInUser));
    }
  }, []);

  // Handle logout button click
  const handleLogout = () => {
    // Remove user details from local storage
    localStorage.removeItem('loggedInUser');
    // Navigate back to the home page
    navigate('/');
  };

  return (
    <div>
      <h2>User Profile</h2>
      {userDetails ? (
        <div>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          {/* Render additional user details as needed */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>User is not logged in.</p>
      )}
    </div>
  );
};

export default Profile;
