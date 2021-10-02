import React from "react";

function Panorama() {
  return (
    <div
      style={{
        boxShadow: "var(--shadow-black-100)",
        marginTop: "10vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        {" "}
        <img
          alt="pic"
          src="https://qhrenderpicoss.kujiale.com/r/2021/08/11/L3D326S14ENDPQGFC6VSGF5RQLUF3P3XA888_4000x4000.jpg"
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "",
            width: "100%",
            marginTop: "10vh",
            borderRadius:"2%"
          }}
        ></img>
      </div>
      <div>
        {" "}
        <img
          alt="pic"
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            borderRadius: "",
            marginTop: "10vh",
            marginBottom:"10vh",
            borderRadius:"2%"
          }}
          src="https://qhrenderpicoss.kujiale.com/r/2021/08/11/L3D326S14ENDPQGFCUNSGFEDALUF3P3X6888_4000x4000.jpg"
        ></img>
      </div>
    </div>
  );
}

export default Panorama;
