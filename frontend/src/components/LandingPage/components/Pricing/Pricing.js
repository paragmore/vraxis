import React, { useState, useEffect } from "react";
import axios from "axios";
import displayRazorpay from "../../../../utils/PaymentGateway";
import PriceCard from "./PriceCard";

function Pricing() {
  const [country, setcountry] = useState({});
  const user = JSON.parse(localStorage.getItem("profile"));
  const [plans, setplans] = useState([]);
  // const plans= []
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
    axios
      .get("/api/pricingPlans/")
      .then((response) => {
        let data = response.data;
        setplans(data);
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
          {plans.map((plan) => {
            return <PriceCard country={country} plan={plan} user={user} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
