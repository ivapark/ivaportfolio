import React from "react";
import "./MLasl.css";

const MLasl: React.FC = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <main className="asl-page">
      {/* Hero Section */}
      <section className="asl-container">
        <div className="asl-text-section">
          <h1 className="asl-title">
            American Sign Language Detector with Machine Learning
          </h1>

          <h2 className="asl-subtitle">
            Bridging the Gap between Signers and Technology
          </h2>

          <div className="asl-info">
            <p className="asl-main-text asl-info-line">
              <span style={{ fontWeight: 500 }}>Overview:</span>
              <span className="asl-main-text">
                {" "}
                Real-time American Sign Language (ASL) alphabet recognition
                system that uses machine learning and computer vision to detect
                hand signs from a webcam.
              </span>
            </p>

            <p className="asl-main-text asl-info-line">
              <span style={{ fontWeight: 500 }}>Role:</span>
              <span className="asl-main-text">
                {" "}
                Front-End, Back-End, UX/UI Designer
              </span>
            </p>

            <p className="asl-main-text asl-info-line">
              <span style={{ fontWeight: 500 }}>Toolkit:</span>
              <span className="asl-main-text">
                {" "}
                Python, TensorFlow / Keras, OpenCV, MongoDB Atlas, Docker,
                Pytest, Black &amp; Flake8, HTML, CSS, JavaScript, Figma
              </span>
            </p>
          </div>
        </div>

        <div className="asl-image-section">
          <img
            src={base + "/assets/mlaslpictures/mlaslmain.svg"}
            alt="ASL Demo"
            className="asl-main-img"
          />
        </div>
      </section>

      {/* About the Project */}
      <section className="asl-about-section">
        <h2
          className="asl-title1"
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          About the Project
        </h2>

        <div className="asl-about-content">
          <div className="asl-about-img-wrapper">
            <img
              src={base + "/assets/mlaslpictures/childsigning1.svg"}
              alt="Child Signing"
              className="asl-about-img"
            />
          </div>

          <div className="asl-about-text">
            <p className="asl-main-text1">
              While typing remains an option in digital spaces like video
              conferencing platforms, signing allows ASL users to express tone,
              emotion, and nuance more naturally.
            </p>

            <p className="asl-main-text1">
              This tool supports that expressiveness by recognizing hand signs
              in real time—making communication more intuitive and inclusive for
              ASL users, and taking a meaningful step toward bridging the gap
              between signers and non-signers in digital platforms.
            </p>

            <p className="asl-main-text1">
              The system uses advanced computer vision techniques to detect and
              interpret ASL alphabet signs, enabling more seamless communication
              between people who sign and those who don't, all within digital
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* ASL Chart */}
      <section className="asl-chart-section">
        <div className="asl-chart-text">
          <p className="asl-main-text1">
            At its core is a Convolutional Neural Network (CNN) built with
            TensorFlow, trained to recognize all 26 letters (A–Z) of the ASL
            alphabet. The model takes in a hand image, predicts the most likely
            letter, and returns both the predicted label and a confidence score.
            Results are logged in a MongoDB database for historical tracking and
            analysis.
          </p>
        </div>

        <div className="asl-chart-card">
          <img
            src={base + "/assets/mlaslpictures/aslchart1.svg"}
            alt="ASL Alphabet Chart"
            className="asl-chart-img"
          />
        </div>
      </section>

      {/* Demo */}
      <section className="asl-demo-section">
        <h2 className="asl-title1">Demo</h2>

        <video className="asl-demo-video" controls>
          <source
            src={base + "/assets/mlaslpictures/ML_ASL_demo.mp4"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* What I Did */}
      <section className="asl-whatidid-section">
        <h2
          className="asl-title1"
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          What I Did
        </h2>

        <div className="asl-whatidid-content">
          <div className="asl-whatidid-img-wrapper">
            <img
              src={base + "/assets/mlaslpictures/meworking.svg"}
              alt="Working on ASL Project"
              className="asl-whatidid-img"
            />
          </div>

          <ul className="asl-whatidid-list">
            <li>
              Built and trained a CNN model using TensorFlow on over 52,000
              images—2,000 hand sign images per letter (A–Z)—captured using my
              own hand under different lighting and angles to improve real-world
              accuracy and avoid overfitting.
            </li>
            <li>
              Wrote a Flask backend that receives an input image (from webcam or
              API), preprocesses it using OpenCV, performs prediction, and saves
              the result to MongoDB Atlas with a timestamp.
            </li>
            <li>
              Containerized the entire app using Docker and Docker Compose to
              run the machine learning client, web server, and database
              together.
            </li>
            <li>
              Implemented unit tests with Pytest and added CI/CD workflows using
              GitHub Actions to automatically lint, format, and test the code on
              every push.
            </li>
            <li>
              Ensured clean, readable code using Black and Flake8 for
              formatting and style checks.
            </li>
            <li>
              Designed and implemented the frontend using HTML, CSS, and
              JavaScript to make the interface clean, accessible, and easy to
              use.
            </li>
          </ul>
        </div>
      </section>

      {/* GitHub Button */}
      <section className="asl-github-button-wrapper">
        <a
          href="https://github.com/software-students-spring2025/4-containers-something/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="asl-github-button"
        >
          View My Github
        </a>
      </section>
    </main>
  );
};

export default MLasl;
