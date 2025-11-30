import React, { useEffect, useRef, useState } from "react";
import "./AboutPage.css";

const AboutPage: React.FC = () => {
  const assetBase = import.meta.env.BASE_URL;

  const [heroVisible, setHeroVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);

  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);

  // Observe all sections so their animations retrigger on scroll
  useEffect(() => {
    const heroEl = heroRef.current;
    const aboutEl = aboutRef.current;
    const skillsEl = skillsRef.current;

    if (!heroEl && !aboutEl && !skillsEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroEl) {
            setHeroVisible(entry.isIntersecting);
          } else if (entry.target === aboutEl) {
            setAboutVisible(entry.isIntersecting);
          } else if (entry.target === skillsEl) {
            setSkillsVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroEl) observer.observe(heroEl);
    if (aboutEl) observer.observe(aboutEl);
    if (skillsEl) observer.observe(skillsEl);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">
      {/* HERO */}
      <section
        ref={heroRef}
        className={`about-hero ${heroVisible ? "about-hero--visible" : ""}`}
      >
        <div className="intro-text">
          <p className="role-line">
            Product Designer | UX Research &amp; Design | Bridging Psychology +
            Technology
          </p>

          <h1 className="hi">Hi, I’m Iva</h1>

          <p className="description">
            Human-centered designer combining behavioral science and
            engineering to craft data-driven, accessible digital experiences.
          </p>

          <div className="hero-footer">
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/ivapark/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <img
                  src={`${assetBase}assets/images/about/linkedin.svg`}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://github.com/ivapark"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <img
                  src={`${assetBase}assets/images/about/github.svg`}
                  alt="GitHub"
                />
              </a>
              <a href="mailto:cp3588@nyu.edu" className="social-icon">
                <img
                  src={`${assetBase}assets/images/about/gmail.svg`}
                  alt="Email"
                />
              </a>
            </div>

            <a href="#about" className="learn-more">
              → Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section
        id="about"
        ref={aboutRef}
        className={`about-section ${
          aboutVisible ? "about-section--visible" : ""
        }`}
      >
        <div className="about-section-inner">
          <div className="about-copy">
            <h2>About Me</h2>
            <p>
              My work spans startups and research projects, where I combine
              technical expertise with a deep understanding of human behavior to
              craft impactful solutions.
            </p>
            <p>
              I’m passionate about bridging technology and humanity,
              particularly in areas like perception and action, and I’m
              dedicated to developing accessible and meaningful innovations.
            </p>
          </div>

          <div className="about-photo-wrapper">
            <img
              className="about-photo"
              src={`${assetBase}assets/images/about/about-photo.svg`}
              alt="Iva walking at night on a New York street"
            />
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        ref={skillsRef}
        className={`skills-section ${
          skillsVisible ? "skills-section--visible" : ""
        }`}
      >
        <div className="skills-inner">
          {/* Applications */}
          <div className="skills-column">
            <h3 className="skills-heading">Application</h3>

            <div className="skills-grid">
              <div className="skill-card">
                <img
                  src={`${assetBase}assets/images/about/figma.svg`}
                  alt="Figma"
                  className="skill-icon"
                />
                <span className="skill-card-label">Figma</span>
              </div>

              <div className="skill-card">
                <img
                  src={`${assetBase}assets/images/about/indesign.svg`}
                  alt="Indesign"
                  className="skill-icon"
                />
                <span className="skill-card-label">Indesign</span>
              </div>

              <div className="skill-card">
                <img
                  src={`${assetBase}assets/images/about/xd.svg`}
                  alt="Adobe XD"
                  className="skill-icon"
                />
                <span className="skill-card-label">Adobe XD</span>
              </div>

              <div className="skill-card">
                <img
                  src={`${assetBase}assets/images/about/procreate.svg`}
                  alt="Procreate"
                  className="skill-icon"
                />
                <span className="skill-card-label">Procreate</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="skills-column">
            <h3 className="skills-heading">Language</h3>

            <div className="skills-grid">
              <div className="skill-card">
                <img
                  src={`${assetBase}assets/images/about/css.svg`}
                  alt="CSS"
                  className="skill-icon"
                />
                <span className="skill-card-label">CSS</span>
              </div>

              <div className="skill-card">
                <img
                  src={`${assetBase}assets/images/about/html.svg`}
                  alt="HTML"
                  className="skill-icon"
                />
                <span className="skill-card-label">HTML</span>
              </div>

              <div className="skill-card">
                <img
                  src={`${assetBase}assets/images/about/python.svg`}
                  alt="Python"
                  className="skill-icon"
                />
                <span className="skill-card-label">Python</span>
              </div>

              <div className="skill-card">
                <img
                  src={`${assetBase}assets/images/about/javascript.svg`}
                  alt="Python"
                  className="skill-icon"
                />
                <span className="skill-card-label">JavaScript</span>
              </div>
            </div>

            <a
              href={`${assetBase}Work`}
              className="skills-cta"
            >
              → Explore My Work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
