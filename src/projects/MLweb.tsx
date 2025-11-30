import React from "react";
import "./MLweb.css";

const MLweb: React.FC = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <main className="mlweb-page">
      {/* Hero Section */}
      <section className="mlweb-container">
        <div className="mlweb-text-section">
          <h1 className="mlweb-title">ASL Video Call</h1>

          <h2 className="mlweb-subtitle">
            Real-time ASL video calling with on-screen sign captions
          </h2>

          <div className="mlweb-info">
            <p className="mlweb-main-text mlweb-info-line">
              <span style={{ fontWeight: 500 }}>Overview:</span>
              <span className="mlweb-main-text">
                {" "}
                Prototype video-calling platform where one participant can sign
                a set of ASL words and the system automatically displays the
                recognized words as live captions on screen.
              </span>
            </p>

            <p className="mlweb-main-text mlweb-info-line">
              <span style={{ fontWeight: 500 }}>Role:</span>
              <span className="mlweb-main-text">
                {" "}
                Front-End Developer, Back-End Developer, UX/UI Designer
              </span>
            </p>

            <p className="mlweb-main-text mlweb-info-line">
              <span style={{ fontWeight: 500 }}>Toolkit:</span>
              <span className="mlweb-main-text">
                {" "}
                React, TypeScript, WebRTC, TensorFlow.js, MediaPipe, HTML, CSS,
                JavaScript, Figma
              </span>
            </p>
          </div>
        </div>

        <div className="mlweb-image-section">
          <img
            src={base + "/assets/MLweb/MLwebmain.svg"}
            alt="ASL Video Call UI"
            className="mlweb-main-img"
          />
        </div>
      </section>

      {/* About the Project */}
      <section className="mlweb-about-section">
        <h2 className="mlweb-title1 mlweb-about-heading">About the Project</h2>

        <div className="mlweb-about-body">
          <p className="mlweb-main-text1">
            This project is a prototype video-calling platform where one
            participant can sign a small set of ASL words and the system
            automatically displays the recognized words as on-screen captions in
            real time. When a call starts, each user’s webcam stream is handled
            via WebRTC and mirrored in a React interface. On the signer’s side,
            I run a TensorFlow.js model directly on the video frames in the
            browser so there’s no extra latency from server-side inference.
          </p>

          <p className="mlweb-main-text1">
            To train the model, I recorded short video clips of each target
            word, extracted pose and hand landmarks using a keypoint detection
            library, and converted each clip into a temporal sequence of
            coordinates. In TensorFlow.js, I built a small sequence model that
            takes a sliding window of frames (a few hundred milliseconds of
            motion), normalizes the keypoints, and learns to classify them into
            one of the ASL vocabulary classes. After training and validating in
            TensorFlow.js, I exported the model and loaded it in the client so
            it can run entirely on-device.
          </p>

          <p className="mlweb-main-text1 mlweb-about-list-intro">
            During a call, the browser continuously:
          </p>

          <ol className="mlweb-about-list">
            <li>Reads frames from the user’s webcam stream.</li>
            <li>Extracts pose/hand landmarks for each frame.</li>
            <li>
              Buffers a short sequence and feeds it into the TensorFlow.js
              model.
            </li>
            <li>Outputs a probability distribution over the known signs.</li>
            <li>
              Displays the most likely word (above a confidence threshold) as a
              live caption in the UI and logs it in a simple “transcript” area.
            </li>
          </ol>

          <p className="mlweb-main-text1">
            Because everything runs in the browser with TensorFlow.js, the
            system feels responsive and preserves privacy, since raw video never
            has to leave the user’s machine for recognition. The project shows
            how an ASL assistant that recognizes individual words can be layered
            on top of typical video calls and creates a foundation for expanding
            to a larger vocabulary and more complex sentence-based interaction
            in the future.
          </p>
        </div>
      </section>

      {/* How is the Model Built? */}
      <section className="mlweb-model-section">
        <h2 className="mlweb-title1 mlweb-model-heading">
          How is the Model Built?
        </h2>

        <div className="mlweb-model-body">
          <p className="mlweb-main-text1">
            For dynamic ASL recognition, I followed a landmark-plus-LSTM
            approach similar to Thong et al. (2024), who use MediaPipe keypoints
            and LSTMs for real-time sign translation. Each recording is
            converted into a sequence of hand-only landmarks: from each frame I
            extract 42 hand joints (both hands × 21 landmarks) as 3D
            coordinates, then convert them to wrist-centered coordinates by
            subtracting the wrist position from every joint. Sequences are
            padded or truncated to 30 frames, so each example has shape
            [30, 126] (30 time steps × 126 features).
          </p>

          <p className="mlweb-main-text1">
            These sequences are fed into a stacked LSTM classifier: three LSTM
            layers (256 → 256 → 128 units) followed by two fully connected
            layers and a final softmax layer that outputs a probability
            distribution over sign classes. The model is trained with
            categorical cross-entropy, which penalizes the model whenever it
            assigns low probability to the correct class, and optimized with
            Adam (learning rate 1e-4), which adaptively adjusts the size of each
            weight update for faster, more stable convergence. I trained with
            mini-batches (size 8), monitored validation accuracy, and used early
            stopping to keep the model that performs best on held-out data.
          </p>
        </div>
      </section>

      {/* Demo */}
      <section className="mlweb-demo-section">
        <h2 className="mlweb-title1">Demo</h2>
        <p className="mlweb-demo-text">
          The final product is still in progress, but in the meantime here&apos;s
          a short demo of the words the model can currently recognize!
        </p>

        <div className="mlweb-demo-frame">
          <video className="mlweb-demo-video" controls>
            <source src={base + "/assets/MLweb/MLweb.MOV"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mlweb-demo-buttons">
          <a
            href="https://www.figma.com/design/dfzJhIHanPiQT4nwJIcQbo/Shuwa--Gesturetalk--High-fidelity-Web-Wireframe?node-id=26-13&t=3HKio0Cw85rOAMr4-1" 
            target="_blank"
            rel="noopener noreferrer"
            className="mlweb-demo-button"
          >
            View Figma
          </a>
          <a
            href="https://github.com/agile-students-fall2025/4-final-gesturetalk" 
            target="_blank"
            rel="noopener noreferrer"
            className="mlweb-demo-button"
          >
            View Github
          </a>
        </div>
      </section>

      
    </main>
  );
};

export default MLweb;
