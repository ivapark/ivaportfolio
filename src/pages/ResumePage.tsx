import React from "react";
import "./ResumePage.css";

const ResumePage: React.FC = () => {
  const base = import.meta.env.BASE_URL;

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
