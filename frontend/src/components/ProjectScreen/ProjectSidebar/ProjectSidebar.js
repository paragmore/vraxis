//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog, BiDetail } from "react-icons/bi";
import { HiCube } from "react-icons/hi";
import { RiScreenshot2Fill } from "react-icons/ri";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./ProjectSidebar.css";

import { GoogleLogout } from "react-google-login";
import { LOGOUT } from "../../../constants/actionTypes";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

function ProjectSidebar() {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
  };

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    // menuCollapse
    //   ? (document.getElementById("projectIframe").style.marginLeft = "250px")
    //   : (document.getElementById("projectIframe").style.marginLeft = "100px");
  };

  return (
    <>
      <div id="project-sidebar">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <SubMenu title="Details" icon={<BiDetail />}>
                <SubMenu defaultOpen title="Name" icon={<RiPencilLine />}>
                  <div>
                    <h7>Name</h7>
                  </div>
                </SubMenu>
                <SubMenu defaultOpen title="Address" icon={<RiPencilLine />}>
                  <div>
                    <h7>Name</h7>
                  </div>
                </SubMenu>
              </SubMenu>
              <SubMenu title="Specifications" icon={<RiPencilLine />}>
                <SubMenu defaultOpen title="Wall Type" icon={<RiPencilLine />}>
                  <div>
                    <h7>Name</h7>
                  </div>
                </SubMenu>
                <SubMenu
                  defaultOpen
                  title="Wall Height"
                  icon={<RiPencilLine />}
                >
                  <div>
                    <h7>Name</h7>
                  </div>
                </SubMenu>
              </SubMenu>
              <MenuItem icon={<RiScreenshot2Fill />}>Snapshots</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <GoogleLogout
                clientId="848368866400-i3v1s95p4s32eikp6kr0vvnfudb9cd7p.apps.googleusercontent.com"
                render={(renderProps) => (
                  <MenuItem
                    color="primary"
                    fullWidth
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    icon={<FiLogOut />}
                    variant="contained"
                  >
                    Logout
                  </MenuItem>
                )}
                onLogoutSuccess={logout}
              ></GoogleLogout>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
}

export default ProjectSidebar;
