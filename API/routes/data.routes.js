module.exports = (app) => {
  const data = require("../controllers/data.controller.js");

  app.get("/api/pricingPlans", data.pricingPlans);
};
