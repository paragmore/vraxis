import newProjectImg from "../../../assets/newProject.png";
import loadImg from "../../../assets/vrLoadImage2.png";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOADING, PROJECT } from "../../../constants/actionTypes";
import { myprojects } from "../../../actions/project";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import React, { useEffect, useState } from "react";

function Projects() {
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
    <div
      id="maindash"
      style={{ marginLeft: "250px", transition: "all 0.5s ease" }}
    >
      
      <div class="row ">
      <Card class="dashboard-card" component={Link} to={"/upload2d"} style={{}}>
          <CardActionArea>
            <img src={newProjectImg} />
          </CardActionArea>
        </Card>
        {projects.length === 0 ? (
          <div
            style={{ marginTop: "40vh", marginLeft: "15vw" }}
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
                to={`/project3d/3dmodel?id=${project?._id}`}
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
  );
}

export default Projects;
