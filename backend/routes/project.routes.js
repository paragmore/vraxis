module.exports = (app) => {
  const authMiddleware = require("../middleware/auth.middleware.js");
  const project = require("../controllers/project.controller.js");

  app.post("/api/upload2d", authMiddleware, project.upload2d);
  app.get("/api/myprojects", authMiddleware, project.findByUserId);
};
