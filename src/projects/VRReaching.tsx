import React from "react";
import "./VRReaching.css";

const VRReaching: React.FC = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <main className="vr-page">
      {/* HERO */}
      <section className="vr-hero">
        <div className="vr-text-section">
          <h1 className="vr-title">VR Reaching Research</h1>

          <h2 className="vr-subtitle">
            3D <span className="vr-italic">VR</span> Reaching-Under-Risk Task
          </h2>

          <div className="vr-info">
            <p className="vr-main-text vr-info-line">
              <span className="vr-info-label">Overview:&nbsp;</span>
              This VR experiment extends a classic 2D reaching-under-risk task
              into 3D to ask whether people use one global sense of reach
              accuracy or direction-specific expectations when reaching under
              risk.
            </p>

            <p className="vr-main-text vr-info-line">
              <span className="vr-info-label">Role:&nbsp;</span>
              Research Assistant
            </p>

            <p className="vr-main-text vr-info-line">
              <span className="vr-info-label">Toolkit:&nbsp;</span>
              HTC Vive Focus 3, Unity (C# + XR Interaction Toolkit
              3.1.1), SteamVR/OpenXR, and MATLAB
            </p>
          </div>
        </div>

        <div className="vr-image-section">
          <img
            src={base + "/assets/vr/vrmain.svg"} // hero image
            alt="Participant reaching in VR with HTC Vive Focus 3"
            className="vr-main-img"
          />
        </div>
      </section>

      {/* ABOUT THE PROJECT */}
      <section className="vr-about-section">
        <h2 className="vr-about-heading">About the Project</h2>

        <div className="vr-about-content">
          <div className="vr-about-text">
            <p className="vr-body-text">
              Every reach we make is noisy, but not all reaches are equally
              reliable: movements that cross the body or go against gravity tend
              to be less precise than simple straight-ahead reaches. Earlier
              work in our lab and others has shown that when you add risk to a
              reaching task (for example, a nearby penalty region that causes a
              big point loss), people shift their aim away from the penalty in a
              way that roughly maximizes expected gain. Those classic studies
              were mostly done in 2D with targets on a frontoparallel plane, and
              they typically treated motor uncertainty as a single, stable value
              for a given action.
            </p>

            <p className="vr-body-text">
              In this project, we extend that paradigm into 3D virtual reality
              using a head-mounted display and handheld controller, and place
              targets in a 3×3 grid at different egocentric directions in front
              of the participant. On some trials, participants simply reach to
              the target for a reward; on others, a penalty region appears
              adjacent to the target so that landing inside it leads to a large
              loss of points. From target-only trials, we estimate each person’s
              baseline motor variability for each direction, and from penalty
              trials we measure how far they shift their aim away from risk.
              Comparing these patterns across directions lets us test whether
              people rely on a single, global sense of how accurate their
              reaches are, or whether they carry distinct, direction-specific
              expectations about their own motor uncertainty in 3D space.
            </p>
          </div>

          <div className="vr-about-img-wrapper">
            <img
              src={base + "/assets/vr/img1.svg"} // side photo from screenshot
              alt="Participant seated and reaching in VR"
              className="vr-about-img"
            />
          </div>
        </div>
      </section>

      {/* WHAT I DID */}
      <section className="vr-what-section">
        <h2 className="vr-what-heading">What I Did</h2>

        <div className="vr-what-body">
          <ul className="vr-what-list">
            <li>
              Designed the overall task flow: start zone logic, go cues,
              feedback states (Hit/Miss/Too Early/Too Slow/Invalid Start),
              leaderboards, and enforced breaks.
            </li>
            <li>
              Built the 3D stimulus layout with a 3×3 grid of targets and
              corresponding penalty configurations across different directions.
            </li>
            <li>
              Implemented the experiment in Unity (C#), including controller
              tracking, velocity-based reach onset/offset detection, and trial
              randomization across all target–penalty combinations.
            </li>
            <li>
              Logged continuous 3D hand kinematics and trial outcomes to CSV for
              each participant.
            </li>
            <li>
              Set up and calibrated the hardware pipeline (Vive Focus 3, PC,
              room setup, IPD adjustment) for consistent data collection.
            </li>
          </ul>
        </div>

        <div className="vr-github-button-wrapper">
          <a
            href="https://github.com/ivapark/vrexperiment" 
            target="_blank"
            rel="noopener noreferrer"
            className="vr-github-button"
          >
            View My Github
          </a>
        </div>
      </section>
    </main>
  );
};

export default VRReaching;
