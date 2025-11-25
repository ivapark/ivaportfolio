// src/components/home/ImageCircle3D.tsx
import React, { useRef, useEffect, useState, useMemo } from "react";
import "./ImageCircle3D.css";

const CARD_COUNT = 12;
const RADIUS = 300;

type Vec3 = { x: number; y: number; z: number };

type ProjectCard = {
  id: number;
  color: string;
  label: string;       // project title
  role: string;        // e.g. "UIUX Designer"
  description: string; // paragraph text
  link: string;        // “Learn more” link
  imgSrc: string;      // orbit card image
  heroImgSrc: string;  // big mockup image in modal
  tools: string[];     // e.g. ["Figma", "FigJam"]
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

// --- 3 rings in 3D space ---
function computeRingPositions(radius: number): Vec3[] {
  const positions: Vec3[] = [];
  const ringCounts = [4, 4, 4];
  const topElevation = radius * 0.6;
  const middleElevation = 0;
  const bottomElevation = radius * 0.6;
  const yLevels = [-topElevation, middleElevation, bottomElevation];

  ringCounts.forEach((count, ringIndex) => {
    const y = yLevels[ringIndex];
    const horizontalRadius = Math.sqrt(radius ** 2 - y ** 2);

    let baseOffset = 0;
    if (ringIndex === 1) {
      // stagger middle ring
      baseOffset = (Math.PI * 2) / (2 * count);
    }

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + baseOffset;
      positions.push({
        x: Math.cos(angle) * horizontalRadius,
        y,
        z: Math.sin(angle) * horizontalRadius,
      });
    }
  });

  return positions;
}

// rotate so card faces outward from the sphere center
function getCardRotation(pos: Vec3) {
  const outward = { ...pos };
  const length = Math.sqrt(
    outward.x ** 2 + outward.y ** 2 + outward.z ** 2
  );
  outward.x /= length;
  outward.y /= length;
  outward.z /= length;

  const rotY = (Math.atan2(outward.x, outward.z) * 180) / Math.PI;
  const rotX = (Math.asin(outward.y) * 180) / Math.PI;

  return { rotX, rotY };
}

const ImageCircle3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // rotation of the whole sphere
  const [rotation, setRotation] = useState({ x: -10, y: 0 });
  const [activeProject, setActiveProject] = useState<ProjectCard | null>(null);

  // base path for GitHub Pages ("/ivaportfolio/") or "/" locally
  const assetBase = import.meta.env.BASE_URL;

  const projects: ProjectCard[] = useMemo(
    () =>
      Array.from({ length: CARD_COUNT }, (_, i) => {
        const index = i + 1;
        const hue = (i * (360 / CARD_COUNT)) % 360;

        // you can customize more of these later per project
        const project: ProjectCard = {
          id: i,
          color: `hsl(${hue}, 70%, 60%)`,
          label:
            index === 1
              ? "MissPoppins App Redesign"
              : `Project ${index}`,
          role: index === 1 ? "UIUX Designer" : "Designer",
          description:
            index === 1
              ? "Reworked the parent-facing mobile app flows (booking, session tracking, messaging) to reduce confusion and make it easier to manage coaching sessions."
              : "Short description of this project. Replace with real content about your role, process, and impact.",
          link: `/projects/${index}`,
          // IMPORTANT: prefix with assetBase, no leading slash before assets
          imgSrc: `${assetBase}assets/images/orbit/img${index}.svg`,
          heroImgSrc: `${assetBase}assets/images/orbit/img${index}.svg`,
          tools:
            index === 1
              ? ["Figma", "FigJam"]
              : ["Figma"],
        };

        return project;
      }),
    [assetBase]
  );

  const positions = useMemo(() => computeRingPositions(RADIUS), []);

  // trackpad / wheel → spin around Y *and* tilt in X
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (activeProject) return;
      e.preventDefault();

      const { deltaX, deltaY } = e;

      setRotation((prev) => ({
        x: clamp(prev.x + deltaY * 0.2, -80, 80), // up/down tilt
        y: prev.y + deltaX * 0.2,                 // left/right spin
      }));
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [activeProject]);

  return (
    <div ref={containerRef} className="orbit-root">
      <div
        className="orbit-3d-wrapper"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          pointerEvents: activeProject ? "none" : "auto",
        }}
      >
        {projects.map((project, idx) => {
          const pos = positions[idx];
          const cardRot = getCardRotation(pos);

          return (
            <div
              key={project.id}
              className="orbit-card-wrapper"
              style={{
                transform: `translate3d(${pos.x}px, ${pos.y}px, ${
                  pos.z
                }px) rotateY(${cardRot.rotY + 180}deg) rotateX(${
                  cardRot.rotX
                }deg)`,
              }}
              onClick={() => {
                console.log("CLICK", project.id, project.label);
                setActiveProject(project);
              }}
            >
              <div className="orbit-card">
                {/* Front face (outward) */}
                <div className="orbit-card-face">
                  <img
                    src={project.imgSrc}
                    alt={project.label}
                    className="orbit-card-image"
                  />
                </div>

                {/* Back face (inward, for when you're inside the sphere) */}
                <div className="orbit-card-back">
                  <img
                    src={project.imgSrc}
                    alt={project.label}
                    className="orbit-card-image"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!activeProject && (
        <div className="orbit-hint">
          <span className="orbit-hint-text">
            Scroll with two fingers & Click a project to learn more
            <br />
            <span style={{ marginLeft: 32 }}>
              Website coded with React + Typescript!
            </span>
          </span>
        </div>
      )}

      {activeProject && (
        <div className="orbit-overlay">
          <div className="orbit-modal">
            {/* close button in the top-right of the card */}
            <button
              type="button"
              className="orbit-modal-close"
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>

            <div className="orbit-modal-grid">
              {/* LEFT: text block */}
              <div className="orbit-modal-left">
                <h2 className="orbit-modal-title">
                  {activeProject.label}
                </h2>

                <div className="orbit-modal-role">
                  {activeProject.role}
                </div>

                <p className="orbit-modal-body">
                  {activeProject.description}
                </p>

                {activeProject.tools.length > 0 && (
                  <div className="orbit-modal-tools">
                    {activeProject.tools.map((tool) => (
                      <span key={tool} className="orbit-chip">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  className="orbit-modal-learn"
                  onClick={() => {
                    window.location.href = activeProject.link;
                  }}
                >
                  Learn More →
                </button>
              </div>

              {/* RIGHT: hero image / phone mockup */}
              <div className="orbit-modal-right">
                <img
                  src={activeProject.heroImgSrc || activeProject.imgSrc}
                  alt={activeProject.label}
                  className="orbit-modal-hero"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCircle3D;
