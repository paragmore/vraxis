import React from "react";
import "./LandingPage.css";
import heroImage from "../../assets/rm2.png";
import OwlCarousel from "react-owl-carousel";

function LandingPage() {
  return (
    <div>
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
                  <a href="" class="btn btn-1">
                    Start free trial
                  </a>
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

      <section class="features section-padding">
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

      {/* How it works */}

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

      {/* Pricing Section */}

      <section  class="pricing section-padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section-title">
                <h2>
                  Pricing
                  <span> Plan</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="pricing-plan">
                <div class="pricing-header">
                  <h3>Starter</h3>
                </div>
                <div class="pricing-price">
                  <span class="currency">₹</span>
                  <span class="price">799</span>
                  <span class="period">/yearly</span>
                </div>
                <div class="pricing-body">
                  <ul>
                    <li>
                      <i class="fas fa-check"></i>2 floor plan recognitions
                    </li>
                    <li>
                      <i class="fas fa-check"></i>
                      Unlimited 3D model shares
                    </li>
                    <li>
                      <i class="fas fa-check"></i>
                      E-mail notifications on project render
                    </li>
                    <li>
                      <i class="fas fa-check"></i>
                      Realistic and fully furnished 3D Models
                    </li>
                  </ul>
                </div>
                <div class="pricing-footer">
                  <a href="#" class="btn btn-1">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="pricing-plan">
                <div class="pricing-header">
                  <h3>Business</h3>
                </div>
                <div class="pricing-price">
                  <span class="currency">₹</span>
                  <span class="price">1999</span>
                  <span class="period">/yearly</span>
                </div>
                <div class="pricing-body">
                  <ul>
                    <li>
                      <i class="fas fa-check"></i>
                      20 floor plan recognitions
                    </li>
                    <li class="plus">
                      <i class="fas fa-check"></i>
                      Everything in Starter, plus:
                    </li>
                    <li>
                      <i class="fas fa-check"></i>
                      Customize the 3D models as per need.
                    </li>
                    <li>
                      <i class="fas fa-check"></i>
                      24/7 Assitance by the team
                    </li>

                    <li>
                      <i class="fas fa-check"></i>
                      Priority in project renders.
                    </li>
                  </ul>
                </div>
                <div class="pricing-footer">
                  <a href="#" class="btn btn-1">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="pricing-plan">
                <div class="pricing-header">
                  <h3>Enterprise</h3>
                </div>
                <div class="pricing-price">
                  <span class="currency">₹</span>
                  <span class="price">4999</span>
                  <span class="period">/yearly</span>
                </div>
                <div class="pricing-body">
                  <ul>
                    <li>
                      <i class="fas fa-check"></i>
                      Unlimited floor plan recognitions
                    </li>
                    <li class="plus">
                      <i class="fas fa-check"></i>Everything in Business, plus:
                    </li>
                    <li>
                      <i class="fas fa-check"></i>
                      Highest priority with least wait time.
                    </li>
                    <li>
                      <i class="fas fa-check"></i>
                      Snapshot feature to get photorealistic results
                    </li>
                    <li>
                      <i class="fas fa-check"></i>
                      Complete catalog access with over 4000 custom interior
                      items.
                    </li>
                    <li>
                      <i class="fas fa-check"></i>
                      VR tour video made with realistic lighting.
                    </li>
                  </ul>
                </div>
                <div class="pricing-footer">
                  <a href="#" class="btn btn-1">
                    Contact Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}

      <section class="faq section-padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section-title">
                <h2>
                  Frequently <span>Asked</span> Questions.
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div id="accordion">
                <div class="accordion-item">
                  <div
                    class="accordion-header"
                    data-toggle="collapse"
                    data-target="#collapse-01"
                  >
                    <h3>Why Do You Need 3D Floor Plans?</h3>
                  </div>
                  <div
                    class="collapse show"
                    id="collapse-01"
                    data-parent="#accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        You can use 3D floor plans to share the “big picture”
                        with clients, as well as the details that make your
                        design unique. A 3D floor plan helps you bring your home
                        design project to life and close your deals faster.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <div
                    class="accordion-header collapsed"
                    data-toggle="collapse"
                    data-target="#collapse-02"
                  >
                    <h3>What Is Usual AI Recognition and Render Time?</h3>
                  </div>
                  <div
                    class="collapse"
                    id="collapse-02"
                    data-parent="#accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        It usually takes about 15 minutes for the AI to complete
                        the recognition. But complete time depends upon server
                        traffic and priority queue.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <div
                    class="accordion-header collapsed"
                    data-toggle="collapse"
                    data-target="#collapse-03"
                  >
                    <h3>Can I Share and Collaborate the 3D Floor Plans?</h3>
                  </div>
                  <div
                    class="collapse"
                    id="collapse-03"
                    data-parent="#accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        Yes you can share the 3D plans with your clients with a
                        easy share link. Also you can collaborate and edit the
                        plans with your colleagues.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <div
                    class="accordion-header collapsed"
                    data-toggle="collapse"
                    data-target="#collapse-04"
                  >
                    <h3>Why VR Axis?</h3>
                  </div>
                  <div
                    class="collapse"
                    id="collapse-04"
                    data-parent="#accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        VR axis provides the best 2d plan recognition with AI
                        power and generates photorealistic images to help your
                        clients project themselves and convince them more
                        quickly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
