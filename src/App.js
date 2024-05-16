import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Jobs from "./screens/Jobs";
import Job from "./screens/Job";
import Publish from "./screens/Publish";
import Profile from "./screens/Profile";
import NotFound from "./screens/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import ApplyJobForm from "./screens/ApplyJobForm";
import JobApplications from "./screens/JobApplications";
import AvatarUploadForm from "./screens/AvatarUploadForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Avatar" element={<AvatarUploadForm />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Publish" element={<Publish />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Jobs/:_id" element={<Job />} />
        <Route path="/jobs/:job_id/apply/" element={<ApplyJobForm />} />
        <Route
          path="/jobs/:job_id/applications/"
          element={<JobApplications />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
