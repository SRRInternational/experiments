// frontend/src/pages/Home.js
import React from "react";
import CourseUpload from "../components/CourseUpload";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center w-full">
      <CourseUpload />
    </div>
  );
};

export default Home;
