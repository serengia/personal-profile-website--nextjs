import React from "react";

import WorksSection from "../WorksSection";
import HeroSection from "../HeroSection";
import AboutSection from "../AboutSection";

function HomePage() {
  return (
    <main className="main">
      <HeroSection />
      <WorksSection />
      <AboutSection />
    </main>
  );
}

export default HomePage;
