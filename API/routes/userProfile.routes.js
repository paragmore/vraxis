module.exports = (app) => {
    const authMiddleware = require("../middleware/auth.middleware.js");
    const userProfile = require("../controllers/userProfile.controller.js");

    app.get("/api/myprofile", authMiddleware, userProfile.findProfileByUserId);
  };