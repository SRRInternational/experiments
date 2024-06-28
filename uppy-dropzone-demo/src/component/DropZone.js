import React from "react";
import Uppy from "@uppy/core";
import { DragDrop } from "@uppy/react";
import "@uppy/core/dist/style.css";
import "@uppy/drag-drop/dist/style.css";

const DropZone = () => {
  const uppy = new Uppy();

  // Configure uppy to accept only .zip files
  uppy.use(require("@uppy/drag-drop"), {
    allowMultipleFiles: false,
    acceptedFileTypes: [".zip"],
  });

  return (
    <div>
      <h2>Upload .zip files</h2>
      <DragDrop uppy={uppy} />
    </div>
  );
};

export default DropZone;
