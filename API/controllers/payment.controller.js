const shortid = require("shortid");
const Razorpay = require("razorpay");
const PricingPlan = require("../models/pricingPlan.model.js");
const Payment = require("../models/payment.model.js");
const crypto = require("crypto");

const razorpay = new Razorpay({
  key_id: "rzp_test_WVNztll0DltvWw",
  key_secret: "dasZZklOsNRVxh19aLidOjIc",
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
    } = req.body;

    // Creating our own digest
    // The format should be like this:
    // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
    const shasum = crypto.createHmac("sha256", "w2lBtgmeuDUfnJVp43UpcaiT");

    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

    const digest = shasum.digest("hex");
    console.log(digest)

    // comaparing our digest with the actual signature
    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: "Transaction not legit!" });

    // THE PAYMENT IS LEGIT & VERIFIED
    // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

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
