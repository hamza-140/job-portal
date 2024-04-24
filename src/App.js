import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Jobs from "./screens/Jobs";
import Job from "./screens/Job";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Jobs/:id" element={<Job />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
