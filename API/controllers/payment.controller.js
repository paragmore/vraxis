const shortid = require("shortid");
const Razorpay = require("razorpay");
const PricingPlan = require("../models/pricingPlan.model.js");
const UserProfile = require("../models/userProfile.model.js");
const Payment = require("../models/payment.model.js");
const crypto = require("crypto");

const razorpay = new Razorpay({
  key_id: process.env.razorPayKeyId,
  key_secret: process.env.razorPayKeySecret,
});

exports.pay = async (req, res) => {
  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }
  var user = req.userId;
  const { plan, currency } = req.body;
  var fAmount = await PricingPlan.findOne({ name: plan });
  var amount = fAmount.price;

  const payment_capture = 1;

  var paycurrency = "INR";
  if (currency === "INR") {
    amount = amount * 100;
    paycurrency = "INR";
  } else {
    amount = amount / 70;
    paycurrency = "USD";
  }

  const options = {
    amount,
    currency: paycurrency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.paySuccess = async (req, res) => {
  console.log(req.userId);
  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }
  var user = req.userId;
  try {
    // getting the details back from our font-end
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      billingPlan,
    } = req.body;

    // Creating our own digest
    // The format should be like this:
    // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, razor pay key secret);
    const shasum = crypto.createHmac("sha256", process.env.razorPayKeySecret);

    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

    const digest = shasum.digest("hex");
    console.log(digest);

    // comaparing our digest with the actual signature
    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: "Transaction not legit!" });

    // THE PAYMENT IS LEGIT & VERIFIED
    // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT
    var planBenefits = {};
    if (billingPlan.toUpperCase() === "STARTER") {
      planBenefits = {
        _3dmodelsLeft: 1,
        vrtoursLeft: 0,
        snapshotsLeft: 0,
        panoramasLeft: 0,
      };
    } else if (billingPlan.toUpperCase() === "BUSINESS") {
      planBenefits = {
        _3dmodelsLeft: 1,
        vrtoursLeft: 0,
        snapshotsLeft: 2,
        panoramasLeft: 0,
      };
    } else if (billingPlan.toUpperCase() === "ENTERPRISE") {
      planBenefits = {
        _3dmodelsLeft: 1,
        vrtoursLeft: 1,
        snapshotsLeft: 5,
        panoramasLeft: 10,
      };
    }
    Payment.create({
      razorpay_payment_id: razorpayPaymentId,
      razorpay_order_id: razorpayOrderId,
      razorpay_signature: razorpaySignature,
      billingPlan: billingPlan.toUpperCase(),
      user,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    UserProfile.findOneAndUpdate(
      { user },
      { billingPlan: billingPlan.toUpperCase(), ...planBenefits }
    )
      .then((project) => {
        // console.log(project)
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while saving project.",
        });
      });
    res.json({
      msg: "success",
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

exports.paymentInfo = async (req, res) => {
  // console.log(req);
  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }
  var user = req.userId;
  // console.log(user);
  Payment.findOne({ user })
    .sort({ created_at: -1 })
    .then((payment) => {
      console.log(payment)
      return res.send(payment);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving payment.",
      });
    });
};
