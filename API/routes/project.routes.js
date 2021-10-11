module.exports = (app) => {
  const authMiddleware = require("../middleware/auth.middleware.js");
  const project = require("../controllers/project.controller.js");

  app.post("/api/upload2d", authMiddleware, project.upload2d);
  app.put("/api/updateproject", authMiddleware, project.updateproject);
  app.get("/api/myprojects", authMiddleware, project.findByUserId);
  app.get("/api/project", project.findById);
  app.get("/api/snapshots", project.findSnapshotsById);
};
