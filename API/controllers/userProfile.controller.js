const UserProfile = require("../models/userProfile.model.js");

exports.findProfileByUserId = (req, res) => {
    if (!req.userId) {
      return res.json({ message: "Unauthenticated" });
    }
    var user = req.userId;
    UserProfile.findOne({ user })
      .then((profile) => {
        res.send(profile);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving profile.",
        });
      });
  };