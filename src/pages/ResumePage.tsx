import React from "react";
import "./ResumePage.css";

const ResumePage: React.FC = () => {

  return (
    <main className="resume-page">
 
        <div className="resume-viewer">
          <iframe
            src={`${base}IvaPark_Resume.pdf`}
            className="resume-iframe"
            title="Resume"
          />
        </div>
    
    </main>
  );
};

export default ResumePage;
