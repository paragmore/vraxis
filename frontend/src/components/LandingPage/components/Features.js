import React from 'react'
import OwlCarousel from "react-owl-carousel";

function Features() {
    return (
        <section id="features" class="features section-padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section-title">
                <h2>
                  VR Axis <span>Features</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <OwlCarousel
              className="owl-theme"
              autoplay
              loop
              nav
              margin={0}
              responsiveClass={true}
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 2,
                },
                1000: {
                  items: 3,
                  loop: false,
                },
              }}
            >
              <div class="feature-item item">
                <div class="icon">
                  <i class="fas fa-robot"></i>
                </div>
                <h3>AI plan recognition</h3>
                <p>
                  Instantly digitize your floor plans using our intelligent
                  neural-network. Compatible with any interior project.
                </p>
              </div>
              <div class="feature-item item">
                <div class="icon">
                  <i class="fas fa-image"></i>
                </div>
                <h3>Realistic VR Models</h3>
                <p>
                  Experience a rich colours, shadows and impressive lights that
                  make the images stunning and bolsters your design.
                </p>
              </div>
              <div class="feature-item item">
                <div class="icon">
                  <i class="fas fa-cube"></i>
                </div>
                <h3>2D/3D Renders</h3>
                <p>
                  Experiment with both 2D and 3D views as you design from
                  various angles. Arrange, edit and apply custom surfaces and
                  materials.
                </p>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    )
}

export default Features
