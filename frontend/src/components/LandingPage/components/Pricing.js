import React, { useState, useEffect } from "react";
import axios from "axios";

function Pricing() {
  const [country, setcountry] = useState({});

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setcountry(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getGeoInfo();
  }, []);
  return (
    <section id="pricing" class="pricing section-padding">
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
                <span class="currency">{country.currency}</span>
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
                <span class="currency">{country.currency}</span>
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
                <span class="currency">{country.currency}</span>
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
                <div
                  class="btn btn-1"
                  onClick={() => window.location.replace("/#contact")}
                >
                  Contact Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
