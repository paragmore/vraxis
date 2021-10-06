const Project = require("../models/project.model.js");
const AWS = require("aws-sdk");
const FileType = require("file-type");
const multiparty = require("multiparty");
const fs = require("fs");
const uuid = require("uuid");
const nodemailer = require("nodemailer");

exports.create = (req, res) => {
  // Validate request
  console.log(req.body);
  if (!req.body.influencerName) {
    return res.status(400).send({
      message: "Influencer fields can not be empty",
    });
  }
};

let transporter = nodemailer.createTransport({
  SES: new AWS.SES({
    apiVersion: "2010-12-01",
  }),
});

AWS.config.update({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
});

const s3 = new AWS.S3({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
});

const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: process.env.ACL,
    Body: buffer,
    Bucket: process.env.Bucket,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`,
  };
  return s3.upload(params).promise();
};

exports.updateproject = (req, res) => {
  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }
  const { name, address } = req.body;
  var user = req.userId;
  Project.findOneAndUpdate({ user }, { name, address })
    .then((project) => {
      res.send(project);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while saving project.",
      });
    });
};

exports.upload2d = (req, res) => {
  const form = new multiparty.Form();
  form.parse(req, async (error, fields, files) => {
    if (error) {
      console.log(error);
      return res.status(500).send(error);
    }
    try {
      const path = files.file[0].path;
      const buffer = fs.readFileSync(path);
      const type = await FileType.fromBuffer(buffer);
      const fileName = `2DPlanImages/${uuid.v1()}`;
      const data = await uploadFile(buffer, fileName, type);

      const project = new Project({
        name: "AI" + uuid.v1(),
        user: req.userId,
        _2dPlan: data.Location,
      });

      project
        .save()
        .then((data) => {
          res.status(201).send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while adding the Project.",
          });
        });

      var mailOptions = {
        from: process.env.user,
        to: process.env.user,
        subject: "Recieved a 2D Plan",
        text: `${data.Location} userId:${req.userId} project:${project}`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.res);
        }
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  });
};

exports.findByUserId = (req, res) => {
  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }
  var user = req.userId;
  Project.find({ user })
    .then((projects) => {
      res.send(projects);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving projects.",
      });
    });
};
