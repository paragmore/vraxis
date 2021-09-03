module.exports = (app) => {
  const user = require("../controllers/user.controller.js");
  const authMiddleware = require("../middleware/auth.middleware.js");

  app.post("/api/signin", user.signin);
  app.post("/api/signup", user.signup);
  app.post("/api/googlesignup", authMiddleware, user.googlesignup);
};
