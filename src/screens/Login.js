import React, { useState } from "react";
import NavBar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      alert("Logged in successfully!");
      setSubmitted(true);
    } else {
      alert("Please enter email and password");
    }
  };

  const headerContainer = {
    display: "flex",
    justifyContent: "space-between",
  };

  const header2 = {
    color: "white",
    backgroundColor: "white",
  };

  const styles = {
    loginContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    loginForm: {
      backgroundColor: "#ffffff",
      padding: "40px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
      width: "100%",
    },
    formTitle: {
      textAlign: "center",
      marginBottom: "30px",
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333333",
    },
    formField: {
      marginBottom: "20px",
    },
    formLabel: {
      display: "block",
      marginBottom: "5px",
      fontSize: "16px",
      color: "#555555",
    },
    formInput: {
      width: "calc(100% - 30px)",
      padding: "12px 15px",
      border: "1px solid #cccccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    formButton: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#007bff",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    formButtonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div
      style={{
        overflow: "hidden",

        backgroundColor: "rgb(38, 59, 214)",
        height: "100vh",
        width: "100%",
      }}
    >
      <div style={header2}>
        <div style={headerContainer}>
          <div
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              marginLeft: "200px",
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "rgb(38, 59, 214)", fontSize: "25px" }}>
              Job
            </span>{" "}
            Portal
          </div>
          <div style={{ marginRight: "200px" }}>
            <NavBar></NavBar>
          </div>
        </div>
      </div>
      <div style={styles.loginContainer}>
        <form style={styles.loginForm} onSubmit={handleSubmit}>
          <h2 style={styles.formTitle}>Login</h2>
          <div style={styles.formField}>
            <label style={styles.formLabel}>Email:</label>
            <input
              type="email"
              style={styles.formInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.formField}>
            <label style={styles.formLabel}>Password:</label>
            <input
              type="password"
              style={styles.formInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              ...styles.formButton,
              ...(submitted && styles.formButtonHover),
            }}
          >
            {submitted ? "Logging in..." : "Login"}
          </button>
          {submitted && (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              Welcome back!
            </p>
          )}
          <text style={{ textAlign: "center", marginTop: "20px" }}>
            <a
              style={{ textDecorationLine: "underline", color: "grey" }}
              href="/Register"
            >
              Register Here!
            </a>
          </text>
        </form>
      </div>
    </div>
  );
};

export default Login;
