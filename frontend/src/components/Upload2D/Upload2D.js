import React, { useState } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import "./Upload2D.css";

function Upload2D() {
  const [file, setFile] = useState(null);
  const token = JSON.parse(localStorage.getItem("profile")).token;
  const submitFile = async () => {
    try {
      if (!file) {
        throw new Error("Select a file first!");
      }
      const formData = new FormData();
      formData.append("file", file[0]);
      await axios
        .post(`${URL}/api/upload2d`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
        });
      // handle success
    } catch (error) {
      // handle error
    }
  };

  return (
    <Container style={{ marginTop: "100px" }} component="main" maxWidth="xs">
      <form onSubmit={submitFile}>
        <label>Upload file</label>
        <input type="file" onChange={(event) => setFile(event.target.files)} />
        <button type="submit">Send</button>
      </form>
    </Container>
  );
}

export default Upload2D;
