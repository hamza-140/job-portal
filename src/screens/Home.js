import React, { useState, useEffect } from "react";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there is any login information stored in local storage
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Home;
