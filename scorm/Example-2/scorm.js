var scorm = pipwerks.SCORM;
scorm.version = "1.2"; // Specify the SCORM version (1.2 or 2004)

function initializeSCORM() {
  if (scorm.init()) {
    console.log("SCORM API found and initialized!");
  } else {
    console.error("Failed to initialize SCORM API.");
  }
}

function terminateSCORM() {
  if (scorm.quit()) {
    console.log("SCORM API connection terminated.");
  } else {
    console.error("Failed to terminate SCORM API connection.");
  }
}

function setLessonStatus(status) {
  if (
    status === "completed" ||
    status === "incomplete" ||
    status === "passed" ||
    status === "failed"
  ) {
    scorm.set("cmi.core.lesson_status", status);
  } else {
    console.error("Invalid lesson status: " + status);
  }
}

function completeCourse() {
  setLessonStatus("completed");
  terminateSCORM();
}

function exitCourse() {
  terminateSCORM();
}

// Initialize SCORM API when the page loads
window.onload = initializeSCORM;

// Ensure SCORM API is terminated properly when the page is unloaded
window.onbeforeunload = () => {
  terminateSCORM();
  // You may need to return a message for older browsers
  return "Are you sure you want to leave?";
};
