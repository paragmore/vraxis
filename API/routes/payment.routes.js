module.exports = (app) => {
  const authMiddleware = require("../middleware/auth.middleware.js");
  const payment = require("../controllers/payment.controller.js");

  app.post("/api/razorpay", authMiddleware, payment.pay);
  app.post("/api/paySuccess", authMiddleware, payment.paySuccess);
  app.get("/api/payInfo", authMiddleware, payment.paymentInfo);
};
