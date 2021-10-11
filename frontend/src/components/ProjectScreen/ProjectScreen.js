import React, { useEffect,useState } from "react";
import { useParams, useLocation, Route } from "react-router";
import { Redirect } from "react-router-dom";
import ProjectSidebar from "./ProjectSidebar/ProjectSidebar";
import "./ProjectScreen.css";
import _3DModel from "./_3DModel/_3DModel";
import VRtour from "./VRtour/VRtour";
import Panorama from "./Panorama/Panorama";
import { useSelector } from "react-redux";
import Snapshots from "./Snapshots/Snapshots";
import { useDispatch } from "react-redux";
import { LOADING, PROJECT } from "../../constants/actionTypes";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { getproject } from "../../actions/project";

function ProjectScreen() {
  const [project, setProject] = useState({});
  const alert = useAlert();
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("profile"))?.token;
  const history = useHistory();
    function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const id = query.get("id");
  const getProject = async () => {
    dispatch({ type: LOADING, data: true });
    try {
      dispatch(getproject(token, history, alert,id)).then((res) => {
        setProject(res);
        dispatch({ type: LOADING, data: false });
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProject();
  }, []);
  console.log(project);

  return (
    <div style={{ marginTop: "7vh" }}>
      <ProjectSidebar id={id} project={project} />
      {/* <Redirect to={`/project3d/3dmodel?id=${id}`}/> */}
      <Route path="/project3d/3dmodel/" render={(props)=> <_3DModel project={project} {...props}/> }  />
      <Route path="/project3d/vrtour" render={(props)=> <VRtour project={project} {...props}/> } />
      <Route path="/project3d/panorama" component={Panorama} />
      <Route path="/project3d/snapshots" render={(props)=> <Snapshots project={project} {...props}/> }  />
      <div class="holds-the-iframe">
        {/* <_3DModel /> */}
        {/* <VRtour /> */}
      </div>
    </div>
  );
}

export default ProjectScreen;
