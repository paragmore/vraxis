const mongoose = require("mongoose");

const UserProfileSchema = mongoose.Schema(
  {
    user: { type: String, required: true },
    billingPlan: {
      type: String,
      enum: ["FREE", "STARTER", "BUSINESS", "ENTERPRISE"],
      default: "FREE",
      required: true,
    },
    _3dmodelsLeft: { type: Number },
    vrtoursLeft: { type: Number },
    snapshotsLeft: { type: Number },
    panoramasLeft: { type: Number },
    id: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserProfile", UserProfileSchema);
