
import * as api from "../api/index.js"

export const enquiry = (formData, history) => async (dispatch) => {
  try {
    const {data} = await api.enquiry(formData);
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};