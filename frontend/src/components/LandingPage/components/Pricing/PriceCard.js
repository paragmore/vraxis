import React from "react";
import displayRazorpay from "../../../../utils/PaymentGateway";

function PriceCard({country,plan,user}) {
  return (
    <div class="col-lg-4 col-md-6">
      <div class="pricing-plan">
        <div class="pricing-header">
          <h3>{plan.name}</h3>
        </div>
        <div class="pricing-price">
          <span class="currency">{country.currency}</span>
          <span class="price">{plan.price}</span>
          <span class="period">/yearly</span>
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
          <a
            onClick={() =>
              displayRazorpay({ currency: country.currency, user, plan })
            }
            class="btn btn-1"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
