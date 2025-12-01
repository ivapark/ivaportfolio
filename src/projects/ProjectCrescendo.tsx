// src/pages/ProjectCrescendo.tsx
import React from "react";
import "./ProjectCrescendo.css";

const ProjectCrescendo: React.FC = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <main className="crescendo-page">
      {/* HERO */}
      <section className="crescendo-container">
        <div className="crescendo-text-section">
          <h1 className="crescendo-title">Project Crescendo</h1>

          <h2 className="crescendo-subtitle">
            NYU club that provides opportunities and a welcoming space for music
            lovers to perform, teach, and connect
          </h2>

          <div className="crescendo-info">
            <p className="crescendo-main-text crescendo-info-line">
              <span style={{ fontWeight: 600 }}>Overview:</span>
              <span className="crescendo-main-text">
                {" "}
                Student-led initiative to grow a campus music community by
                coordinating live performances and building a consistent online
                presence across Instagram and the club website.
              </span>
            </p>

            <p className="crescendo-main-text crescendo-info-line">
              <span style={{ fontWeight: 600 }}>Role:</span>
              <span className="crescendo-main-text">
                {" "}
                Social Media Lead; Website &amp; Service Chair
              </span>
            </p>

            <p className="crescendo-main-text crescendo-info-line">
              <span style={{ fontWeight: 600 }}>Toolkit:</span>
              <span className="crescendo-main-text">
                {" "}
                Instagram, Figma, Canva, Squarespace
              </span>
            </p>
          </div>
        </div>

        <div className="crescendo-image-section">
          <img
            src={base + "/assets/projectcrescendo/projectcrescendo.svg"}
            alt="Project Crescendo website on a laptop"
            className="crescendo-main-img"
          />
        </div>
      </section>

      {/* ABOUT THE PROJECT */}
      <section className="crescendo-about-section">
        <h2 className="crescendo-section-title">About the Project</h2>

        <div className="crescendo-about-inner">
          <p>
            At Project Crescendo, I took on multiple roles: I designed branding
            and promotional graphics for Instagram, built and maintained our
            website, and kept visuals and messaging aligned across both so every
            event felt like part of a cohesive identity.
          </p>
          <p>
            Behind the scenes, I helped plan the KEEN music event from the
            ground up by coordinating with performers, writing announcement
            copy, and creating the visuals used for social media and teaching
            materials.
          </p>
          <p>
            I also managed logistics such as timelines, set lists, and
            equipment, and made sure accessibility details and directions were
            clearly communicated online so people could easily attend and enjoy
            the event.
          </p>
        </div>

        <div className="crescendo-about-buttons">
          <a
            href="https://www.instagram.com/projectcrescendo_nyu/"
            target="_blank"
            rel="noreferrer"
            className="crescendo-about-btn"
          >
            View Instagram
          </a>
          <a
            href="https://www.projectcrescendo.org/"
            target="_blank"
            rel="noreferrer"
            className="crescendo-about-btn"
          >
            View Website
          </a>
        </div>
      </section>
    </main>
  );
};

export default ProjectCrescendo;
