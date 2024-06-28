import React, { useState } from "react";

const App = () => {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    text: "",
    time: "",
  });

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/schedule-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (response.ok) {
      alert("Email scheduled successfully");
      setEmailData({
        to: "",
        subject: "",
        text: "",
        time: "",
      });
    } else {
      alert("Failed to schedule email");
    }
  };

  return (
    <div>
      <h1>Schedule an Email</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>To:</label>
          <input
            type="email"
            name="to"
            value={emailData.to}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={emailData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Text:</label>
          <textarea
            name="text"
            value={emailData.text}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Time:</label>
          <input
            type="datetime-local"
            name="time"
            value={emailData.time}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Schedule Email</button>
      </form>
    </div>
  );
};

export default App;
