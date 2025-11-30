// src/App.tsx
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/layout/SiteHeader";
import ScrollToTop from "./components/layout/ScrollToTop";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";

import MissPoppinsApp from "./projects/MissPoppinsApp";
import MissPoppinsWebsite from "./projects/MissPoppinsWebsite";
import MissPoppinsDashboard from "./projects/MissPoppinsDashboard";
import MLasl from "./projects/MLasl";
import MLweb from "./projects/MLweb";
import BipartitieMatching from "./projects/BipartiteMatching";
import VRReaching from "./projects/VRReaching";
import MBTIRamen from "./projects/MBTIRamen";
import NeroFilm from "./projects/NeroFilm";






import "./App.css";

const App: React.FC = () => {
  const basename = import.meta.env.BASE_URL || "/";

  return (
    <BrowserRouter basename={basename}>
      <SiteHeader />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/projects/MissPoppinsApp" element={<MissPoppinsApp />} />
        <Route path="/projects/MissPoppinsWebsite" element={<MissPoppinsWebsite />} />
        <Route path="/projects/MissPoppinsDashboard" element={<MissPoppinsDashboard />} />
        <Route path="/projects/MLasl" element={<MLasl />} />
        <Route path="/projects/MLweb" element={<MLweb />} />
        <Route path="/projects/BipartiteMatching" element={<BipartitieMatching />} />
        <Route path="/projects/VRReaching" element={<VRReaching />} />
        <Route path="/projects/MBTIRamen" element={<MBTIRamen />} />
        <Route path="/projects/NeroFilm" element={<NeroFilm />} />




        {/* later:
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
