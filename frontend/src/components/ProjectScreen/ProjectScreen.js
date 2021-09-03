import React from "react";
import { useParams, useLocation } from "react-router";
import ProjectSidebar from "./ProjectSidebar/ProjectSidebar";
import "./ProjectScreen.css"

function ProjectScreen() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const id = query.get("id");
  return (
    <div style={{ marginTop: "7vh" }}>
      <ProjectSidebar />
      <div class="holds-the-iframe">
        {" "}
        <iframe
          id="projectIframe"
          src={`https://planner5d.com/v/?key=${id}&viewMode=2d`}
          style={{ width: "99vw", height: "92vh", border: "none" }}
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default ProjectScreen;
