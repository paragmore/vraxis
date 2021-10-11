const mongoose = require("mongoose");

const Payment = mongoose.Schema(
  {
    razorpay_payment_id: { type: String, required: true },
    razorpay_order_id: { type: String, required: true },
    razorpay_signature: { type: String, required: true },
    razorpay_signature: { type: String, required: true },
    billingPlan: {
      type: String,
      enum: ["FREE", "STARTER", "BUSINESS", "ENTERPRISE"],
      default: "FREE",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", Payment);
