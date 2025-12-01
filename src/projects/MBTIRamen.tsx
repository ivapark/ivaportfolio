import React from "react";
import "./MBTIRamen.css";

const MBTIRamen: React.FC = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <main className="mbti-page">
      {/* Hero Section */}
      <section className="mbti-container">
        <div className="mbti-text-section">
          <h1 className="mbti-title">MBTI Ramen</h1>

          <h2 className="mbti-subtitle">
            Matching Personality to a Korean Instant Noodle
          </h2>

          <div className="mbti-info">
            <p className="mbti-main-text mbti-info-line">
              <span style={{ fontWeight: 600 }}>Overview:</span>
              <span className="mbti-main-text">
                {" "}
                An interactive web-based personality quiz that guides users
                through a short ramen-themed story and matches them to a Korean
                instant ramen based on an MBTI-style profile.
              </span>
            </p>

            <p className="mbti-main-text mbti-info-line">
              <span style={{ fontWeight: 600 }}>Role:</span>
              <span className="mbti-main-text">
                {" "}
                Front-End, Back-End, UX/UI Designer
              </span>
            </p>

            <p className="mbti-main-text mbti-info-line">
              <span style={{ fontWeight: 600 }}>Toolkit:</span>
              <span className="mbti-main-text">
                {" "}
                React, JavaScript, React Router, CSS
              </span>
            </p>
          </div>
        </div>

        <div className="mbti-image-section">
          <img
            src={base + "/assets/MBTIRamen/MBTIRamenmain.svg"}
            alt="MBTI Ramen result UI on a laptop"
            className="mbti-main-img"
          />
        </div>
      </section>

      {/* ABOUT THE PROJECT */}
      <section className="mbti-about-section">
        <h2 className="mbti-section-title">About the Project</h2>

        <div className="mbti-about-inner">
          <div className="mbti-about-image">
            <img
              src={base + "/assets/MBTIRamen/iloveramen.svg"}
              alt="Collage of ramen photos from my camera roll"
            />
          </div>

          <div className="mbti-about-text">
            <p>
              I really love ramen. The image on the left is literally what my
              camera roll looks like when I search for “ramen.”
            </p>
            <p>
              For this project, I turned a classic MBTI quiz into something more
              narrative and playful. Instead of answering generic questions,
              users move through a short story about visiting a hidden ramen
              shop. Each screen is a scene in that story, and every question
              represents how they would act in that moment.
            </p>
            <p>
              The concept came from how strongly I associate personality with
              different Korean instant ramens. Each brand feels like its own
              character, so it felt natural to map MBTI types to specific
              flavors and treat the final result like a character reveal.
            </p>
          </div>
        </div>
      </section>

      {/* HOW THE QUIZ LOGIC WORKS */}
      <section className="mbti-logic-section">
        <h2 className="mbti-section-title">How The Quiz Logic Works</h2>

        <div className="mbti-logic-inner">
          <div className="mbti-logic-text">
            <p>
              Each answer option is tagged with one or more MBTI traits (E/I,
              S/N, T/F, J/P).
            </p>

            <p>In code, I keep an <code>mbtiScores</code> object with counters for all 8 letters.</p>

            <ul>
              <li>
                When a user selects an answer, the handler loops through that
                option&apos;s <code>traits</code> array and increments the matching letters
                in <code>mbtiScores</code>.
              </li>
              <li>
                After the last question, <code>calculateMBTI</code> compares the scores
                for each pair:
                <ul>
                  <li>E vs I</li>
                  <li>S vs N</li>
                  <li>T vs F</li>
                  <li>J vs P</li>
                </ul>
              </li>
              <li>
                For every pair, whichever letter has the higher score is chosen,
                and the four letters are concatenated into the final MBTI type
                (for example, ISTJ or ENFP).
              </li>
            </ul>

            <p>
              That final MBTI string is then used as a key to look up all of the
              information for that type in a <code>ramenTypes</code> object.
            </p>
          </div>

          <div className="mbti-logic-image">
            <img
              src={base + "/assets/MBTIRamen/mbtikey.svg"}
              alt="MBTI personality types key"
            />
          </div>
        </div>
      </section>

      {/* HOW THE RAMEN RESULT IS CHOSEN */}
      <section className="mbti-result-section">
        <h2 className="mbti-section-title">How the Ramen Result is Chosen</h2>

        <div className="mbti-result-body">
          <p>
            The <code>ramenTypes</code> object stores everything tied to each MBTI
            type:
          </p>
          <ul>
            <li>Ramen name and image</li>
            <li>&quot;Best paired with&quot; and &quot;Least compatible with&quot; ramen types</li>
            <li>Six personality traits (three strengths and three weaknesses)</li>
          </ul>

          <p>
            For the mapping, I treated every ramen flavor as a personality.
            Here are a few examples:
          </p>

          <ul className="mbti-ramen-examples">
            <li>
              <strong>ISTJ – Shin Ramyun</strong>
              <br />
              A dependable, no-nonsense classic: straightforward, structured,
              and reliably spicy, just like an ISTJ&apos;s steady energy.
            </li>
            <li>
              <strong>INFP – Potato Ramen</strong>
              <br />
              Earthy, nostalgic, and oddly emotional for an instant noodle.
              Potato Ramen feels like an idealistic INFP—soft, comforting, and a
              little dramatic in the best way.
            </li>
            <li>
              <strong>ESTJ – Buldak</strong>
              <br />
              Intense, structured, and unapologetically strong. Buldak has ESTJ
              vibes: clear expectations and a &quot;you knew what you signed up
              for&quot; attitude.
            </li>
            <li>
              <strong>ENFP – Jjapaguri</strong>
              <br />
              A chaotic fusion that somehow works. Jjapaguri feels like inventive
              ENFP energy—mixing things that shouldn&apos;t go together and turning
              them into a main-character moment.
            </li>
          </ul>
        </div>

        <div className="mbti-result-buttons">
          <a
            href="https://github.com/ivapark/MBTIramen"
            className="mbti-cta-button"
          >
            View My Github
          </a>
          <a
            href="https://ivapark.github.io/MBTIramen/"
            className="mbti-cta-button mbti-cta-button--secondary"
          >
            Take the Quiz!
          </a>
        </div>
      </section>
    </main>
  );
};

export default MBTIRamen;
