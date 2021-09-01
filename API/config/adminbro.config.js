module.exports = (app) => {
  const AdminBro = require("admin-bro");
  const mongooseAdminBro = require("@admin-bro/mongoose");
  const expressAdminBro = require("@admin-bro/express");
  const User = require("../models/user.model.js");
  const GoogleUser = require("../models/googleUser.model.js");
  const Project = require("../models/project.model");

  AdminBro.registerAdapter(mongooseAdminBro);
  const AdminBroOptions = {
    resources: [User, Project, GoogleUser],
  };

  const adminBro = new AdminBro(AdminBroOptions);
  const router = expressAdminBro.buildRouter(adminBro);

  app.use(adminBro.options.rootPath, router);
};
