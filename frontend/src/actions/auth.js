import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, history, alert) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    alert.show("Successful Submission!", {
      type: "success",
      position: "top right",
    });
    history.push("/");
  } catch (error) {
    console.log(error);
    alert.show(`Error occurred: ${error.response.data.message}`, {
      type: "error",
      position: "top right",
    });
  }
};

export const signup = (formData, history, alert) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    alert.show("Successful Submission!", {
      type: "success",
      position: "top right",
    });
    history.push("/");
  } catch (error) {
    console.log(error);
    alert.show(`Error occurred: ${error.response.data.message}`, {
      type: "error",
      position: "top right",
    });
  }
};

export const googlesignup =
  (result, token, history, alert) => async (dispatch) => {
    try {
      const { data } = await api.googlesignup(result, token);
      dispatch({ type: AUTH, data: { result, token } });
      alert.show("Successful Submission!", {
        type: "success",
        position: "top right",
      });
      history.push("/");
    } catch (error) {
      console.log(error);
      alert.show(`Error occurred: ${error.response.data.message}`, {
        type: "error",
        position: "top right",
      });
    }
  };
