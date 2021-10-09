const mongoose = require("mongoose");

const PricingPlanSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    features: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PricingPlan", PricingPlanSchema);
