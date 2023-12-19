import React from "react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const ResumePage = () => {
    return (
      <div>
        <h1>Your Resume</h1>
        <div style={{ width: '100%', height: '500px' }}>
          <Worker workerUrl={'https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'}>
            <Viewer fileUrl="../../assets/James-Wong-Resume.pdf" />
          </Worker>
        </div>
      </div>
    );
  };
  
  export default ResumePage;