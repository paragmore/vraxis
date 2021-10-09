import React, { useEffect } from "react";
import { useParams, useLocation, Route } from "react-router";
import ProjectSidebar from "./ProjectSidebar/ProjectSidebar";
import "./ProjectScreen.css";
import _3DModel from "./_3DModel/_3DModel";
import VRtour from "./VRtour/VRtour";
import Panorama from "./Panorama/Panorama";
import { useSelector } from "react-redux";
import Snapshots from "./Snapshots/Snapshots";


function ProjectScreen() {
  const project = useSelector((state) => state);
  useEffect(() => {
    console.log(project)
  }, [project])
  console.log(project)
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const id = query.get("id");
  return (
    <div style={{ marginTop: "7vh" }}>
      <ProjectSidebar id={id} project={project} />
      <Route path="/project3d/3dmodel" component={_3DModel} />
      <Route path="/project3d/vrtour" component={VRtour} />
      <Route path="/project3d/panorama" component={Panorama} />
      <Route path="/project3d/snapshots" component={Snapshots} />
      <div class="holds-the-iframe">
        {/* <_3DModel /> */}
        {/* <VRtour /> */}
      </div>
    </div>
  );
}

export default ProjectScreen;
