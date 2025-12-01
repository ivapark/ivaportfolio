// src/pages/MissPoppinsWebsite.tsx
import React from "react";
import "./MissPoppinsWebsite.css";

const MissPoppinsWebsite: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  return (
    <main className="mpw-page">
      {/* HERO */}
      <section className="mpw-hero">
        <div className="mpw-text-section">
          <h1 className="mpw-title">MissPoppins Website Redesign:</h1>

          <h2 className="mpw-subtitle">
          Enhancing User Engagement 
          </h2>

          <div className="mpw-info">
            <p className="mpw-main-text vr-info-line">
              <span className="mpw-info-label">Overview:&nbsp;</span>
              Conducted a SWOT analysis and enhanced the website engagement

            </p>

            <p className="mpw-main-text vr-info-line">
              <span className="mpw-info-label">Role:&nbsp;</span>
              UX Researcher, UX/UI Designer
            </p>

            <p className="mpw-main-text vr-info-line">
              <span className="mpw-info-label">Toolkit:&nbsp;</span>
              Figma, FigJam, Pencil and Paper
            </p>
          </div>
        </div>

        <div className="mpw-image-section">
          <img
            src={base + "/assets/misspoppinswebsite/misspoppinswebsitemain.svg"} // hero image
            alt="misspoppinswebsitemain"
            className="mpw-main-img"
          />
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="analysis-section">
        <div className="analysis-container">
          <div className="analysis-image">
            <img
              src={
                base +
                "/assets/misspoppinswebsite/competitive-analysis.svg"
              }
              alt="Competitive Analysis Table"
            />
          </div>

          <div className="a-text">
            <h1 className="a-title">
              Enhancing UI/UX Through
              <br />
              Competitive Analysis
            </h1>
            <p className="a-description">
              I conducted a SWOT analysis of several companies, evaluating their
              websites and services. This helped us identify our unique features
              and metrics to highlight on our website. While our services extend
              beyond just the product, our focus today is on enhancing the
              website&apos;s UI/UX.
            </p>
          </div>
        </div>
      </section>

      {/* Home Page Layout */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="layout-text">
            <h1 className="layout-title">
              Home Page
              <br />
              A single-page layout
            </h1>
            <p className="layout-description">
              Users can easily scroll through the content without having to
              click through multiple pages
            </p>
          </div>

          <div className="layout-image">
            <img
              src={base + "/assets/misspoppinswebsite/homepage-layout.svg"}
              alt="Home Page Sitemap Diagram"
            />
          </div>
        </div>
      </section>

      {/* Key Improvement Areas */}
      <section className="improvement-section">
        <div className="improvement-container">
          <div className="improvement-text">
            <h1 className="improvement-title">
              Key Areas for Website
              <br />
              Improvement
            </h1>
          </div>

          <div className="improvement-grid">
            <div className="improvement-item">
              <h2 className="improvement-number">01</h2>
              <h3 className="improvement-subtitle">
                Clear Mission and Services
              </h3>
              <p className="improvement-description">
                The current website fails to effectively communicate with users,
                preventing them from understanding our mission and services on a
                single page.
              </p>
            </div>

            <div className="improvement-item">
              <h2 className="improvement-number">02</h2>
              <h3 className="improvement-subtitle">Visualization</h3>
              <p className="improvement-description">
                The current website is text-heavy and lacks visual appeal,
                making it challenging for users to read and comprehend all the
                information.
              </p>
            </div>

            <div className="improvement-item">
              <h2 className="improvement-number">03</h2>
              <h3 className="improvement-subtitle">Professional Image</h3>
              <p className="improvement-description">
                To increase users&apos; trust, it is essential to showcase our
                professional experts and services.
              </p>
            </div>

            <div className="improvement-item">
              <h2 className="improvement-number">04</h2>
              <h3 className="improvement-subtitle">Hooker</h3>
              <p className="improvement-description">
                Finding a Hooker to appeal users to download our app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clear Mission */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-text">
            <h2 className="m-title">Clear Mission</h2>
            <p className="m-bold">
              <strong>
                Having a clear mission on the homepage will give users an
                initial understanding of our services.
              </strong>
            </p>
            <p className="m-description">
              Additionally, displaying a positive image will emotionally
              encourage our users.
            </p>
          </div>

          <div className="mission-images">
            <img
              src={base + "/assets/misspoppinswebsite/joy.svg"}
              alt="Joy Parenting Club website"
              className="m-image"
            />
            <img
              src={base + "/assets/misspoppinswebsite/misspoppins.svg"}
              alt="MissPoppins website"
              className="m-image"
            />
          </div>
        </div>
      </section>

      {/* Competitor Mission */}
      <section className="competitormission-section">
        <div className="competitormission-container">
          <div className="competitormission-text">
            <h2 className="competitormission-title">
              Analyzing Competitor&apos;s
              <br />
              Mission Page
            </h2>
          </div>

          <div className="competitormission-image">
            <img
              src={base + "/assets/misspoppinswebsite/competitormission.svg"}
              alt="Competitor Mission Page"
            />
          </div>
        </div>
      </section>

      {/* Visualization */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="layout-text">
            <h1 className="layout-title">Visualization</h1>
            <p className="layout-description">
              The current website is wordy and lacks visualization. Adding more
              visual elements will make it{" "}
              <strong>
                easier for users to digest information and enhance their overall
                experience.
              </strong>
            </p>
          </div>

          <div className="visualization-image">
            <img
              src={base + "/assets/misspoppinswebsite/visualization.svg"}
              alt="Visualization"
            />
          </div>
        </div>
      </section>

      {/* Competitor Visual Elements */}
      <section className="competitormission-section">
        <div className="competitormission-container">
          <div className="competitormission-text">
            <h2 className="competitormission-title">
              Analyzing Competitor&apos;s
              <br />
              Visual Elements
            </h2>
          </div>

          <div className="competitormission-image">
            <img
              src={base + "/assets/misspoppinswebsite/competitorvisual.svg"}
              alt="Competitor Visual Elements"
            />
          </div>
        </div>
      </section>

      {/* Professional Image */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="layout-text">
            <h1 className="layout-title">
              Professional <br /> Image
            </h1>
            <p className="layout-description">
              Displaying detailed profiles of our parenting coaches will enhance
              our professional image and build trust with users.{" "}
              <strong>
                This transparency will help users feel more confident in the
                expertise and credibility of our team.
              </strong>
            </p>
          </div>

          <div className="visualization-image">
            <img
              src={base + "/assets/misspoppinswebsite/professionalimage.svg"}
              alt="Professional Image"
            />
          </div>
        </div>
      </section>

      {/* Hooker / Download CTA */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="layout-text">
            <h1 className="layout-title">Hook</h1>
            <p className="layout-description">
              When people feel engaged with our website, it is crucial to design
              an engaging and prominently placed &quot;DOWNLOAD&quot; button.
              Similar to a &quot;Join Now&quot; button, this placement{" "}
              <strong>
                makes it intuitive for users to find and access our resources
              </strong>
              , enhancing their overall experience.
            </p>
          </div>

          <div className="visualization-image">
            <img
              src={base + "/assets/misspoppinswebsite/hooker.svg"}
              alt="Download CTA"
            />
          </div>
        </div>
      </section>

      {/* Hooker Location */}
      <section className="competitormission-section">
        <div className="competitormission-container">
          <div className="competitormission-text">
            <h2 className="competitormission-title">Hook Location</h2>
          </div>

          <div className="competitormission-image">
            <img
              src={base + "/assets/misspoppinswebsite/hookerlocation.svg"}
              alt="Hooker Location"
            />
          </div>
        </div>
      </section>

      {/* App Store Visualization Upgrade */}
      <section className="competitormission-section">
        <div className="competitormission-container">
          <div className="competitormission-text">
            <h2 className="competitormission-title">
              Upgrade the Visualization <br /> on the App Store
            </h2>
          </div>

          <div className="competitormission-image">
            <img
              src={base + "/assets/misspoppinswebsite/upgrade3.svg"}
              alt="Upgraded App Store Visualization"
            />
          </div>
        </div>
      </section>

      {/* Final Product Before / After */}
      <section className="final-product-section">
        <div className="final-product-container">
          <h2 className="fp-title">FINAL PRODUCT</h2>

          <div className="fp-labels">
            <h3 className="fp-label fp-label-left">Before</h3>
            <h3 className="fp-label fp-label-right">After</h3>
          </div>

          <div className="fp-grid">
            <div className="fp-before">
              <img
                src={base + "/assets/misspoppinswebsite/final_before.svg"}
                alt="Before page"
                className="fp-before-img"
              />
            </div>

            <div className="fp-after">
              <img
                src={base + "/assets/misspoppinswebsite/final_after1.svg"}
                alt="After mobile screen 1"
                className="fp-phone"
              />
              <img
                src={base + "/assets/misspoppinswebsite/final_after2.svg"}
                alt="After mobile screen 2"
                className="fp-phone"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MissPoppinsWebsite;
