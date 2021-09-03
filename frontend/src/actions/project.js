import * as api from "../api/index.js";

export const upload2d = (formData, token, history,alert) => async (dispatch) => {
    try {
      const { data } = await api.upload2d(formData,token);
      alert.show("Successful Submission!", {
        type: "success",
        position: "top right",
      });
      history.push("/");
      return data;
    } catch (error) {
      console.log(error);
      alert.show(`Error occurred: ${error.response.data.message}`, {
        type: "error",
        position: "top right",
      });
    }
  };

  export const myprojects = (token, history,alert) => async (dispatch) => {
    try {
      const { data } = await api.myprojects(token);
      // alert.show("Successful Submission!", {
      //   type: "success",
      //   position: "top right",
      // });
      return data;
    } catch (error) {
      alert.show(`Error occurred: ${error.response.data.message}`, {
        type: "error",
        position: "top right",
      });
    }
  };