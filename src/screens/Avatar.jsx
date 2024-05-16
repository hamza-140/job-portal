import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Avatar.css";
import avatarPlaceholder from "../assets/avatar.png";

const Avatar = ({ avatarId }) => {
  const [avatarData, setAvatarData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAvatarData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/avatars/${avatarId}`
        );
        setAvatarData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching avatar data:", error);
        setLoading(false);
      }
    };

    fetchAvatarData();
  }, [avatarId]);

  return (
    <div>
      {loading ? (
        <img src={avatarPlaceholder} alt="Avatar" className="avatar" />
      ) : (
        <img
          src={`data:image/jpeg;base64,${avatarData}`}
          alt="Avatar"
          className="avatar"
        />
      )}
    </div>
  );
};

export default Avatar;
