import * as api from "../api/index.js";
export const myprofile = (token, history, alert) => async (dispatch) => {
  try {
    const { data } = await api.myprofile(token);
    return data;
  } catch (error) {
    alert.show(`Error occurred: ${error.response.data.message}`, {
      type: "error",
      position: "top right",
    });
  }
};

export const paymentInfo = (token, history, alert) => async (dispatch) => {
  try {
    const { data } = await api.paymentInfo(token);
    return data;
  } catch (error) {
    alert.show(`Error occurred: ${error.response.data.message}`, {
      type: "error",
      position: "top right",
    });
  }
};
