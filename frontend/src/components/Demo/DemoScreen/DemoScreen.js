import React from "react";
import { useParams, useLocation, Route } from "react-router";


function DemoScreen() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const url = query.get("url");
  return (
    <div class="holds-the-iframe">
      <iframe
        id="projectIframe"
        src={`https://www.coohom.com/${url}`}
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
          marginTop: "7vh",
          height: "92vh",
        }}
        allowfullscreen={true}
      ></iframe>
    </div>
  );
}

export default DemoScreen;
