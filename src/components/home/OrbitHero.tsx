// src/components/home/OrbitHero.tsx
import React, { useEffect, useRef } from "react";
import { initOrbitScene } from "../../three/orbitScene";

const OrbitHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // init function returns a cleanup
    const cleanup = initOrbitScene(containerRef.current);

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section className="orbit-hero">
      <div ref={containerRef} className="orbit-hero-canvas" />
    </section>
  );
};

export default OrbitHero;
