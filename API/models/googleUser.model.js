const mongoose = require("mongoose");

const googleUserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    userid: { type: String },
    id: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("GoogleUser", googleUserSchema);
