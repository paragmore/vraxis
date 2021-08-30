import React from "react";
import { useParams, useLocation } from "react-router";

function ProjectScreen() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const id = query.get("id");
  console.log(id);
  return (
    <div style={{ marginTop:"7vh" }}>
      <iframe
        src={`https://planner5d.com/v/?key=${id}&viewMode=3d`}
        style={{ width: "99vw", height: "92vh", border: "none" }}
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default ProjectScreen;
