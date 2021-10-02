import React from "react";

function VRtour() {
  return (
    <div class="holds-the-iframe">
      <iframe
        id="projectIframe"
        src={`https://www.coohom.com/pub/tool/panorama/show?obsPlanId=3FO49OHAIK4E&locale=en_US`}
        style={{
          width: "97vw",
          height: "92vh",
          border: "none",
          marginLeft: "50px",
        }}
        allowfullscreen={true}
      ></iframe>
    </div>
  );
}

export default VRtour;
