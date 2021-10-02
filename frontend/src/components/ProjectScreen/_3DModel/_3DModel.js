import React from "react";
import { useParams, useLocation } from "react-router";

function _3DModel() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const id = query.get("id");
  return (
    <div class="holds-the-iframe">
      <div
        style={{
          position: "absolute",
          zIndex: 10000,
          backgroundColor: "var(--main-color)",
          height: "170px",
          width: "60px",
          bottom: "162px",
          right: "0px",
        }}
      >
        <h3 class="button-hidder"> VR AXIS</h3>
      </div>
      <iframe
        id="projectIframe"
        src={`https://planner5d.com/v/?key=${id}&viewMode=2d`}
        style={{ width: "99vw", height: "92vh", border: "none" }}
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default _3DModel;
