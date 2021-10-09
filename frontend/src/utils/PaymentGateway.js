import axios from "axios";

const API = axios.create({ baseURL: "/api" });
export default async function displayRazorpay(userInfo) {
  const data = await API.post(
    `/razorpay`,
    { plan: userInfo.plan.name, currency: userInfo.currency },
    {
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
      },
    }
  );

  console.log(data);
  console.log(userInfo);

  const options = {
    key: "rzp_test_WVNztll0DltvWw",
    currency: data.data.currency,
    amount: data.data.amount,
    name: data.data.name,
    description: data.data.description,
    order_id: data.data.id,
    handler: async function (response) {
      const successData = {
        orderCreationId: data.data.id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      const result = await API.post("/paySuccess", successData, {
        headers: {
          Authorization: `Bearer ${userInfo.user.token}`,
        },
      });

      alert(result.data.msg);
    },
    prefill: {
      name: userInfo.user.result.name,
      email: userInfo.user.result.email,
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}