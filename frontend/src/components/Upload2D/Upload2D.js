import React, { useState } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
// import { URL } from "../../url";
import { upload2d } from "../../actions/project";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { LOADING } from "../../constants/actionTypes";

function Upload2D() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const history = useHistory();
  const [file, setFile] = useState(null);
  const token = JSON.parse(localStorage.getItem("profile")).token;
  const submitFile = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        throw new Error("Select a file first!");
      }
      const formData = new FormData();
      formData.append("file", file[0]);
      dispatch({ type: LOADING, data: true });
      dispatch(upload2d(formData, token, history, alert)).then((res) => {
        console.log(res);
        dispatch({ type: LOADING, data: false });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
      style={{ marginTop: "100px" }}
      component="main"
      maxWidth="xs"
    >
      <form onSubmit={submitFile}>
        <label>Upload file</label>
        <input
          type="file"
          accept="image/*"
          onChange={(event) => setFile(event.target.files)}
        />
        <button type="submit">Send</button>
      </form>
    </Container>
  );
}

export default Upload2D;
