const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    user: { type: String, required: true },
    _2dPlan: { type: String, required: true },
    _3dmodel: { type: String },
    address: { type: String },
    vrtour: { type: String },
    snapshots: [{ room: String, id: String }],
    panorama: [{ room: String, id: String }],
    id: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
