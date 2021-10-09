const PricingPlan = require("../models/pricingPlan.model.js");
exports.pricingPlans = (req, res) => {
  PricingPlan.find()
    .then((pricingPlan) => {
      res.send(pricingPlan);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pricingPlan.",
      });
    });
};
