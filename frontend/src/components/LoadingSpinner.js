import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";

function LoadingSpinner() {
  const loading = useSelector((state) => state.loading);
  console.log(loading);
  useEffect(() => {
    if (loading == true) {
      return (
        <div
          style={{
            position: "fixed",
            left: "50vw",
            top: "50vh",
            zIndex: 100000,
            color: "#396d2f",
          }}
        >
          <CircularProgress size={50} thickness={5} color="#396d2f" />
        </div>
      );
    }
  }, [loading]);
  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          left: "50vw",
          top: "50vh",
          zIndex: 100000,
          color: "#396d2f",
        }}
      >
        <CircularProgress size={50} thickness={5} color="#396d2f" />
      </div>
    );
  } else return null;
}

export default LoadingSpinner;
