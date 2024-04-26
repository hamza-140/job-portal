import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Jobs from "./screens/Jobs";
import Job from "./screens/Job";
import Publish from "./screens/Publish";
import Profile from "./screens/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Publish" element={<Publish />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Jobs/:_id" element={<Job />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
