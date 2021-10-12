import React from "react";
import displayRazorpay from "../../../../utils/PaymentGateway";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function PriceCard({ country, plan, user }) {
  const alert = useAlert();
  const dispatch = useDispatch();
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("profile"))?.token;
  return (
    <div class="col-lg-4 col-md-6">
      <div class="pricing-plan">
        <div class="pricing-header">
          <h3>{plan.name}</h3>
        </div>
        <div class="pricing-price">
          <span class="currency">{country.currency}</span>
          <span class="price">{plan.price}</span>
          <span class="period">/project</span>
        </div>
        <div class="pricing-body">
          <ul>
            {plan.features.map((feature) => {
              return (
                <li>
                  <i class="fas fa-check"></i>
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
        <div class="pricing-footer">
          <div
            onClick={() => {
              if (token) {
                displayRazorpay(
                  { currency: country.currency, user, plan },
                  alert,
                  history
                );
              }else{
                history.push({pathname:"/auth",redirect:"/pricing"});
              }
            }}
            class="btn btn-1"
          >
            {history.location.pathname==="/pricing"?"Buy Now":"Get Started"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
