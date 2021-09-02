const Enquiry = require("../models/enquiry.model.js");
exports.create = (req, res) => {
  // Validate request
  console.log(req.body);
  if (
    !req.body.userEmail ||
    !req.body.userPhone ||
    !req.body.subject ||
    !req.body.userName
  ) {
    return res.status(400).send({
      message: "Fields can not be empty",
    });
  }

  const enquiry = new Enquiry({
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    userPhone: req.body.userPhone,
    subject: req.body.subject,
    message: req.body?.message,
  });

  enquiry
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while adding the Enquiry.",
      });
    });
};

exports.findByUserEmail = (req, res) => {
  if (!req.userEmail) {
    return res.json({ message: "Unauthenticated" });
  }
  var userEmail = req.userEmail;
  Enquiry.find({ userEmail })
    .then((enquiries) => {
      res.send(enquiries);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving enquiries.",
      });
    });
};
