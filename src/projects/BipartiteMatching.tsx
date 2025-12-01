import React from "react";
import "./BipartiteMatching.css";

const BipartiteMatching: React.FC = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <main className="bip-page">
      {/* HERO */}
      <section className="bip-hero">
        <div className="bip-text-section">
          <h1 className="bip-title">Detecting Objects Using Bipartite Matching</h1>

          <h2 className="bip-subtitle">
            Matching object detections across video frames with Hungarian algorithm
          </h2>

          <div className="bip-info">
            <p className="bip-main-text bip-info-line">
              <span className="bip-info-label">Overview:&nbsp;</span>
              Implemented a bipartite matching pipeline to associate object
              detections across consecutive VIRAT video frames using a
              cost-optimized Hungarian matching algorithm.
            </p>

            <p className="bip-main-text bip-info-line">
              <span className="bip-info-label">Role:&nbsp;</span>
              Front-End, Back-End, UX/UI Designer
            </p>

            <p className="bip-main-text bip-info-line">
              <span className="bip-info-label">Toolkit:&nbsp;</span>
              Python, TensorFlow / Keras, OpenCV, MongoDB Atlas, Docker, Pytest,
              Black &amp; Flake8, HTML, CSS, JavaScript, Figma
            </p>
          </div>
        </div>

        <div className="bip-image-section">
          <img
            src={base + "/assets/bipartite/bipartitemain.svg"} 
            alt="VIRAT frames with vehicle detections"
            className="bip-main-img"
          />
        </div>
      </section>

      {/* ABOUT THE PROJECT */}
      <section className="bip-about-section">
        <h2 className="bip-about-heading">About the Project</h2>

        <div className="bip-about-body">
          <p className="bip-main-text1">
            This project matches detected objects between two consecutive VIRAT
            frames by framing the problem as a bipartite graph and solving it
            with the Hungarian algorithm.
          </p>

          <p className="bip-main-text1">
            I first parse each annotation into an object ID, class label, and
            bounding box, then build a cost matrix where each entry reflects how
            likely two detections correspond to the same real-world object.
          </p>

          <p className="bip-main-text1">
            The cost combines three terms, Intersection-over-Union (IoU),
            normalized centroid distance, and a class mismatch penalty, with
            empirically chosen weights (0.6, 0.3, 0.1) to prioritize geometric
            overlap while still enforcing reasonable motion and class
            consistency.
          </p>

          <p className="bip-main-text1">
            After computing the optimal one-to-one assignment, I visualize
            matches by color-coding bounding boxes consistently across frames
            and concatenating the images.
          </p>

          <p className="bip-main-text1">
            On multiple VIRAT scenes with different object counts, lighting, and
            motion, the system reliably pairs people, cars, and other objects
            without relying on deep features, making the approach efficient,
            interpretable, and easy to extend to new datasets.
          </p>
        </div>

        {/* IMAGE GRID */}
        <div className="bip-about-gallery">
          <div className="bip-about-row">
            <img
              src={base + "/assets/bipartite/img1.svg"}
              alt="VIRAT scene row 1 left"
              className="bip-about-img"
            />
          </div>

          <div className="bip-about-row">
            <img
              src={base + "/assets/bipartite/img2.svg"}
              alt="VIRAT scene row 2 left"
              className="bip-about-img"
            />
          </div>

          <div className="bip-about-row">
            <img
              src={base + "/assets/bipartite/img3.svg"}
              alt="VIRAT scene row 3 left"
              className="bip-about-img"
            />
          </div>
        </div>

        {/* BUTTON */}
        <div className="bip-about-button-wrapper">
          <a
            href="https://github.com/ivapark/bipartitematching" 
            target="_blank"
            rel="noopener noreferrer"
            className="bip-about-button"
          >
            View My Github
          </a>
        </div>
      </section>
    </main>
  );
};

export default BipartiteMatching;
