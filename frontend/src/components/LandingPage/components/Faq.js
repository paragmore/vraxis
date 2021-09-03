import React from "react";

function Faq() {
  return (
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
                      You can use 3D floor plans to share the “big picture” with
                      clients, as well as the details that make your design
                      unique. A 3D floor plan helps you bring your home design
                      project to life and close your deals faster.
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
                <div class="collapse" id="collapse-02" data-parent="#accordion">
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
                <div class="collapse" id="collapse-03" data-parent="#accordion">
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
                <div class="collapse" id="collapse-04" data-parent="#accordion">
                  <div class="accordion-body">
                    <p>
                      VR axis provides the best 2d plan recognition with AI
                      power and generates photorealistic images to help your
                      clients project themselves and convince them more quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
