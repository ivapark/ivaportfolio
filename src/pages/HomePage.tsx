// src/pages/HomePage.tsx
import * as React from "react";
import ImageCircle3D from "../components/home/ImageCircle3D";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <ImageCircle3D />
      {/* later, other sections: about, projects, etc. */}
    </div>
  );
};

export default HomePage;
