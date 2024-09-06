import React, { useState, useEffect } from "react";
import axios from "axios";

const CourseUpload = () => {
  const [title, setTitle] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [previewLink, setPreviewLink] = useState("");

  // useEffect(() => {
  //   if (previewLink) {
  //     // Initialize the SCORM API when the previewLink is set
  //     window.API_1484_11 = {
  //       Initialize: function (str) {
  //         return fetch("/api/scorm/Initialize", {
  //           method: "POST",
  //           body: JSON.stringify({ str }),
  //           headers: { "Content-Type": "application/json" },
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             console.log("Initialize:", data);
  //             return data.success ? "true" : "false";
  //           });
  //       },
  //       Terminate: function (str) {
  //         return fetch("/api/scorm/Terminate", {
  //           method: "POST",
  //           body: JSON.stringify({ str }),
  //           headers: { "Content-Type": "application/json" },
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             console.log("Terminate:", data);
  //             return data.success ? "true" : "false";
  //           });
  //       },
  //       GetValue: function (str) {
  //         return fetch("/api/scorm/GetValue", {
  //           method: "POST",
  //           body: JSON.stringify({ key: str }),
  //           headers: { "Content-Type": "application/json" },
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             console.log("GetValue:", data);
  //             return data.value;
  //           });
  //       },
  //       SetValue: function (str, val) {
  //         return fetch("/api/scorm/SetValue", {
  //           method: "POST",
  //           body: JSON.stringify({ key: str, value: val }),
  //           headers: { "Content-Type": "application/json" },
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             console.log("SetValue:", data);
  //             return data.success ? "true" : "false";
  //           });
  //       },
  //       Commit: function (str) {
  //         return fetch("/api/scorm/Commit", {
  //           method: "POST",
  //           body: JSON.stringify({ str }),
  //           headers: { "Content-Type": "application/json" },
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             console.log("Commit:", data);
  //             return data.success ? "true" : "false";
  //           });
  //       },
  //     };

  //     // SCORM 1.2 API for backwards compatibility
  //     window.API = {
  //       LMSInitialize: function (str) {
  //         return window.API_1484_11.Initialize(str);
  //       },
  //       LMSFinish: function (str) {
  //         return window.API_1484_11.Terminate(str);
  //       },
  //       LMSGetValue: function (str) {
  //         return window.API_1484_11.GetValue(str);
  //       },
  //       LMSSetValue: function (str, val) {
  //         return window.API_1484_11.SetValue(str, val);
  //       },
  //       LMSCommit: function (str) {
  //         return window.API_1484_11.Commit(str);
  //       },
  //     };
  //   }
  // }, [previewLink]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("identifier", identifier);
    formData.append("course", file);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/courses/upload`,
        formData
      );
      setMessage("Course uploaded successfully");
      setPreviewLink(
        `${process.env.REACT_APP_API_URL}/api/courses/${identifier}/preview`
      );
    } catch (err) {
      setMessage("Error uploading course");
      console.error(err);
    }
  };

  return (
    <div className="max-w-5xl w-full mx-auto mt-10 p-6 rounded-lg">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4">Upload SCORM Course</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="identifier"
              className="block text-sm font-medium text-gray-700"
            >
              Identifier
            </label>
            <input
              type="text"
              id="identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="course"
              className="block text-sm font-medium text-gray-700"
            >
              Course File
            </label>
            <input
              type="file"
              id="course"
              onChange={(e) => setFile(e.target.files[0])}
              className="mt-1 block w-full text-sm text-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Upload
          </button>
        </form>
      </div>
      {message && <p className="mt-4 text-center">{message}</p>}
      {previewLink && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Course Preview</h2>
          <iframe
            src={previewLink}
            title="Course Preview"
            width="100%"
            height="500px"
            className="mt-4 border rounded-lg"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default CourseUpload;
