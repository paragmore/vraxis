import * as api from "../api/index.js";

export const enquiry = (formData, history, alert) => async (dispatch) => {
  try {
    const { data } = await api.enquiry(formData);
    alert.show("Successful Submission!", {
      type: "success",
      position: "top right",
    });
    history.push("/");
    return data;
  } catch (error) {
    console.log(error.response.data);
    alert.show(`Error occurred: ${error.response.data.message}`, {
      type: "error",
      position: "top right",
    });
  }
};
