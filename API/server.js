const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const admin = require("./config/adminbro.config.js");
const cors = require("cors");
const dbConfig = require("./config/database.config.js");
const authroutes = require("./routes/auth.routes.js");
const projectroutes = require("./routes/project.routes.js");
const enquiryroutes = require("./routes/enquiry.routes.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully Connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the api" });
});

authroutes(app);
projectroutes(app);
enquiryroutes(app);
admin(app);
app.listen(PORT, () => {
  console.log("Server running on port:" + PORT);
});
