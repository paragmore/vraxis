import React from "react";
import { useLocation } from "react-router";
import {useParams} from "react-router-dom";

function _3DModel({project}) {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  // const {_3d} = useParams();
  const _3d= project?._3dmodel
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
        src={`https://planner5d.com/v/?key=${_3d}&viewMode=2d`}
        style={{ width: "99vw", height: "92vh", border: "none" }}
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default _3DModel;
