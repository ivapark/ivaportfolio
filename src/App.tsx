// src/App.tsx
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/layout/SiteHeader";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import MissPoppinsApp from "./projects/MissPoppinsApp";

import "./App.css";

const App: React.FC = () => {
  const basename = import.meta.env.BASE_URL || "/";

  return (
    <BrowserRouter basename={basename}>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route
          path="/projects/MissPoppinsApp"
          element={<MissPoppinsApp />}
        />

        {/* later:
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
