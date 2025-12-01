import React, { useState } from "react";
import "./MissPoppinsDashboard.css";

const AFFINITY_IMAGES = [
  "affinity1.svg",
  "affinity2.svg",
  "affinity3.svg",
];
const MissPoppinsDashboard: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const [affinityIndex, setAffinityIndex] = useState(0);

  const handlePrev = () => {
    setAffinityIndex(
      (prev) => (prev - 1 + AFFINITY_IMAGES.length) % AFFINITY_IMAGES.length
    );
  };

  const handleNext = () => {
    setAffinityIndex((prev) => (prev + 1) % AFFINITY_IMAGES.length);
  };

  const affinitySrc =
    base + "assets/misspoppinsdesktop/" + AFFINITY_IMAGES[affinityIndex];

  return (
    <main className="mpdash-page">
      {/* HERO SECTION */}
      <section className="mpdash-container">
        <div className="mpdash-text-section">
          <h1 className="mpdash-title">MissPoppins Dashboard Redesign: </h1>
          <h2 className="mpdash-subtitle">Simplifying Navigation for Coaches</h2>

          <div className="mpdash-info">
            <p className="mpdash-main-text mpdash-info-line">
              <span style={{ fontWeight: 500 }}>Overview:</span>
              <span className="mpdash-main-text">
                {" "}
                Streamlined navigation and introduced strategic pricing to
                enhance the coach-client experience.
              </span>
            </p>
            <p className="mpdash-main-text mpdash-info-line">
              <span style={{ fontWeight: 500 }}>Role:</span>
              <span className="mpdash-main-text">
                {" "}
                UX Researcher, UX/UI Designer
              </span>
            </p>
            <p className="mpdash-main-text mpdash-info-line">
              <span style={{ fontWeight: 500 }}>Toolkit:</span>
              <span className="mpdash-main-text">
                {" "}
                Figma, FigJam, Pencil and Paper
              </span>
            </p>
          </div>
        </div>

        <div className="mpdash-image-section">
          <img
            src={base + "assets/misspoppinsdesktop/desktop1.svg"}
            alt="Dashboard Preview"
            className="mpdash-hero-image"
          />
        </div>
      </section>

      {/* BACKGROUND SECTION */}
      <section className="mpdash-background-section">
        <h2 className="mpdash-subtitle">Background</h2>
        <p className="mpdash-main-text mpdash-background-intro">
          The current dashboard for coaches is{" "}
          <span className="mpdash-highlight-red">cluttered</span> and{" "}
          <span className="mpdash-highlight-red">confusing</span>, especially
          for first-time or less tech-savvy users.
        </p>

        {/* Problem 1 */}
        <div className="mpdash-problem-container">
          <div className="mpdash-problem-with-text">
            <div className="mpdash-problem-image-wrapper">
              <img
                src={base + "assets/misspoppinsdesktop/background1.svg"}
                alt="Dashboard showing cluttered interface"
                className="mpdash-problem-img"
              />
            </div>
            <div className="mpdash-problem-description">
              <p className="mpdash-description-text">
                Terminology like “form,” “content,” “file,” and “database”
                overlaps without clear definitions, leading to user frustration.
              </p>
            </div>
          </div>
        </div>

        {/* Problem 2 */}
        <div className="mpdash-problem-container">
          <div className="mpdash-problem-with-text">
            <div className="mpdash-problem-text-left">
              <p className="mpdash-description-text">
                Availability setup felt wordy and crowded.
              </p>
            </div>
            <div className="mpdash-problem-image-wrapper">
              <img
                src={base + "assets/misspoppinsdesktop/background2.svg"}
                alt="Availability setup interface"
                className="mpdash-problem-img-wide"
              />
            </div>
          </div>
        </div>

        {/* Problem 3 */}
        <div className="mpdash-problem-container">
          <div className="mpdash-problem-with-text">
            <div className="mpdash-problem-image-wrapper">
              <img
                src={base + "assets/misspoppinsdesktop/background3.svg"}
                alt="File storage interface"
                className="mpdash-problem-img"
              />
            </div>
            <div className="mpdash-problem-description">
              <p className="mpdash-description-text">
                <strong>
                  File storage became disorganized and confusing as files
                  accumulated.
                </strong>{" "}
                The file management process should be simplified so coaches
                don’t waste time on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH GOAL SECTION */}
      <section className="mpdash-research-section">
        <h2 className="mpdash-subtitle">Research Goal</h2>
        <p className="mpdash-goal-text">
          The goal is to redesign the coach dashboard to be:
        </p>

        <div className="mpdash-research-steps">
          <div className="mpdash-step">
            <p className="mpdash-step-number">1.</p>
            <p className="mpdash-step-label" style={{ marginBottom: "3rem" }}>
              Intuitive for first-time users
            </p>
            <img
              src={base + "assets/misspoppinsdesktop/icon1.svg"}
              alt="Intuitive Design Icon"
            />
          </div>

          <div className="mpdash-step">
            <p className="mpdash-step-number">2.</p>
            <p className="mpdash-step-label">
              Accessible for older adults with limited tech confidence
            </p>
            <img
              src={base + "assets/misspoppinsdesktop/icon2.svg"}
              alt="Accessibility Icon"
            />
          </div>

          <div className="mpdash-step">
            <p className="mpdash-step-number">3.</p>
            <p className="mpdash-step-label">
              Clear in function, with reduced cognitive load
            </p>
            <img
              src={base + "assets/misspoppinsdesktop/icon3.svg"}
              alt="Clarity Icon"
            />
          </div>
        </div>

        <p className="mpdash-note">
          This research aims to uncover detailed insights for making the
          dashboard more intuitive, improving the first-time user experience,
          supporting older users, clarifying functionality, and reducing
          cognitive load.
        </p>
      </section>

      {/* RESEARCH PAIN POINTS */}
      <section className="mpdash-painpoints-section">
        <h2 className="mpdash-title">
          To achieve this, I analyzed pain points across key areas of the user
          journey, including:
        </h2>

        <div className="mpdash-painpoints-grid">
          {/* 1. Organization */}
          <div className="mpdash-painpoint-column">
            <h3 className="mpdash-painpoint-heading">1. Organization</h3>

            <div className="mpdash-painpoint-item">
              <img
                src={base + "assets/misspoppinsdesktop/calendar.svg"}
                alt="Calendar icon"
              />
              <p>
                Calendar Integration
                <br />
                and Scheduling
              </p>
            </div>

            <div className="mpdash-painpoint-item">
              <img
                src={base + "assets/misspoppinsdesktop/fileshare.svg"}
                alt="File Sharing icon"
              />
              <p>
                File and Resource
                <br />
                Sharing
              </p>
            </div>
          </div>

          {/* 2. Personalization */}
          <div className="mpdash-painpoint-column">
            <h3 className="mpdash-painpoint-heading">2. Personalization</h3>

            <div className="mpdash-painpoint-item">
              <img
                src={base + "assets/misspoppinsdesktop/personalization.svg"}
                alt="Personalization icon"
              />
              <p>
                Personalization and
                <br />
                Dashboard Usability
              </p>
            </div>

            <div className="mpdash-painpoint-item">
              <img
                src={base + "assets/misspoppinsdesktop/payment.svg"}
                alt="Payment icon"
              />
              <p>
                Payment and Package
                <br />
                Transparency
              </p>
            </div>
          </div>

          {/* 3. Communication */}
          <div className="mpdash-painpoint-column">
            <h3 className="mpdash-painpoint-heading">3. Communication</h3>

            <div className="mpdash-painpoint-item">
              <img
                src={base + "assets/misspoppinsdesktop/communication.svg"}
                alt="Communication icon"
              />
              <p>
                Notifications and
                <br />
                Communication
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USER INTERVIEWS */}
      <section className="mpdash-user-interviews-section">
        <h2 className="mpdash-subtitle">User Interviews</h2>

        <div className="mpdash-user-interview-content">
          {/* Left side */}
          <div className="mpdash-user-interview-info">
            <div className="mpdash-user-interview-circle">
              <p>8</p>
            </div>
            <span>user interviews conducted</span>
          </div>

          {/* Right side (avatars) */}
          <div className="mpdash-user-interview-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div className="mpdash-user-avatar" key={i}>
                <img
                  src={
                    base + `assets/misspoppinsdesktop/user${i + 1}.svg`
                  }
                  alt={`User ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFFINITY MAPPING / CAROUSEL */}
      <section className="mpdash-affinity-section">
        <h2 className="mpdash-subtitle">Affinity Mapping</h2>
        <p className="mpdash-affinity-description">
          The affinity diagram below highlights coaches’ insights in each area:
        </p>

        <div className="mpdash-carousel-wrapper">
          <button
            className="mpdash-carousel-button"
            type="button"
            onClick={handlePrev}
          >
            &#10094;
          </button>
          <img
            src={affinitySrc}
            alt="Affinity Mapping Diagram"
            className="mpdash-affinity-image"
          />
          <button
            className="mpdash-carousel-button"
            type="button"
            onClick={handleNext}
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* RESEARCH FINDINGS */}
      <section className="mpdash-research-findings-section">
        <h2 className="mpdash-subtitle">Research Findings</h2>

        {/* 1. Organization */}
        <div className="mpdash-finding-category">
          <h3 className="mpdash-category-title">1. Organization</h3>

          <div className="mpdash-finding-item">
            <div className="mpdash-finding-icon-wrapper">
              <img
                src={base + "assets/misspoppinsdesktop/calendar.svg"}
                alt="Calendar Icon"
                className="mpdash-finding-icon-img"
              />
            </div>
            <div className="mpdash-finding-content">
              <h4 className="mpdash-finding-label">
                Calendar Integration and Scheduling
              </h4>
              <p className="mpdash-finding-text">
                Coaches want Google Calendar integration with
                daily/weekly/monthly views and an easy way to set working hours.
                Current scheduling feels too complex and time-consuming.
              </p>
            </div>
          </div>

          <div className="mpdash-finding-item">
            <div className="mpdash-finding-icon-wrapper">
              <img
                src={base + "assets/misspoppinsdesktop/fileshare.svg"}
                alt="Files Icon"
                className="mpdash-finding-icon-img"
              />
            </div>
            <div className="mpdash-finding-content">
              <h4 className="mpdash-finding-label">
                File and Resource Sharing
              </h4>
              <p className="mpdash-finding-text">
                File storage quickly becomes messy as content grows. Coaches
                need clearer folders, drag-and-drop uploads, and starter
                templates (e.g., intake forms) to simplify onboarding and data
                updates.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Personalization */}
        <div className="mpdash-finding-category">
          <h3 className="mpdash-category-title">2. Personalization</h3>

          <div className="mpdash-finding-item">
            <div className="mpdash-finding-icon-wrapper">
              <img
                src={
                  base + "assets/misspoppinsdesktop/personalization.svg"
                }
                alt="Dashboard Icon"
                className="mpdash-finding-icon-img"
              />
            </div>
            <div className="mpdash-finding-content">
              <h4 className="mpdash-finding-label">
                Personalization and Dashboard Usability
              </h4>
              <p className="mpdash-finding-text">
                Coaches prefer a clean, minimal dashboard that shows only
                essentials (clients, sessions, and progress). They’d like color
                coding, tabs, or widgets for quick navigation without heavy
                setup.
              </p>
            </div>
          </div>

          <div className="mpdash-finding-item">
            <div className="mpdash-finding-icon-wrapper">
              <img
                src={base + "assets/misspoppinsdesktop/payment.svg"}
                alt="Payment Icon"
                className="mpdash-finding-icon-img"
              />
            </div>
            <div className="mpdash-finding-content">
              <h4 className="mpdash-finding-label">
                Payment and Package Transparency
              </h4>
              <p className="mpdash-finding-text">
                Coaches want to instantly see who purchased which package, its
                status, and payment updates. Information about one-time sessions
                vs. ongoing packages should be clear and easy to access.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Communication */}
        <div className="mpdash-finding-category">
          <h3 className="mpdash-category-title">3. Communication</h3>

          <div className="mpdash-finding-item">
            <div className="mpdash-finding-icon-wrapper">
              <img
                src={
                  base + "assets/misspoppinsdesktop/communication.svg"
                }
                alt="Notification Icon"
                className="mpdash-finding-icon-img"
              />
            </div>
            <div className="mpdash-finding-content">
              <h4 className="mpdash-finding-label">
                Notifications and Communication
              </h4>
              <p className="mpdash-finding-text">
                Coaches miss messages in email and want SMS or in-app alerts.
                They’d like an all-in-one hub for chat, video calls, screen
                sharing, and file sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HMW SUMMARY */}
      <section className="mpdash-hmw-section">
        <h3 className="mpdash-subtitle">
          Turning Key Insights into How Might We Statements
        </h3>

        <div className="mpdash-hmw-header">
          <div className="mpdash-hmw-column">
            <img
              src={base + "assets/misspoppinsapp/hmwproblem.svg"}
              alt="Problem Icon"
            />
            <h4 className="mpdash-hmw-subtitle">Problem</h4>
          </div>
          <div className="mpdash-hmw-column">
            <img
              src={base + "assets/misspoppinsapp/hmwidea.svg"}
              alt="Idea Icon"
            />
            <h4 className="mpdash-hmw-subtitle">How Might We</h4>
          </div>
        </div>

        {/* HMW rows */}
        <div className="mpdash-hmw-row">
          <div className="mpdash-hmw-bubble">
            Coaches struggle with{" "}
            <span className="mpdash-highlight-red">
              {" "}
              disorganized file storage{" "}
            </span>{" "}
            and{" "}
            <span className="mpdash-highlight-red">
              {" "}
              complex scheduling tools
            </span>
            , making it difficult for first-time users with limited tech
            experience to manage their clients efficiently.
          </div>
          <img
            src={base + "assets/misspoppinsapp/yellowarrow.svg"}
            alt="Arrow"
            className="mpdash-hmw-arrow"
          />
          <div className="mpdash-hmw-bubble">
            How might we create a{" "}
            <span className="mpdash-highlight-red">
              clear, intuitive scheduling and file management system
            </span>{" "}
            that reduces setup effort and helps coaches find and share
            information quickly?
          </div>
        </div>

        <div className="mpdash-hmw-row">
          <div className="mpdash-hmw-bubble">
            The platform feels{" "}
            <span className="mpdash-highlight-red"> wordy and cluttered</span>,
            leaving coaches{" "}
            <span className="mpdash-highlight-red"> overwhelmed </span>instead
            of supported, while they still need personalized views of clients,
            progress, and payment information.
          </div>
          <img
            src={base + "assets/misspoppinsapp/yellowarrow.svg"}
            alt="Arrow"
            className="mpdash-hmw-arrow"
          />
          <div className="mpdash-hmw-bubble">
            How might we design a{" "}
            <span className="mpdash-highlight-red">
              clean, customizable dashboard
            </span>{" "}
            that highlights each coach’s most relevant information without
            requiring heavy configuration?
          </div>
        </div>

        <div className="mpdash-hmw-row">
          <div className="mpdash-hmw-bubble">
            Current communication tools are{" "}
            <span className="mpdash-highlight-red">
              {" "}
              fragmented and rely too heavily on email
            </span>
            , which coaches often miss, leading to{" "}
            <span className="mpdash-highlight-red">
              {" "}
              frustration and missed updates{" "}
            </span>
            .
          </div>
          <img
            src={base + "assets/misspoppinsapp/yellowarrow.svg"}
            alt="Arrow"
            className="mpdash-hmw-arrow"
          />
          <div className="mpdash-hmw-bubble">
            How might we streamline communication with{" "}
            <span className="mpdash-highlight-red">
              familiar, real-time notifications and chat tools
            </span>{" "}
            that make staying connected easy and accessible for all coaches?
          </div>
        </div>
      </section>

      {/* HMW – DESIGN ANSWERS 1 */}
      <section className="mpdash-hmw-section-single">
        <h3 className="mpdash-subtitle">
          Answering How Might We Statements (Design Process)
        </h3>
        <p className="mpdash-hmw-question">
          1. How might we design a clear, intuitive scheduling and file
          management system that minimizes setup and helps coaches quickly find
          and share information?
        </p>

        <div className="mpdash-hmw-feature">
          <img
            src={base + "assets/misspoppinsdesktop/calendar.svg"}
            alt="Calendar Icon"
            className="mpdash-hmw-icon"
          />
          <span className="mpdash-hmw-feature-label">
            1. Unified Scheduling Calendar
          </span>
        </div>

        <div className="mpdash-hmw-comparison">
          <div className="mpdash-hmw-column">
            <h3 className="mpdash-hmw-subtitle">Before</h3>
            <img
              src={base + "assets/misspoppinsdesktop/before1.svg"}
              alt="Before Screenshot"
              className="mpdash-hmw-image"
            />
            <p className="mpdash-hmw-description-before">
              Scheduling required jumping between Motherboard and Google
              Calendar. Working hours were hidden in menus, and switching
              between daily, weekly, and monthly views was awkward. First-time
              users often felt frustrated just trying to confirm or adjust
              availability.
            </p>
          </div>

          <div className="mpdash-hmw-column">
            <h3 className="mpdash-hmw-subtitle">After</h3>
            <img
              src={base + "assets/misspoppinsdesktop/after1.svg"}
              alt="After Screenshot"
              className="mpdash-hmw-image"
            />
            <p className="mpdash-hmw-description-after">
              Built-in Google Calendar sync centralizes scheduling. Coaches can
              set hours with simple toggles and quickly switch between clean
              daily, weekly, and monthly views. Rescheduling is seamless, giving
              both coaches and parents clarity without extra steps.
            </p>
          </div>
        </div>

        <div className="mpdash-hmw-feature">
          <img
            src={base + "assets/misspoppinsdesktop/fileshare.svg"}
            alt="Calendar Icon"
            className="mpdash-hmw-icon"
          />
          <span className="mpdash-hmw-feature-label">
            2. Streamline File &amp; Data Management
          </span>
        </div>

        <div className="mpdash-hmw-comparison">
          <div className="mpdash-hmw-column">
            <h3 className="mpdash-hmw-subtitle">Before</h3>
            <img
              src={base + "assets/misspoppinsdesktop/before2.svg"}
              alt="Before Screenshot"
              className="mpdash-hmw-image"
            />
            <p className="mpdash-hmw-description-before2">
              Files were scattered across multiple screens with no clear
              hierarchy. Updating client data or editing intake forms required
              several clicks, and there were no templates meaning every
              onboarding started from scratch.
            </p>
          </div>

          <div className="mpdash-hmw-column">
            <h3 className="mpdash-hmw-subtitle">After</h3>
            <img
              src={base + "assets/misspoppinsdesktop/after2.svg"}
              alt="After Screenshot"
              className="mpdash-hmw-image"
            />
            <p className="mpdash-hmw-description-after2">
              Labeled folders, drag-and-drop uploads, and quick search keep
              resources organized. Pre-made intake templates speed up
              onboarding, and client info (like package validity) can be edited
              directly, saving time as libraries grow.
            </p>
          </div>
        </div>
      </section>

      {/* HMW – DESIGN ANSWERS 2 */}
      <section className="mpdash-hmw-section-single">
        <p className="mpdash-hmw-question">
          2. How might we tailor the app experience to each coach’s unique needs
          and habits without overwhelming first-time users who may not be
          familiar with customization features?
        </p>

        <div className="mpdash-hmw-feature">
          <img
            src={base + "assets/misspoppinsdesktop/personalization.svg"}
            alt="Calendar Icon"
            className="mpdash-hmw-icon"
          />
          <span className="mpdash-hmw-feature-label">
            1. Personalized Dashboard
          </span>
        </div>

        <div className="mpdash-hmw-comparison">
          <div className="mpdash-hmw-column">
            <h3 className="mpdash-hmw-subtitle">Before</h3>
            <img
              src={base + "assets/misspoppinsdesktop/before3.svg"}
              alt="Before Screenshot"
              className="mpdash-hmw-image"
            />
            <p className="mpdash-hmw-description-before">
              Dashboards showed every feature at once, with wordy labels and
              cluttered layouts. Coaches had to dig through unrelated data just
              to find client or session info.
            </p>
          </div>

          <div className="mpdash-hmw-column">
            <h3 className="mpdash-hmw-subtitle">After</h3>
            <img
              src={base + "assets/misspoppinsdesktop/after3.svg"}
              alt="After Screenshot"
              className="mpdash-hmw-image"
            />
            <p className="mpdash-hmw-description-after">
              A simplified dashboard highlights key information and uses color
              cues for quick recognition. Coaches can customize views gradually,
              keeping the experience clear for beginners.
            </p>
          </div>
        </div>

        <div className="mpdash-hmw-feature">
          <img
            src={base + "assets/misspoppinsdesktop/fileshare.svg"}
            alt="Calendar Icon"
            className="mpdash-hmw-icon"
          />
          <span className="mpdash-hmw-feature-label">
            2. Streamline File &amp; Data Management
          </span>
        </div>

        <div className="mpdash-hmw-comparison">
          <div className="mpdash-hmw-column">
            <h3 className="mpdash-hmw-subtitle">Before</h3>
            <img
              src={base + "assets/misspoppinsdesktop/before4.svg"}
              alt="Before Screenshot"
              className="mpdash-hmw-image"
            />
            <p className="mpdash-hmw-description-before2">
              Files were scattered across multiple screens with no clear
              hierarchy. Updating client data or editing intake forms required
              several clicks, and there were no templates meaning every
              onboarding started from scratch.
            </p>
          </div>

          <div className="mpdash-hmw-column">
            <h3 className="mpdash-hmw-subtitle">After</h3>
            <img
              src={base + "assets/misspoppinsdesktop/after4.svg"}
              alt="After Screenshot"
              className="mpdash-hmw-image"
            />
            <p className="mpdash-hmw-description-after2">
              Labeled folders, drag-and-drop uploads, and quick search keep
              resources organized. Pre-made intake templates speed up
              onboarding, and client info (like package validity) can be edited
              directly, saving time as libraries grow.
            </p>
          </div>
        </div>
      </section>

      {/* HMW – DESIGN ANSWERS 3 */}
      <section className="mpdash-hmw-section-single">
        <p className="mpdash-hmw-question">
          3. How might we create a clear, intuitive scheduling and file
          management system that reduces setup effort and helps coaches find and
          share information quickly?
        </p>

        <div className="mpdash-hmw-feature">
          <img
            src={base + "assets/misspoppinsdesktop/communication.svg"}
            alt="Calendar Icon"
            className="mpdash-hmw-icon"
          />
          <span className="mpdash-hmw-feature-label">
            1. Personalized Dashboard
          </span>
        </div>

        <div className="mpdash-hmw-comparison">
          <div className="mpdash-hmw-column">
            <h3 className="mpdash-hmw-subtitle">Before</h3>
            <img
              src={base + "assets/misspoppinsdesktop/before5.svg"}
              alt="Before Screenshot"
              className="mpdash-hmw-image"
            />
            <p className="mpdash-hmw-description-before">
              Dashboards showed every feature at once, with wordy labels and
              cluttered layouts. Coaches had to dig through unrelated data just
              to find client or session info.
            </p>
          </div>

          <div className="mpdash-hmw-column">
            <h3 className="mpdash-hmw-subtitle">After</h3>
            <img
              src={base + "assets/misspoppinsdesktop/after5.svg"}
              alt="After Screenshot"
              className="mpdash-hmw-image"
            />
            <p className="mpdash-hmw-description-after">
              A simplified dashboard highlights key information and uses color
              cues for quick recognition. Coaches can customize views gradually,
              keeping the experience clear for beginners.
            </p>
          </div>
        </div>
      </section>



      {/* WIREFRAMES – FINAL */}
      <section className="mpdash-wireframes-section">
   

        <a
          href="https://www.figma.com/design/5dB9u3QPRTMTGqOQzCRLgr/Iva-Portfolio-Projects?node-id=83-12180&t=ytzYCB4jzQJBGVHA-1"
          target="_blank"
          rel="noopener noreferrer"
          className="mpdash-wireframes-button"
        >
          View Full Wireframe
        </a>
      </section>
    </main>
  );
};

export default MissPoppinsDashboard;
