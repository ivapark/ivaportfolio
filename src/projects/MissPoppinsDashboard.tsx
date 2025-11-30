import React, { useState } from "react";
import "./MissPoppinsDashboard.css";

const AFFINITY_IMAGES = ["affinity1.svg"]; // add more filenames if you have them

const MissPoppinsDashboard: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const [affinityIndex, setAffinityIndex] = useState(0);

  const handlePrev = () => {
    setAffinityIndex((prev) => (prev - 1 + AFFINITY_IMAGES.length) % AFFINITY_IMAGES.length);
  };

  const handleNext = () => {
    setAffinityIndex((prev) => (prev + 1) % AFFINITY_IMAGES.length);
  };

  const affinitySrc =
    base + "/assets/misspoppinsdesktop/" + AFFINITY_IMAGES[affinityIndex];

  return (
    <main className="mp-page">
      {/* Hero Section */}
      <section className="mp-container">
        <div className="mp-text-section">
          <h1 className="mp-title">MissPoppins Dashboard Redesign: </h1>
          <h2 className="mp-subtitle">Simplifying Navigation for Coaches</h2>

          <div className="mp-info">
            <p className="mp-main-text mp-info-line">
              <span style={{ fontWeight: 500 }}>Overview:</span>
              <span className="mp-main-text">
                {" "}
                Streamlined navigation and introduced strategic pricing to
                enhance the coach-client experience.
              </span>
            </p>
            <p className="mp-main-text mp-info-line">
              <span style={{ fontWeight: 500 }}>Role:</span>
              <span className="mp-main-text">
                {" "}
                UX Researcher, UX/UI Designer
              </span>
            </p>
            <p className="mp-main-text mp-info-line">
              <span style={{ fontWeight: 500 }}>Toolkit:</span>
              <span className="mp-main-text">
                {" "}
                Figma, FigJam, Pencil and Paper
              </span>
            </p>
          </div>
        </div>

        <div className="mp-image-section">
          <img
            src={base + "/assets/misspoppinsdesktop/dashboardmain.svg"}
            alt="Dashboard Preview"
            className="mpd-hero-image"
          />
        </div>
      </section>

      {/* Background Section */}
      <section className="mpd-background-section">
        <h2 className="mp-subtitle">Background</h2>
        <p className="mp-main-text mpd-background-intro">
          The current dashboard for coaches is{" "}
          <span className="highlight-red">cluttered</span> and{" "}
          <span className="highlight-red">confusing</span>, especially for
          first-time or less tech-savvy users.
        </p>

        {/* Problem 1 */}
        <div className="mpd-problem-container">
          <div className="mpd-problem-with-text">
            <div className="mpd-problem-image-wrapper">
              <img
                src={base + "/assets/misspoppinsdesktop/background1.svg"}
                alt="Dashboard showing cluttered interface"
                className="mpd-problem-img"
              />
            </div>
            <div className="mpd-problem-description">
              <p className="mp-description-text">
                Terminology like &quot;form,&quot; &quot;content,&quot;
                &quot;file,&quot; and &quot;database&quot; overlaps without
                clear definitions, leading to user frustration.
              </p>
            </div>
          </div>
        </div>

        {/* Problem 2 */}
        <div className="mpd-problem-container">
          <div className="mpd-problem-with-text">
            <div className="mpd-problem-text-left">
              <p className="mp-description-text">
                Availability setup felt wordy and crowded
              </p>
            </div>
            <div className="mpd-problem-image-wrapper">
              <img
                src={base + "/assets/misspoppinsdesktop/background2.svg"}
                alt="Availability setup interface"
                className="mpd-problem-img-wide"
              />
            </div>
          </div>
        </div>

        {/* Problem 3 */}
        <div className="mpd-problem-container">
          <div className="mpd-problem-with-text">
            <div className="mpd-problem-image-wrapper">
              <img
                src={base + "/assets/misspoppinsdesktop/background3.svg"}
                alt="File storage interface"
                className="mpd-problem-img"
              />
            </div>
            <div className="mpd-problem-description">
              <p className="mp-description-text">
                <strong>
                  File storage became disorganized and confusing as files
                  accumulated.
                </strong>{" "}
                The file management process should be simplified so coaches
                don&apos;t waste time on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Goal Section */}
      <section className="mpd-research-section">
        <h2 className="mp-subtitle">Research Goal</h2>
        <p className="mp-goal-text">
          The goal is to redesign the coach dashboard to be:
        </p>

        <div className="mp-research-steps">
          <div className="mp-step">
            <p className="step-number">1.</p>
            <p className="step-label" style={{ marginBottom: "3rem" }}>
              Intuitive for first-time users
            </p>
            <img
              src={base + "/assets/misspoppinsdesktop/icon1.svg"}
              alt="Intuitive Design Icon"
            />
          </div>

          <div className="mp-step">
            <p className="step-number">2.</p>
            <p className="step-label">
              Accessible for older adults with limited tech confidence
            </p>
            <img
              src={base + "/assets/misspoppinsdesktop/icon2.svg"}
              alt="Accessibility Icon"
            />
          </div>

          <div className="mp-step">
            <p className="step-number">3.</p>
            <p className="step-label">
              Clear in function, with reduced cognitive load
            </p>
            <img
              src={base + "/assets/misspoppinsdesktop/icon3.svg"}
              alt="Clarity Icon"
            />
          </div>
        </div>

        <p className="mp-note">
          This research aims to uncover detailed insights for making the
          dashboard more intuitive, improving the first-time user experience,
          supporting older users, clarifying functionality, and reducing
          cognitive load.
        </p>
      </section>

      {/* Research Pain Points */}
      <section className="mp-painpoints-section">
        <h2 className="mp-title">
          To achieve this, I analyzed pain points across key areas of the user
          journey, including:
        </h2>

        <div className="mp-painpoints-grid">
          {/* 1. Organization */}
          <div className="mp-painpoint-column">
            <h3 className="mp-painpoint-heading">1. Organization</h3>

            <div className="mp-painpoint-item">
              <img
                src={base + "/assets/misspoppinsdesktop/calendar.svg"}
                alt="Calendar icon"
              />
              <p>
                Calendar Integration
                <br />
                and Scheduling
              </p>
            </div>

            <div className="mp-painpoint-item">
              <img
                src={base + "/assets/misspoppinsdesktop/fileshare.svg"}
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
          <div className="mp-painpoint-column">
            <h3 className="mp-painpoint-heading">2. Personalization</h3>

            <div className="mp-painpoint-item">
              <img
                src={base + "/assets/misspoppinsdesktop/personalization.svg"}
                alt="Personalization icon"
              />
              <p>
                Personalization and
                <br />
                Dashboard Usability
              </p>
            </div>

            <div className="mp-painpoint-item">
              <img
                src={base + "/assets/misspoppinsdesktop/payment.svg"}
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
          <div className="mp-painpoint-column">
            <h3 className="mp-painpoint-heading">3. Communication</h3>

            <div className="mp-painpoint-item">
              <img
                src={base + "/assets/misspoppinsdesktop/communication.svg"}
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

      {/* User Interviews */}
      <section className="mp-user-interviews-section">
        <h2 className="mp-subtitle">User Interviews</h2>

        <div className="mp-user-interview-content">
          <div className="mp-user-interview-info">
            <div className="mp-user-interview-circle">
              <p>8</p>
            </div>
            <span>user interviews conducted</span>
          </div>

          <div className="mp-user-interview-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div className="mp-user-avatar" key={i}>
                <img
                  src={
                    base +
                    `/assets/misspoppinsdesktop/user${i + 1}.svg`
                  }
                  alt={`User ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affinity Mapping */}
      <section className="mp-affinity-section">
        <h2 className="mp-subtitle">Affinity Mapping</h2>
        <p className="mp-affinity-description">
          The affinity diagram below highlights coaches’ insights in each area:
        </p>

        <div className="mp-carousel-wrapper">
          <button className="mp-carousel-button" onClick={handlePrev}>
            &#10094;
          </button>
          <img
            src={affinitySrc}
            alt="Affinity Mapping Diagram"
            className="mp-carousel-image"
          />
          <button className="mp-carousel-button" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      </section>

      {/* Research Findings */}
      <section className="mpd-research-findings-section">
        <h2 className="mp-subtitle">Research Findings</h2>

        {/* 1. Organization */}
        <div className="mpd-finding-category">
          <h3 className="mpd-category-title">1. Organization</h3>

          <div className="mpd-finding-item">
            <div className="mpd-finding-icon-wrapper">
              <img
                src={base + "/assets/misspoppinsdesktop/calendar.svg"}
                alt="Calendar Icon"
                className="mpd-finding-icon-img"
              />
            </div>
            <div className="mpd-finding-content">
              <h4 className="mpd-finding-label">
                Calendar Integration and Scheduling
              </h4>
              <p className="mpd-finding-text">
                Coaches want Google Calendar integration with
                daily/weekly/monthly views and an easy way to set working
                hours. Current scheduling feels too complex and time-consuming.
              </p>
            </div>
          </div>

          <div className="mpd-finding-item">
            <div className="mpd-finding-icon-wrapper">
              <img
                src={base + "/assets/misspoppinsdesktop/fileshare.svg"}
                alt="Files Icon"
                className="mpd-finding-icon-img"
              />
            </div>
            <div className="mpd-finding-content">
              <h4 className="mpd-finding-label">
                File and Resource Sharing
              </h4>
              <p className="mpd-finding-text">
                File storage quickly becomes messy as content grows. Coaches
                need clearer folders, drag-and-drop uploads, and starter
                templates (e.g., intake forms) to simplify onboarding and data
                updates.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Personalization */}
        <div className="mpd-finding-category">
          <h3 className="mpd-category-title">2. Personalization</h3>

          <div className="mpd-finding-item">
            <div className="mpd-finding-icon-wrapper">
              <img
                src={base + "/assets/misspoppinsdesktop/personalization.svg"}
                alt="Dashboard Icon"
                className="mpd-finding-icon-img"
              />
            </div>
            <div className="mpd-finding-content">
              <h4 className="mpd-finding-label">
                Personalization and Dashboard Usability
              </h4>
              <p className="mpd-finding-text">
                Coaches prefer a clean, minimal dashboard that shows only
                essentials (clients, sessions, and progress). They&apos;d like
                color coding, tabs, or widgets for quick navigation without
                heavy setup.
              </p>
            </div>
          </div>

          <div className="mpd-finding-item">
            <div className="mpd-finding-icon-wrapper">
              <img
                src={base + "/assets/misspoppinsdesktop/payment.svg"}
                alt="Payment Icon"
                className="mpd-finding-icon-img"
              />
            </div>
            <div className="mpd-finding-content">
              <h4 className="mpd-finding-label">
                Payment and Package Transparency
              </h4>
              <p className="mpd-finding-text">
                Coaches want to instantly see who purchased which package, its
                status, and payment updates. Information about one-time sessions
                vs. ongoing packages should be clear and easy to access.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Communication */}
        <div className="mpd-finding-category">
          <h3 className="mpd-category-title">3. Communication</h3>

          <div className="mpd-finding-item">
            <div className="mpd-finding-icon-wrapper">
              <img
                src={base + "/assets/misspoppinsdesktop/communication.svg"}
                alt="Notification Icon"
                className="mpd-finding-icon-img"
              />
            </div>
            <div className="mpd-finding-content">
              <h4 className="mpd-finding-label">
                Notifications and Communication
              </h4>
              <p className="mpd-finding-text">
                Coaches miss messages in email and want SMS or in-app alerts.
                They&apos;d like an all-in-one hub for chat, video calls, screen
                sharing, and file sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HMW Summary */}
      <section className="mp-hmw-section">
        <h3 className="mp-subtitle">
          Turning Key Insights into How Might We Statements
        </h3>

        <div className="mp-hmw-header">
          <div className="mp-hmw-column">
            <img
              src={base + "/assets/misspoppinsapp/hmwproblem.svg"}
              alt="Problem Icon"
            />
            <h4 className="mp-hmw-subtitle">Problem</h4>
          </div>
          <div className="mp-hmw-column">
            <img
              src={base + "/assets/misspoppinsapp/hmwidea.svg"}
              alt="Idea Icon"
            />
            <h4 className="mp-hmw-subtitle">How Might We</h4>
          </div>
        </div>

        <div className="mp-hmw-row">
          <div className="mp-hmw-bubble">
            Coaches struggle with{" "}
            <span className="highlight-red">disorganized file storage</span> and{" "}
            <span className="highlight-red">complex scheduling tools</span>,
            making it difficult for first-time users with limited tech
            experience to manage their clients efficiently.
          </div>
          <img
            src={base + "/assets/misspoppinsapp/yellowarrow.svg"}
            alt="Arrow"
            className="mp-hmw-arrow"
          />
          <div className="mp-hmw-bubble">
            How might we create a{" "}
            <span className="highlight-red">
              clear, intuitive scheduling and file management system
            </span>{" "}
            that reduces setup effort and helps coaches find and share
            information quickly?
          </div>
        </div>

        <div className="mp-hmw-row">
          <div className="mp-hmw-bubble">
            The platform feels{" "}
            <span className="highlight-red">wordy and cluttered</span>, leaving
            coaches <span className="highlight-red">overwhelmed</span> instead
            of supported, while they still need personalized views of clients,
            progress, and payment information.
          </div>
          <img
            src={base + "/assets/misspoppinsapp/yellowarrow.svg"}
            alt="Arrow"
            className="mp-hmw-arrow"
          />
          <div className="mp-hmw-bubble">
            How might we design a{" "}
            <span className="highlight-red">clean, customizable dashboard</span>{" "}
            that highlights each coach’s most relevant information without
            requiring heavy configuration?
          </div>
        </div>

        <div className="mp-hmw-row">
          <div className="mp-hmw-bubble">
            Current communication tools are{" "}
            <span className="highlight-red">
              fragmented and rely too heavily on email
            </span>
            , which coaches often miss, leading to{" "}
            <span className="highlight-red">
              frustration and missed updates
            </span>
            .
          </div>
          <img
            src={base + "/assets/misspoppinsapp/yellowarrow.svg"}
            alt="Arrow"
            className="mp-hmw-arrow"
          />
          <div className="mp-hmw-bubble">
            How might we streamline communication with{" "}
            <span className="highlight-red">
              familiar, real-time notifications and chat tools
            </span>{" "}
            that make staying connected easy and accessible for all coaches?
          </div>
        </div>
      </section>

      {/* HMW 1 – Design process */}
      <section className="hmw-section">
        <h3 className="mp-subtitle">
          Answering How Might We Statements (Design Process)
        </h3>
        <p className="hmw-question">
          1. How might we design a clear, intuitive scheduling and file
          management system that minimizes setup and helps coaches quickly find
          and share information?
        </p>

        <div className="hmw-feature">
          <img
            src={base + "/assets/misspoppinsdesktop/calendar.svg"}
            alt="Calendar Icon"
            className="hmw-icon"
          />
          <span className="hmw-feature-label">1. Unified Scheduling Calendar</span>
        </div>

        <div className="hmw-comparison">
          <div className="hmw-column">
            <h3 className="hmw-subtitle">Before</h3>
            <img
              src={base + "/assets/misspoppinsdesktop/before1.svg"}
              alt="Before Screenshot"
              className="hmw-image"
            />
            <p className="hmw-description-before">
              Scheduling required jumping between Motherboard and Google
              Calendar. Working hours were hidden in menus, and switching
              between daily, weekly, and monthly views was awkward. First-time
              users often felt frustrated just trying to confirm or adjust
              availability.
            </p>
          </div>

          <div className="hmw-column">
            <h3 className="hmw-subtitle">After</h3>
            <img
              src={base + "/assets/misspoppinsdesktop/after1.svg"}
              alt="After Screenshot"
              className="hmw-image"
            />
            <p className="hmw-description-after">
              Built-in Google Calendar sync centralizes scheduling. Coaches can
              set hours with simple toggles and quickly switch between clean
              daily, weekly, and monthly views. Rescheduling is seamless, giving
              both coaches and parents clarity without extra steps.
            </p>
          </div>
        </div>

        <div className="hmw-feature">
          <img
            src={base + "/assets/misspoppinsdesktop/calendar.svg"}
            alt="Calendar Icon"
            className="hmw-icon"
          />
          <span className="hmw-feature-label">
            2. Streamline File &amp; Data Management
          </span>
        </div>

        <div className="hmw-comparison">
          <div className="hmw-column">
            <h3 className="hmw-subtitle">Before</h3>
            <img
              src={base + "/assets/misspoppinsdesktop/before2.svg"}
              alt="Before Screenshot"
              className="hmw-image"
            />
            <p className="hmw-description-before2">
              Files were scattered across multiple screens with no clear
              hierarchy. Updating client data or editing intake forms required
              several clicks, and there were no templates meaning every
              onboarding started from scratch.
            </p>
          </div>

          <div className="hmw-column">
            <h3 className="hmw-subtitle">After</h3>
            <img
              src={base + "/assets/misspoppinsdesktop/after2.svg"}
              alt="After Screenshot"
              className="hmw-image"
            />
            <p className="hmw-description-after2">
              Labeled folders, drag-and-drop uploads, and quick search keep
              resources organized. Pre-made intake templates speed up
              onboarding, and client info (like package validity) can be edited
              directly, saving time as libraries grow.
            </p>
          </div>
        </div>
      </section>

      {/* HMW 2 */}
      <section className="hmw-section">
        <p className="hmw-question">
          2. How might we tailor the app experience to each coach’s unique needs
          and habits without overwhelming first-time users who may not be
          familiar with customization features?
        </p>

        <div className="hmw-feature">
          <img
            src={base + "/assets/misspoppinsdesktop/calendar.svg"}
            alt="Calendar Icon"
            className="hmw-icon"
          />
          <span className="hmw-feature-label">1. Personalized Dashboard</span>
        </div>

        <div className="hmw-comparison">
          <div className="hmw-column">
            <h3 className="hmw-subtitle">Before</h3>
            <img
              src={base + "/assets/misspoppinsdesktop/before3.svg"}
              alt="Before Screenshot"
              className="hmw-image"
            />
            <p className="hmw-description-before">
              Dashboards showed every feature at once, with wordy labels and
              cluttered layouts. Coaches had to dig through unrelated data just
              to find client or session info.
            </p>
          </div>

          <div className="hmw-column">
            <h3 className="hmw-subtitle">After</h3>
            <img
              src={base + "/assets/misspoppinsdesktop/after3.svg"}
              alt="After Screenshot"
              className="hmw-image"
            />
            <p className="hmw-description-after">
              A simplified dashboard highlights key information and uses color
              cues for quick recognition. Coaches can customize views gradually,
              keeping the experience clear for beginners.
            </p>
          </div>
        </div>

        <div className="hmw-feature">
          <img
            src={base + "/assets/misspoppinsdesktop/calendar.svg"}
            alt="Calendar Icon"
            className="hmw-icon"
          />
          <span className="hmw-feature-label">
            2. Streamline File &amp; Data Management
          </span>
        </div>

        <div className="hmw-comparison">
          <div className="hmw-column">
            <h3 className="hmw-subtitle">Before</h3>
            <img
              src={base + "/assets/misspoppinsdesktop/before4.svg"}
              alt="Before Screenshot"
              className="hmw-image"
            />
            <p className="hmw-description-before2">
              Files were scattered across multiple screens with no clear
              hierarchy. Updating client data or editing intake forms required
              several clicks, and there were no templates meaning every
              onboarding started from scratch.
            </p>
          </div>

          <div className="hmw-column">
            <h3 className="hmw-subtitle">After</h3>
            <img
              src={base + "/assets/misspoppinsdesktop/after4.svg"}
              alt="After Screenshot"
              className="hmw-image"
            />
            <p className="hmw-description-after2">
              Labeled folders, drag-and-drop uploads, and quick search keep
              resources organized. Pre-made intake templates speed up
              onboarding, and client info (like package validity) can be edited
              directly, saving time as libraries grow.
            </p>
          </div>
        </div>
      </section>

      {/* HMW 3 */}
      <section className="hmw-section">
        <p className="hmw-question">
          3. How might we create a clear, intuitive scheduling and file
          management system that reduces setup effort and helps coaches find and
          share information quickly?
        </p>

        <div className="hmw-feature">
          <img
            src={base + "/assets/misspoppinsdesktop/calendar.svg"}
            alt="Calendar Icon"
            className="hmw-icon"
          />
          <span className="hmw-feature-label">1. Personalized Dashboard</span>
        </div>

        <div className="hmw-comparison">
          <div className="hmw-column">
            <h3 className="hmw-subtitle">Before</h3>
            <img
              src={base + "/assets/misspoppinsdesktop/before5.svg"}
              alt="Before Screenshot"
              className="hmw-image"
            />
            <p className="hmw-description-before">
              Dashboards showed every feature at once, with wordy labels and
              cluttered layouts. Coaches had to dig through unrelated data just
              to find client or session info.
            </p>
          </div>

          <div className="hmw-column">
            <h3 className="hmw-subtitle">After</h3>
            <img
              src={base + "/assets/misspoppinsdesktop/after5.svg"}
              alt="After Screenshot"
              className="hmw-image"
            />
            <p className="hmw-description-after">
              A simplified dashboard highlights key information and uses color
              cues for quick recognition. Coaches can customize views gradually,
              keeping the experience clear for beginners.
            </p>
          </div>
        </div>
      </section>

      {/* UX Design Wireframes */}
      <section className="mp-wireframes-section">
        <h2 className="mp-title">UX Design</h2>
        <h3 className="mp-subtitle-wireframe">Wireframes Sketch</h3>

        <div className="mp-wireframes-row">
          <img
            src={base + "/assets/misspoppinsapp/wireframe1.svg"}
            alt="Wireframe 1"
            className="mp-wireframe-img"
          />
          <img
            src={base + "/assets/misspoppinsapp/wireframe2.svg"}
            alt="Wireframe 2"
            className="mp-wireframe-img"
          />
          <img
            src={base + "/assets/misspoppinsapp/wireframe3.svg"}
            alt="Wireframe 3"
            className="mp-wireframe-img"
          />
        </div>
      </section>

      {/* Final Wireframes */}
      <section className="mp-wireframes-section">
        <h3 className="mp-subtitle">Wireframes</h3>

        <div className="mp-wireframes-row">
          <img
            src={base + "/assets/misspoppinsapp/hmwafter3.svg"}
            alt="Wireframe 1"
            className="mp-wireframe-img"
          />
          <img
            src={base + "/assets/misspoppinsapp/hmwafter2.svg"}
            alt="Wireframe 2"
            className="mp-wireframe-img"
          />
          <img
            src={base + "/assets/misspoppinsapp/hmwafter1.svg"}
            alt="Wireframe 3"
            className="mp-wireframe-img"
          />
        </div>

        <a
          href="https://www.figma.com/design/5dB9u3QPRTMTGqOQzCRLgr/Iva-Portfolio-Projects?node-id=1-910&t=UZcxefPIcX2asmg2-1"
          target="_blank"
          rel="noopener noreferrer"
          className="mp-wireframes-button"
        >
          View Full Wireframe
        </a>
      </section>
    </main>
  );
};

export default MissPoppinsDashboard;
