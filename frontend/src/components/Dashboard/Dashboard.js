import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./Dashboard.css";
function Dashboard() {
  const [projects, setProjects] = useState([]);
  const token = JSON.parse(localStorage.getItem("profile")).token;
  console.log(token);
  const getProjects = async () => {
    try {
      await axios
        .get(`${URL}/myprojects`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setProjects(res.data);
          // res.data.map((project) =>setProjects([...projects,project._3dmodel]) )
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);

  console.log(projects);
  return (
    <div
      class="container"
      style={{
        marginTop: "7vh",
        padding: "100px",
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <div class="row justify-content-center">
        {" "}
        {projects.map((project) => {
          if (project._3dmodel) {
            return (
              <Card
                class="dashboard-card"
                component={Link}
                to={`/project3d?id=${project._3dmodel}`}
                style={{}}
              >
                <CardActionArea>
                  <CardContent>
                    <img
                      src={`https://storage.planner5d.com/thumbs.600/${project._3dmodel}.jpg?tag=1629558667`}
                    />
                    <Typography style={{overflow:"hidden"}} gutterBottom variant="h6" component="h2">
                      {project.name}
                    </Typography>
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

export default Dashboard;
