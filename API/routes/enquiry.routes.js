module.exports = (app) => {
    const enquiry = require("../controllers/enquiry.controller.js");
    const authMiddleware = require("../middleware/auth.middleware.js") 
  
    app.post("/api/enquiry", enquiry.create);
    app.get("/api/myenquirys", authMiddleware, enquiry.findByUserEmail);
  };
  