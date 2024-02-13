import React from 'react';

const Contact = () => {
  return (
    <div style={{ backgroundImage: 'url("https://demo.phpjabbers.com/free-web-templates/job-website-template-136/images/contact-1-600x400.jpg")', backgroundSize: 'cover', minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <h1>
          Get in <span style={{ color: "#263bd6" }}>Touch</span>
        </h1>
        <form
          style={{ maxWidth: "600px", textAlign: "center", margin: "20px auto", backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "20px", borderRadius: "10px", boxShadow: "0 1px 1px rgba(black, 0.1)" }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ marginRight: "80px" }}>
              <input
                style={{
                  border: "1px solid #263bd6",
                  outline: 0,
                  padding: "1em",
                  borderRadius: "8px",
                  display: "block",
                  width: "100%",
                  marginTop: "1em",
                  boxShadow: "0 1px 1px rgba(black, 0.1)",
                  resize: "none",
                }}
                type="text"
                id="input-name"
                placeholder="Name"
              />
              <input
                style={{
                  border: "1px solid #263bd6",
                  outline: 0,
                  padding: "1em",
                  borderRadius: "8px",
                  display: "block",
                  width: "100%",
                  marginTop: "1em",
                  boxShadow: "0 1px 1px rgba(black, 0.1)",
                  resize: "none",
                }}
                type="email"
                id="input-email"
                placeholder="Email address"
              />
              <input
                style={{
                  border: "1px solid #263bd6",
                  outline: 0,
                  padding: "1em",
                  borderRadius: "8px",
                  display: "block",
                  width: "100%",
                  marginTop: "1em",
                  boxShadow: "0 1px 1px rgba(black, 0.1)",
                  resize: "none",
                }}
                type="text"
                id="input-subject"
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                name="message"
                type="text"
                id="input-message"
                placeholder="Message"
                style={{
                  border: "1px solid #263bd6",
                  outline: 0,
                  padding: "40px",
                  borderRadius: "8px",
                  display: "block",
                  width: "100%",
                  marginTop: "1em",
                  boxShadow: "0 1px 1px rgba(black, 0.1)",
                  resize: "none",
                }}
              ></textarea>
            </div>
            <input
              style={{
                border: 0,
                outline: 0,
                padding: "1em",
                borderRadius: "8px",
                display: "block",
                width: "100%",
                marginTop: "1em",
                boxShadow: "0 1px 1px rgba(black, 0.1)",
                resize: "none",
                backgroundColor: "#263bd6",
                color: "white",
                cursor: "pointer"
              }}
              type="submit"
              value="Submit"
              id="input-submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
