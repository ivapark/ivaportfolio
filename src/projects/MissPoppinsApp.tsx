// src/components/MissPoppinsApp.tsx
import React, { useState } from "react";
import "./MissPoppinsApp.css";


const base = import.meta.env.BASE_URL;
const affinityImages = [
  base + "assets/misspoppinsapp/image3.svg",
  base + "assets/misspoppinsapp/image4.svg",
  base + "assets/misspoppinsapp/image5.svg",
  base + "assets/misspoppinsapp/image6.svg",
  base + "assets/misspoppinsapp/image7.svg",
  base + "assets/misspoppinsapp/image8.svg",
  base + "assets/misspoppinsapp/image9.svg",
  base + "assets/misspoppinsapp/image10.svg",



  // Add more images here if you have them:
  // "/assets/misspoppinsapp/image3-1.svg",
  // "/assets/misspoppinsapp/image3-2.svg",
];

const MissPoppinsApp: React.FC = () => {
  const [affinityIndex, setAffinityIndex] = useState(0);

  const handlePrev = () => {
    setAffinityIndex((prev) =>
      prev === 0 ? affinityImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setAffinityIndex((prev) =>
      prev === affinityImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="mp-container">
        <div className="mp-text-section">
          <h1 className="mp-title">MissPoppins App Redesign:</h1>
          <h2 className="mp-subtitle">
            Simplifying Navigation and Boosting User Engagement
          </h2>

          <div className="mp-info">
            <p className="mp-main-text mp-info-line">
              <span style={{ fontWeight: 500 }}>Overview:</span>{" "}
              <span className="mp-main-text">
                Streamlined navigation and introduced strategic pricing to
                enhance the coach-client experience.
              </span>
            </p>
            <p className="mp-main-text mp-info-line">
              <span style={{ fontWeight: 500 }}>Role:</span>{" "}
              <span className="mp-main-text">
                UX Researcher, UX/UI Designer
              </span>
            </p>
            <p className="mp-main-text mp-info-line">
              <span style={{ fontWeight: 500 }}>Toolkit:</span>{" "}
              <span className="mp-main-text">
                Figma, FigJam, Pencil and Paper
              </span>
            </p>
          </div>
        </div>

        <div className="mp-image-section">
        <video
          className="mp-video"
          src={base+ "/assets/misspoppinsapp/misspoppinsappvideo1.mov"}
          autoPlay
          muted
          loop
          playsInline
        />
        </div>
      </section>

      {/* Background Section */}
      <section className="mp-background-section">
        <h2 className="mp-title">Background</h2>
        <p className="mp-main-text">
          <span className="highlight-purple">MissPoppins</span> is an app that
          connects parents with expert coaches through
        </p>

        <div className="mp-background-icons">
          <div className="mp-background-icon">
            <img
              src= {base+ "/assets/misspoppinsapp/consultation.svg"}
              alt="Consultation"
            />
            <p className="mp-background-small-text">
              One time free consultation
            </p>
          </div>
          <div className="mp-background-icon">
            <img
              src= {base+ "/assets/misspoppinsapp/videochat.svg"}
              alt="Video Support"
            />
            <p className="mp-background-small-text">
              Ongoing support via video calls and chat
            </p>
          </div>
          <div className="mp-background-icon">
            <img
              src= {base+ "/assets/misspoppinsapp/webinars.svg"}
              alt="Articles and Webinars"
            />
            <p className="mp-background-small-text">
              Access to articles and webinars
            </p>
          </div>
        </div>

        <p className="mp-main-text">
          It's a <strong>one-stop</strong> platform for parenting needs like
          sleep, nutrition, development, and wellness.
        </p>
      </section>

      {/* Research Goal Section */}
      <section className="mp-research-section">
        <h2 className="mp-title">Research Goal</h2>
        <p className="mp-main-text mp-goal-text">
          The goal is to understand parents'{" "}
          <span className="highlight-purple">needs</span>,{" "}
          <span className="highlight-purple">preferences</span>, and{" "}
          <span className="highlight-purple">pain points</span> when seeking
          coaching services and accessing parenting resources.
        </p>

        <div className="mp-research-steps">
          <div className="mp-step">
            <p className="mp-small-text step-number">1.</p>
            <p className="mp-small-text step-label">
              How parents navigate the process of finding the right coach
            </p>
            <img src= {base+ "/assets/misspoppinsapp/step1.svg"} alt="Step 1" />
          </div>
          <div className="mp-step">
            <p className="mp-small-text step-number">2.</p>
            <p className="mp-small-text step-label">
              What their expectations for consultations and ongoing support
            </p>
            <img src= {base+ "/assets/misspoppinsapp/step2.svg"} alt="Step 2" />
          </div>
          <div className="mp-step">
            <p className="mp-small-text step-number">3.</p>
            <p className="mp-small-text step-label">
              How they engage with articles, webinars, and community features
            </p>
            <img src= {base+ "/assets/misspoppinsapp/step3.svg"} alt="Step 3" />
          </div>
        </div>

        <div className="mp-subcategories">
          <div className="mp-subcategory">
            <img
              src= {base+ "/assets/misspoppinsapp/info-sources.svg"}
              alt="Common Info Sources"
            />
            <p className="mp-small-text-research">Common Information Sources</p>
          </div>
          <div className="mp-subcategory">
            <img
              src= {base+ "/assets/misspoppinsapp/architecture.svg"}
              alt="Confusing Info Architecture"
            />
            <p className="mp-small-text-research">
              Confusing Information Architecture for App
            </p>
          </div>
          <div className="mp-subcategory">
            <img
              src= {base+ "/assets/misspoppinsapp/package.svg"}
              alt="Package Pricing"
            />
            <p className="mp-small-text-research">Package Pricing</p>
          </div>
          <div className="mp-subcategory">
            <img
              src= {base+ "/assets/misspoppinsapp/community.svg"}
              alt="Community Support"
            />
            <p className="mp-small-text-research">
              Community and Peer Support (Mentorship)
            </p>
          </div>
          <div className="mp-subcategory">
            <img
              src= {base+ "/assets/misspoppinsapp/accessibility.svg"}
              alt="Resource Access"
            />
            <p className="mp-small-text-research">
              Resource and Information Accessibility
            </p>
          </div>
        </div>

        <p className="mp-small-text mp-note">
          (To improve organization and clarity, I added subcategories to provide
          more detailed insights related to the primary topics)
        </p>
        <p className="mp-main-text mp-conclusion">
          This research aims to inform design improvements that enhance
          usability, streamline access to resources, and create a supportive and
          user-friendly experience.
        </p>
      </section>

      {/* Methodology */}
      <section className="mp-methodology-section">
        <h2 className="mp-title">Methodologies</h2>
        <div className="mp-methodology-list-wrapper">
          <div className="mp-methodology-list">
            <p className="mp-main-text">1. Competitive analysis</p>
            <p className="mp-main-text">2. User interviews</p>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="mp-analysis-section">
        <h3 className="mp-subsection-title">1. Competitive analysis</h3>
        <div className="mp-image-wrapper">
          <img
            src= {base+ "/assets/misspoppinsapp/image2.png"}
            alt="Competitive Analysis Table"
            className="mp-hover-image"
          />
        </div>
      </section>

      {/* Key Findings */}
      <section className="mp-key-findings-section">
        <h3 className="mp-subtitle">Key Findings from the Competitive Analysis</h3>

        <div className="mp-finding">
          <img
            src= {base+ "/assets/misspoppinsapp/strength.svg"}
            alt="Strengths Icon"
          />
          <div className="mp-finding-text">
            <h4 className="mp-finding-title">Strengths to Leverage</h4>
            <p className="mp-finding-body">
              Competitors excel in personalized support, community engagement,
              and comprehensive services but often lack direct-to-consumer
              accessibility.
            </p>
          </div>
        </div>

        <div className="mp-finding">
          <img
            src= {base+ "/assets/misspoppinsapp/opportunity.svg"}
            alt="Opportunity Icon"
          />
          <div className="mp-finding-text">
            <h4 className="mp-finding-title">Opportunities for MissPoppins</h4>
            <p className="mp-finding-body">
              Build a strong mobile experience, foster community features, and
              offer accessible services beyond employer partnerships.
            </p>
          </div>
        </div>

        <div className="mp-finding">
          <img
            src= {base+ "/assets/misspoppinsapp/keydiff.svg"}
            alt="Key Differentiator Icon"
          />
          <div className="mp-finding-text">
            <h4 className="mp-finding-title">Key Differentiator</h4>
            <p className="mp-finding-body" style={{ fontStyle: "italic" }}>
              Address accessibility gaps by combining proactive care,
              personalized support, and community-driven features for all
              parents.
            </p>
          </div>
        </div>
      </section>

      {/* User Interviews */}
      <section className="mp-user-interviews-section">
        <h3 className="mp-subsection-title">2. User interviews</h3>
        <div className="mp-user-interview-content">
          <div className="mp-user-interview-info">
            <img
              src= {base+ "/assets/misspoppinsapp/number7.svg"}
              alt="7 Interviews"
            />
            <p className="mp-main-text">user interviews conducted</p>
          </div>
          <img
            src= {base+ "/assets/misspoppinsapp/userinterview.svg"}
            alt="User Interviewees"
            className="mp-user-interview-image"
          />
        </div>
      </section>

      {/* Affinity Mapping */}
      <section className="mp-affinity-section">
        <h3 className="mp-subtitle">Affinity Mapping</h3>
        <p className="mp-main-text mp-affinity-description">
          The affinity diagram below uses different colors to represent insights
          from each participant:
        </p>

        <div className="mp-carousel-wrapper">
          <button
            className="mp-carousel-button"
            id="prevBtn"
            type="button"
            onClick={handlePrev}
          >
            <span>&lt;</span>
          </button>
          <img
            id="carouselImage"
            src={affinityImages[affinityIndex]}
            alt={`Affinity image ${affinityIndex + 1}`}
            className="mp-carousel-image"
          />
          <button
            className="mp-carousel-button"
            id="nextBtn"
            type="button"
            onClick={handleNext}
          >
            <span>&gt;</span>
          </button>
        </div>
      </section>

      {/* Research Findings 1 */}
      <section className="mp-findings-section">
        <h2 className="mp-title">Research Findings</h2>

        <div className="mp-finding-header">
          <img
            src= {base+ "/assets/misspoppinsapp/researchfindingsicon1.svg"}
            alt="Finding Icon"
            className="mp-finding-icon"
          />
          <h3 className="mp-subtitle mp-finding-subtitle">
            1. How parents navigate the process of finding the right coach
          </h3>
        </div>

        <div className="mp-finding-body">
          <img
            src= {base+ "/assets/misspoppinsapp/researchfindings1.svg"}
            alt="Finding Insight"
            className="mp-finding-postit1"
          />
        </div>
      </section>

      {/* Research Finding 2 */}
      <section className="mp-researchfinding-section">
        <div className="mp-finding-header">
          <img
            src= {base+ "/assets/misspoppinsapp/researchfindings2icon.svg"}
            alt=""
            className="mp-finding-icon"
          />
          <h3 className="mp-finding-subtitle">
            2. What their expectations for consultations and ongoing support
          </h3>
        </div>

        <div className="mp-row">
          <img
            src= {base+ "/assets/misspoppinsapp/researchfindings2.svg"}
            alt=""
            className="mp-finding-postit"
          />
          <img
            src= {base+ "/assets/misspoppinsapp/researchfindings2-1.svg"}
            alt=""
            className="mp-finding-postit"
          />
          <img
            src= {base+ "/assets/misspoppinsapp/researchfindings2-2.svg"}
            alt=""
            className="mp-finding-postit"
          />
        </div>

        <div className="mp-row mp-bottom-row">
          <img
            src= {base+ "/assets/misspoppinsapp/researchfindings2-3.svg"}
            alt=""
            className="mp-finding-postit"
          />
          <img
            src= {base+ "/assets/misspoppinsapp/researchfindings2-4.svg"}
            alt=""
            className="mp-finding-postit"
          />
        </div>
      </section>

      {/* Research Finding 3 */}
      <section className="mp-researchfinding-section">
        <div className="mp-finding-header">
          <img
            src= {base+ "/assets/misspoppinsapp/researchfindings3icon.svg"}
            alt=""
            className="mp-finding-icon2"
          />
          <h3 className="mp-finding-subtitle2">
            3. How they engage with articles, webinars, and community features
          </h3>
        </div>

        <div className="mp-row">
          <img
            src= {base+ "/assets/misspoppinsapp/researchfindings3.svg"}
            alt=""
            className="mp-finding-postit"
          />
          <img
            src= {base+ "/assets/misspoppinsapp/researchfindings3-1.svg"}
            alt=""
            className="mp-finding-postit"
          />
        </div>

        <div className="mp-row mp-bottom-row">
          <img
            src= {base+ "/assets/misspoppinsapp/researchfindings3-2.svg"}
            alt=""
            className="mp-finding-postit"
          />
          <img
            src= {base+ "/assets/misspoppinsapp/researchfindings3-3.svg"}
            alt=""
            className="mp-finding-postit"
          />
        </div>
      </section>

      {/* HMW Section */}
      <section className="mp-hmw-section">
        <h3 className="mp-subtitle">
          Turning Key Insights into How Might We Statements
        </h3>

        <div className="mp-hmw-header">
          <div className="mp-hmw-column">
            <img
              src= {base+ "/assets/misspoppinsapp/hmwproblem.svg"}
              alt="Problem Icon"
            />
            <h4 className="mp-hmw-subtitle">Problem</h4>
          </div>
          <div className="mp-hmw-column">
            <img
              src= {base+ "/assets/misspoppinsapp/hmwidea.svg"}
              alt="Idea Icon"
            />
            <h4 className="mp-hmw-subtitle">How Might We</h4>
          </div>
        </div>

        <div className="mp-hmw-row">
          <div className="mp-hmw-bubble">
            Flexibility in rescheduling appointments and reliable, curated
            resources are essential.
          </div>
          <img
            src= {base+ "/assets/misspoppinsapp/yellowarrow.svg"}
            alt="Arrow"
            className="mp-hmw-arrow"
          />
          <div className="mp-hmw-bubble">
            How might we create a platform that offers{" "}
            <span className="highlight-red">
              flexibility in rescheduling appointments
            </span>{" "}
            to accommodate the busy schedules of parents?
          </div>
        </div>

        <div className="mp-hmw-row">
          <div className="mp-hmw-bubble">
            Many prefer pay-per-session models or subscription options depending
            on the frequency of use.
          </div>
          <img
            src= {base+ "/assets/misspoppinsapp/yellowarrow.svg"}
            alt="Arrow"
            className="mp-hmw-arrow"
          />
          <div className="mp-hmw-bubble">
            How might we{" "}
            <span className="highlight-red">
              design a package or session model
            </span>{" "}
            that feels intuitive and manageable for users, ensuring they aren't
            overwhelmed by options?
          </div>
        </div>

        <div className="mp-hmw-row">
          <div className="mp-hmw-bubble">
            Unclear navigation and scattered resources are common frustrations.
          </div>
          <img
            src= {base+ "/assets/misspoppinsapp/yellowarrow.svg"}
            alt="Arrow"
            className="mp-hmw-arrow"
          />
          <div className="mp-hmw-bubble">
            How might we design a navigation system that{" "}
            <span className="highlight-red">simplifies access to resources</span>{" "}
            and eliminates user frustration?
          </div>
        </div>

        <div className="mp-hmw-row">
          <div className="mp-hmw-bubble">
            Most parents are open to mentorship opportunities but emphasize the
            need for trustworthy advice.
          </div>
          <img
            src= {base+ "/assets/misspoppinsapp/yellowarrow.svg"}
            alt="Arrow"
            className="mp-hmw-arrow"
          />
          <div className="mp-hmw-bubble">
            How might we{" "}
            <span className="highlight-red">build a community</span> that
            ensures the advice shared is trustworthy and credible?
          </div>
        </div>
      </section>

      {/* HMW Answer 1 */}
      <section className="mp-hmw-answer-section">
        <div className="mp-hmw-container">
          <p className="mp-hmw-question">
            1. How might we create a platform that offers flexibility in
            rescheduling appointments to accommodate the busy schedules of
            parents?
          </p>
        </div>

        <div className="mp-hmw-steps">
          <div className="mp-hmw-step">
            <div className="mp-hmw-icontext">
              <img
                src={base+ "/assets/misspoppinsapp/calendaricon.svg"}
                alt="Calendar Icon"
                className="mp-hmw-icon"
              />
              <div>
                <p className="mp-hmw-step-title">
                  1. <b>Integrate a scheduling calendar</b>
                </p>
                <p className="mp-hmw-step-desc">
                  option that allows users to view, manage, and reschedule their
                  appointments seamlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="mp-hmw-step">
            <div className="mp-hmw-icontext">
              <img
                src= {base+ "/assets/misspoppinsapp/timeicon.svg"}
                alt="Timer Icon"
                className="mp-hmw-icon"
              />
              <div>
                <p className="mp-hmw-step-title">
                  2. <b>Include real-time availability updates</b>
                </p>
                <p className="mp-hmw-step-desc">
                  from consultants and automated reminders for upcoming
                  sessions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mp-hmw-before-after-row">
          <div className="mp-hmw-combo">
            <p className="mp-hmw-label">Before</p>
            <div className="mp-hmw-pair">
              <img
                src= {base+ "/assets/misspoppinsapp/hmwbefore1.svg"}
                alt="Before Scheduling"
                className="mp-hmw-phone"
              />
              <p className="mp-hmw-text">
                Currently, the app lacks a scheduling feature, requiring users
                to communicate with the coach via chat after purchasing a
                package, which is inconvenient for both parties.
              </p>
            </div>
          </div>

          <div className="mp-hmw-combo">
            <p className="mp-hmw-label">After</p>
            <div className="mp-hmw-pair">
              <img
                src={base+ "/assets/misspoppinsapp/hmwafter1.svg"}
                alt="After Scheduling"
                className="mp-hmw-phone"
              />
              <p className="mp-hmw-text">
                Adding a scheduling calendar with flexible rescheduling
                capabilities will streamline the process and reduce effort for
                both users and coaches. <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Providing real-time availability updates, along with reminders,
                will allow parents to reschedule directly through the app
                without needing to contact support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HMW Answer 2 */}
      <section className="mp-hmw-answer-section">
        <div className="mp-hmw-container">
          <p className="mp-hmw-question">
            2. How might we design a package or session model that feels
            intuitive and manageable for users, ensuring they aren't overwhelmed
            by options?
          </p>
        </div>

        <div className="mp-hmw-steps">
          <div className="mp-hmw-step">
            <div className="mp-hmw-icontext">
              <img
                src= {base+ "/assets/misspoppinsapp/selectchoices.svg"}
                alt="Select Icon"
                className="mp-hmw-icon"
              />
              <div>
                <p className="mp-hmw-step-title">
                  1.{" "}
                  <b>
                    Use the Iyengar and Lepper Jam Study and Decoy Effect to{" "}
                    <br /> structure session packages into three clear tiers:
                  </b>
                </p>
                <ul className="mp-hmw-bullets">
                  <li>
                    <b>Mini:</b> 1 session for those with one-off needs.
                  </li>
                  <li>
                    <b>Pro:</b> 3 sessions for short-term or specific support.
                  </li>
                  <li>
                    <b>Elite:</b> 9 sessions for comprehensive, long-term
                    guidance.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mp-hmw-step">
            <div className="mp-hmw-icontext">
              <img
                src= {base+ "/assets/misspoppinsapp/goldstar.svg"}
                alt="Gold Star"
                className="mp-hmw-icon2"
              />
              <div>
                <p className="mp-hmw-step-title2">
                  2. <b>Highlight popular or recommended packages</b> to provide
                  decision-making cues and reduce the feeling of being
                  overwhelmed.
                </p>
              </div>
            </div>
          </div>

          <p className="mp-hmw-refs">
            <b>Iyengar and Lepper Jam Study:</b> This study shows that too many
            choices can overwhelm individuals, leading to lower satisfaction and
            reduced likelihood of making a decision.
            <br />
            <br />
            <b>Decoy Effect:</b> Adding a strategically priced option can
            influence users to choose a more favorable or premium tier.
          </p>
        </div>

        <div className="mp-hmw-before-after-row">
          <div className="mp-hmw-combo">
            <p className="mp-hmw-label">Before</p>
            <div className="mp-hmw-pair">
              <img
                src= {base+ "/assets/misspoppinsapp/hmwbefore2.svg"}
                alt="Before Packages"
                className="mp-hmw-phone"
              />
              <p className="mp-hmw-text">
                The app's current package page is{" "}
                <b>cluttered and disorganized</b>, presenting users with a wide
                range of session numbers and price points.
                <br />
                <br />
                This <span className="highlight">lack of uniformity</span> leads
                to confusion and makes selecting a package overwhelming.
              </p>
            </div>
          </div>

          <div className="mp-hmw-combo">
            <p className="mp-hmw-label">After</p>
            <div className="mp-hmw-pair">
              <img
                src= {base+ "/assets/misspoppinsapp/hmwafter2.svg"}
                alt="After Packages"
                className="mp-hmw-phone"
              />
              <p className="mp-hmw-text">
                By incorporating the Decoy Effect into the session and pricing
                structure, and clearly labeling and describing each tier with a
                focus on their specific benefits, the{" "}
                <span className="highlight">
                  decision-making process becomes simpler
                </span>
                , reducing decision fatigue and creating a more user-friendly
                experience.
                <br />
                <br />
                Highlighting popular or recommended packages can help users feel
                more confident in their choice and reduce the time and effort
                spent evaluating all available options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HMW Answer 3 */}
      <section className="hmw3-section">
        <p className="hmw3-question">
          3. How might we design a navigation system that simplifies access to
          resources and eliminates user frustration?
        </p>

        <div className="hmw3-step">
          <img
            src= {base+ "/assets/misspoppinsapp/hmwsearchicon.svg"}
            alt="Search Icon"
            className="hmw3-icon"
          />
          <div className="hmw3-step-text">
            <span className="hmw3-bold">
              1. Introduce a Generative AI-powered search bar
            </span>{" "}
            that allows users to type natural language queries and receive
            tailored recommendations for articles, sessions, or features.
          </div>
        </div>

        <div className="mp-hmw-before-after-row3">
          <div className="mp-hmw-combo3">
            <p className="mp-hmw-label3">Before</p>
            <div className="mp-hmw-pair3">
              <img
                src= {base+ "/assets/misspoppinsapp/hmwbefore3.svg"}
                alt="Before"
                className="mp-hmw-phone"
              />
              <p className="mp-hmw-text">
                <br />
                <br />
                The app's rigid category-based organization lacks intuitive
                pathways, making it difficult for users to quickly find relevant
                content.
              </p>
            </div>
          </div>

          <div className="mp-hmw-combo3">
            <p className="mp-hmw-label">After</p>
            <div className="mp-hmw-pair3">
              <img
                src= {base+ "/assets/misspoppinsapp/hmwafter3.svg"}
                alt="After"
                className="mp-hmw-phone"
              />
              <p className="mp-hmw-text">
                For example, users can ask questions like "Which coaching
                package is best for first-time parents?" "What are some quick
                tips for calming a crying baby?" or "Can you help me find
                articles on toddler sleep training?"
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                The AI will provide responses based on the app's verified
                expert-reviewed content, ensuring accurate and reliable
                information.
              </p>
            </div>
          </div>
        </div>

        {/* HMW 3.2 */}
        <div className="hmw3-subsection">
          <div className="hmw3-step">
            <img
              src= {base+ "/assets/misspoppinsapp/hmwslidebar.svg"}
              alt="Slidebar Icon"
              className="hmw3-icon"
            />
            <div className="hmw3-step-text">
              <span className="hmw3-bold">
                2. Simplify the information architecture
              </span>{" "}
              by reducing unnecessary clicks and pages. Implement a{" "}
              <span className="hmw3-red">sliding sidebar</span> menu for quick
              access to key categories like resources, appointment scheduling,
              and session packages.
            </div>
          </div>

          <div className="hmw3-row-slider">
            <div className="hmw3-column">
              <p className="hmw3-label3-2">Before</p>
              <div className="hmw3-img-description">
                <video
                  className="mp-video3-2"
                  src= {base+ "/assets/misspoppinsapp/hmw3-2.mov"}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="hmw3-text-list">
                  <p className="hmw3-caption">
                    Currently, booking an appointment involves navigating
                    through multiple steps:
                  </p>
                  <ol className="hmw3-list">
                    <li>
                      Selecting one of nine categories (lactation, sleep,
                      nutrition, parenting, etc.)
                    </li>
                    <li>
                      Choosing whether the appointment is for themselves or
                      their child
                    </li>
                    <li>Viewing package options</li>
                    <li>Clicking to see package details</li>
                    <li>Navigating to the coach profile</li>
                    <li>
                      And finally accessing the coach's package offerings
                    </li>
                  </ol>
                  <p className="hmw3-note">
                    This complex process makes it difficult to find and book
                    information efficiently.
                  </p>
                </div>
              </div>
            </div>

            <div className="hmw3-column">
              <p className="hmw3-label3-2">After</p>
              <div className="hmw3-img-description">
                <video
                  className="mp-video3-2"
                  src= {base+ "/assets/misspoppinsapp/hmw3-2-2.mov"}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <p className="hmw3-text">
                  By consolidating these steps into a{" "}
                  <span className="hmw3-red">sliding sidebar</span>, users can
                  view coach details, package information, and session options
                  seamlessly in one place, without the need to click through
                  multiple pages. <br />
                  <br />
                  This approach streamlines the process, saving time and
                  reducing frustration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HMW Answer 4 */}
      <section className="hmw4-section">
        <p className="hmw4-question">
          4. How might we build a community that ensures the advice shared is
          trustworthy and credible?
        </p>

        <div className="hmw4-top-row">
          <div className="hmw4-step">
            <img
              src={base + "assets/misspoppinsapp/hmw4hand.svg"}
              alt="Mentorship Icon"
              className="hmw4-icon"
            />
            <p className="hmw4-step-text">
              <b>1. Develop a mentorship community</b> where parents can connect
              with mentors or peers who have relevant experience.
            </p>
          </div>

          <div className="hmw4-step">
            <img
              src={base + "assets/misspoppinsapp/hmw4chat.svg"}
              alt="Chat Icon"
              className="hmw4-icon"
            />
            <p className="hmw4-step-text">
              <b>2. Enable an open chat feature</b> that is monitored and
              reviewed by Generative AI for moderation, ensuring that shared
              advice is credible and any inappropriate or misleading information
              is flagged or removed promptly.
            </p>
          </div>
        </div>

        <div className="hmw4-phone-row">
          <img
            src= {base+ "/assets/misspoppinsapp/hmw4before.svg"}
            className="hmw4-phone"
            alt="Before Chat & Mentor"
          />
          <img
            src= {base+ "/assets/misspoppinsapp/hmw4after.svg"}
            className="hmw4-phone"
            alt="After Chat & Mentor"
          />
        </div>
      </section>

      {/* Wireframes Sketch */}
      <section className="mp-wireframes-section">
        <h2 className="mp-title">UX Design</h2>
        <h3 className="mp-subtitle-wireframe">Wireframes Sketch</h3>

        <div className="mp-wireframes-row">
          <img
            src= {base+ "/assets/misspoppinsapp/wireframe1.svg"}
            alt="Wireframe 1"
            className="mp-wireframe-img"
          />
          <img
            src= {base+ "/assets/misspoppinsapp/wireframe2.svg"}
            alt="Wireframe 2"
            className="mp-wireframe-img"
          />
          <img
            src= {base+ "/assets/misspoppinsapp/wireframe3.svg"}
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
            src= {base+ "/assets/misspoppinsapp/hmwafter3.svg"}
            alt="Wireframe 1"
            className="mp-wireframe-img"
          />
          <img
            src={base+ "/assets/misspoppinsapp/hmwafter2.svg"}
            alt="Wireframe 2"
            className="mp-wireframe-img"
          />
          <img
            src={base+ "/assets/misspoppinsapp/hmwafter1.svg"}
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

export default MissPoppinsApp;
