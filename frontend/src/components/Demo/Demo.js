import React from "react";
import { useParams, useLocation, Route } from "react-router";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

function Demo() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  var demos = [
    {
      image:
        "https://qhrenderpic-cos.kujiale.com/r/2021/08/11/L3D187S14ENDPQGFADNSGE4TGLUF3P3XI888_3840x2160.jpg",
      url: "pub/tool/panorama/show?obsPlanId=3FO49OHAIK4E&locale=en_US",
    },
    {
      image:
        "https://qhrenderpic-cos.kujiale.com/r/2021/08/11/L3D187S14ENDPQGEQ7VSGF7OOLUF3P3WE888_3840x2160.jpg",
      url: "pub/tool/panorama/show?obsPlanId=3FO49OFCKWRB&locale=en_US",
    },
    {
      image:
        "https://qhrenderpic-cos.kujiale.com/r/2021/08/11/L3D187S14ENDPQGE5H5SGFN3WLUF3P3WI888_3840x2160.jpg",
      url: "pub/tool/panorama/show?obsPlanId=3FO49OF4HR4M&locale=en_US",
    },
    {
      image:
        "https://qhrenderpic-cos.kujiale.com/r/2021/09/07/L3D187S14ENDPQUOJINSGHQNCLUF3P3WM888_3840x2160.jpg",
      url: "pub/tool/panorama/show?obsPlanId=3FO49954GSPU&locale=en_US",
    },{
      image:"https://qhrenderpic-cos.kujiale.com/r/2021/07/07/L3D124S14ENDPX5HFNVSGHAAYLUF3P3WM888_4000x3000.jpg",
      url:"pub/tool/panorama/show?obsPlanId=3FO4605VGXR2&kpm=qkWL.45e12962b9c06fab.585baa9.1633160244066&locale=en_US"
    },{
      image:"https://qhrenderpicoss.kujiale.com/r/2020/12/04/L3D187S21ENDILLH7HIUI5NYALUF3P3XE888_3840x2160.jpg",
      url:"pub/tool/panorama/show?obsPlanId=3FO45Y6HV5WE&locale=en_US"
    }
  ];
  let query = useQuery();
  const url = query.get("url");
  return (
    <div style={{ display: "flex", marginTop: "10vh" }}>
      <div class="container-fluid">
        <div class="row">
          <div id="maindash" style={{ transition: "all 0.5s ease" }}>
            <div class="row ">
              {demos.map((demo) => {
                return (
                  <Card
                    class="demo-dashboard-card"
                    component={Link}
                    to={`/demoscreen?url=${demo.url}`}
                    style={{}}
                  >
                    <CardActionArea>
                      <CardContent>
                        <img src={demo.image} />
                        <div
                          variant="h6"
                          component="h2"
                          class="project-name"
                        ></div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
