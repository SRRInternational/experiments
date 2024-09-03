// frontend/src/components/CourseUpload.js
import React, { useState } from "react";
import axios from "axios";

const CourseUpload = () => {
  const [title, setTitle] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [previewLink, setPreviewLink] = useState(
    "http://localhost:5000/api/courses/101/preview"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("identifier", identifier);
    formData.append("course", file);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/courses/upload`,
        formData
      );
      setMessage("Course uploaded successfully");
      setPreviewLink(
        `${process.env.REACT_APP_API_URL}/courses/${identifier}/preview`
      );
    } catch (err) {
      setMessage("Error uploading course");
    }
  };

  return (
    <div className="max-w-5xl w-full mx-auto mt-10 p-6  rounded-lg ">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md ">
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
