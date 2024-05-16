import React, { useState } from "react";
import axios from "axios";
import Avatar from "./Avatar";

const AvatarUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("avatar", selectedFile);

    axios
      .post("http://localhost:8800/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Image uploaded successfully");
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Avatar</button>
      <Avatar avatarId="6645eb4c1d994a8ed3519a80" />
    </div>
  );
};

export default AvatarUploadForm;
