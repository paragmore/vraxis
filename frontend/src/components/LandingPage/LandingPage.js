import React, { useState, useEffect } from "react";
import "./LandingPage.css";

import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing/Pricing";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Home from "./components/Home";


function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Home />
      <Features />
      <HowItWorks />
      <Pricing />
      <Faq />
      <Contact />

      <div class="video-popup">
        <div class="video-popup-inner">
          <i class="fas fa-times video-popup-close"></i>
          <div class="iframe-box">
            <iframe
              id="player_1"
              src="https://www.youtube.com/embed/kz165f1g8-E"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
