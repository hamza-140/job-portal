import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null); // State to store the uploaded avatar
  const [submitted, setSubmitted] = useState(false);
  const history = useNavigate();
  const handleSubmit = async (event) => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    event.preventDefault();

    axios
      .post("http://localhost:8800/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const userId = response.data.userId; // Assuming your backend sends the ID as userId
        console.log(response.data);
        setName("");
        setAvatar(null);
        setEmail("");
        setPassword("");
        setSubmitted(true);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ id: userId, name, email })
        );
        localStorage.setItem("isLoggedIn", "true");
        history("/");
        console.log("User created successfully");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };
  // const handleSubmit = async (event) => {
  //   const formData = new FormData();
  //   formData.append("avatar", avatar);
  //   event.preventDefault();
  //   try {
  //     // console.log(name, email, password, avatar);
  //     const response = await fetch("http://localhost:8800/users", formData, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ name, email, password }),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to add user");
  //     }
  //     setName("");
  //     setEmail("");
  //     setPassword("");
  //     setSubmitted(true);
  //     localStorage.setItem("loggedInUser", JSON.stringify({ name, email }));
  //     localStorage.setItem("isLoggedIn", "true");
  //     history("/");
  //   } catch (error) {
  //     console.error(error);
  //     alert("Failed to add user");
  //   }
  // };

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
            <NavBar />
          </div>
        </div>
      </div>
      <div style={styles.loginContainer}>
        <form style={styles.loginForm} onSubmit={handleSubmit}>
          <h2 style={styles.formTitle}>Register</h2>
          <div style={styles.formField}>
            <label style={styles.formLabel}>Name:</label>
            <input
              style={styles.formInput}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <div style={styles.formField}>
            <label style={styles.formLabel}>Avatar:</label>
            <input
              type="file"
              style={styles.formInput}
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
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
            {submitted ? "Registering..." : "Register"}
          </button>
          {submitted && (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              Welcome! You are now registered.
            </p>
          )}
          <text style={{ textAlign: "center", marginTop: "20px" }}>
            <a
              style={{ textDecorationLine: "underline", color: "grey" }}
              href="/Login"
            >
              Login Here!
            </a>
          </text>
        </form>
      </div>
    </div>
  );
};

export default Register;
