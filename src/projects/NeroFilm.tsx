import React from "react";
import "./NeroFilm.css";

const NeroFilm: React.FC = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <main className="nerofilm-page">
      {/* HERO */}
      <section className="nerofilm-container">
        <div className="nerofilm-text-section">
          <h1 className="nerofilm-title">NeroFilm</h1>

          <h2 className="nerofilm-subtitle">
            Web-based photobooth for nostalgic film selfies
          </h2>

          <div className="nerofilm-info">
            <p className="nerofilm-main-text nerofilm-info-line">
              <span style={{ fontWeight: 600 }}>Overview:</span>
              <span className="nerofilm-main-text">
                {" "}
                A photobooth-inspired web experience where users take selfies
                and turn them into a nostalgic film-style journal, complete with
                polaroid-style frames and vintage objects.
              </span>
            </p>

            <p className="nerofilm-main-text nerofilm-info-line">
              <span style={{ fontWeight: 600 }}>Role:</span>
              <span className="nerofilm-main-text">
                {" "}
                Front-End, Back-End, UX/UI Designer
              </span>
            </p>

            <p className="nerofilm-main-text nerofilm-info-line">
              <span style={{ fontWeight: 600 }}>Toolkit:</span>
              <span className="nerofilm-main-text">
                {" "}
                HTML, CSS, JavaScript, Figma
              </span>
            </p>
          </div>
        </div>

        <div className="nerofilm-image-section">
          <img
            src={base + "/assets/NeroFilm/NeroFilmmain.svg"}
            alt="NeroFilm photobooth web UI on a laptop"
            className="nerofilm-main-img"
          />
        </div>
      </section>

      {/* ABOUT THE PROJECT */}
      <section className="nerofilm-about-section">
        <h2 className="nerofilm-section-title">About the Project</h2>

        <div className="nerofilm-about-inner">
          <div className="nerofilm-about-image">
            <img
              src={base + "/assets/NeroFilm/film.svg"}
              alt="Black and white NeroFilm photobooth strip"
            />
          </div>

          <div className="nerofilm-about-text">
            <p>
              NeroFilm is a digital photobooth built to make the photobooth
              experience accessible to everyone.
            </p>
            <p>
              With photobooths becoming increasingly popular but often expensive
              or limited to events and venues, we wanted to recreate that fun,
              shared moment in a simple web experience.
            </p>
            <p>
              Users can take photos directly in the browser and enjoy a
              photobooth-style experience without needing any special hardware
              or paid setup.
            </p>
          </div>
        </div>

        <div className="nerofilm-about-buttons">
          <a
            href="https://www.figma.com/design/E7FZp4FdjOVQ3OPxgnhm75/NeroFilm?node-id=106-437&t=rZbKUMXCKtpP8zaA-1"
            target="_blank"
            rel="noreferrer"
            className="nerofilm-about-btn"
          >
            View Figma
          </a>
          <a
            href="https://github.com/ivapark/nerofilm"
            target="_blank"
            rel="noreferrer"
            className="nerofilm-about-btn"
          >
            View Github
          </a>
        </div>
      </section>
    </main>
  );
};

export default NeroFilm;
