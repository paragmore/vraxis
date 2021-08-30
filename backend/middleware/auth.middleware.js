const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.secret);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      console.log(decodedData);
      req.userId = decodedData?.sub;
      req.email = decodedData?.email;
      req.name = decodedData?.name;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
