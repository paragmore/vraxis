import React from "react";

function HowItWorks() {
  return (
    <section class="how-it-works section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="section-title">
            <h2>
              How It <span>Works</span>
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="how-it-works-item line-right">
              <div class="step">1</div>
              <h3>Upload a Floor Plan</h3>
              <p>Upload a 2D floor plan for AI based auto recognition </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="how-it-works-item line-right">
              <div class="step">2</div>
              <h3>Recognized & Rendered</h3>
              <p>
                The 2D plan will be automatically recognized and rendered into
                3D model.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="how-it-works-item line-right">
              <div class="step">3</div>
              <h3>Interactive Plan is Ready</h3>
              <p>
                After completion the 3D plan is ready to be customized as per
                user needs.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="how-it-works-item ">
              <div class="step">4</div>
              <h3>Visualize & Share 3D</h3>
              <p>
                Capture your interior work in realistic manner and share the
                plan with clients to drive great sales.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
