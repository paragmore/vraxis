import React from "react";
import heroImage from "../../../assets/rm2.png";

function Home() {
  return (
    <section class="home d-flex align-items-center">
      <div class="effect-wrap">
        <i class="fas fa-plus effect effect-1"></i>
        <i class="fas fa-plus effect effect-2"></i>
        <i class="fas fa-circle-notch effect effect-3"></i>
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5">
            <div class="home-text">
              <h1>Visualize 3D floor plans</h1>
              <p>
                Create photorealistic images to help your clients project
                themselves and convince them more quickly.
              </p>
              <div class="home-btn">
                <div
                  onClick={() => window.location.replace("/#contact")}
                  class="btn btn-1"
                >
                  Start free trial
                </div>
                <button type="button" class="btn btn-1 video-play-btn">
                  <i class="fas fa-play"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-7 text-center">
            <div class="home-img">
              <div class="circle"></div>
              <img src={heroImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
