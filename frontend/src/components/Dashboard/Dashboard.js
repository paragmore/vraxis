import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import loadImg from "../../assets/vrLoadImage2.png";
import { myprojects } from "../../actions/project";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { LOADING, PROJECT } from "../../constants/actionTypes";

// import {URL} from "../../url"
function Dashboard() {
  const [projects, setProjects] = useState([]);
  const alert = useAlert();
  const dispatch = useDispatch();
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("profile")).token;
  const getProjects = async () => {
    dispatch({ type: LOADING, data: true });
    try {
      dispatch(myprojects(token, history, alert)).then((res) => {
        setProjects(res);
        dispatch({ type: LOADING, data: false });
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <div style={{ display: "flex", marginTop: "10vh" }}>
      <div class="container-fluid">
        <div class="row">
          <div>
            <Sidebar />
          </div>
          <div
            id="maindash"
            style={{ marginLeft: "250px", transition: "all 0.5s ease" }}
          >
            <div class="row ">
              {projects.length === 0 ? (
                <div
                  style={{ marginTop: "40vh", marginLeft: "30vw" }}
                  class="justify-content-center"
                >
                  No Projects, Please Upload a 2D Plan.{" "}
                </div>
              ) : null}{" "}
              {projects.map((project) => {
                if (project._3dmodel) {
                  return (
                    <Card
                      class="dashboard-card"
                      component={Link}
                      to={`/project3d/3dmodel?id=${project._3dmodel}`}
                      style={{}}
                    >
                      <CardActionArea
                        onClick={dispatch({ type: PROJECT, data: project })}
                      >
                        <CardContent>
                          <img
                            src={`https://storage.planner5d.com/thumbs.600/${project._3dmodel}.jpg?tag=1629558667`}
                          />
                          <div variant="h6" component="h2" class="project-name">
                            {project.name}
                          </div>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  );
                } else {
                  return (
                    <Card class="dashboard-card" component={Link} style={{}}>
                      <CardActionArea>
                        <CardContent>
                          <img src={loadImg} />

                          <div variant="h6" component="h2" class="project-name">
                            {project.name}
                          </div>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
