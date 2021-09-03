import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import { AppBar, Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import logo from "../../assets/logo3.png";
import { LOGOUT } from "../../constants/actionTypes";
import "./Navbar.css";

function Navbar() {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const [scrolled, setscrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
    setuser(null);
  };
  function handleScroll(event) {
    let scrollTop = event.target.scrollingElement.scrollTop;
    if (scrollTop > 90) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [location]);
  useEffect(() => {
    const token = user?.token;
    setuser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div>
      <AppBar position="static">
        <nav
          style={
            location.pathname == "/project3d"
              ? {
                  "box-shadow": "none",
                  "background-color": "#f1f1f1",
                  padding: "10px 0",
                  height: "7vh",
                }
              : scrolled || location.pathname !== "/"
              ? {
                  "box-shadow": "0 10px 10px rgba(0,0,0,0.1)",
                  "background-color": "var(--main-color)",
                  padding: "10px 0",
                  height: "10vh",
                }
              : null
          }
          class="navbar navbar-expand-lg fixed-top"
        >
          <div class="container">
            <img width="40px" src={logo} />
            <a class="navbar-brand" href="/">
              VR Axis
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              {!user ? (
                <ul
                  data-toggle="collapse"
                  data-target="#collapsibleNavbar"
                  class="navbar-nav ml-auto"
                >
                  <li class="nav-item">
                    <div
                      class="nav-link active"
                      onClick={() => window.location.replace("/#features")}
                    >
                      Why VR Axis
                    </div>
                  </li>

                  <li class="nav-item">
                    <div
                      class="nav-link "
                      onClick={() => window.location.replace("/#contact")}
                    >
                      Contact Us
                    </div>
                  </li>
                  <li class="nav-item">
                    <div
                      class="nav-link"
                      onClick={() => window.location.replace("/#pricing")}
                    >
                      Pricing
                    </div>
                  </li>

                  <li class="nav-item" component={Link}>
                    <Button
                      class="nav-link"
                      component={Link}
                      to="/auth"
                      variant="contained"
                      color="primary"
                    >
                      Sign Up
                    </Button>
                  </li>

                  {!user && (
                    <li class="free-trial-list">
                      <div style={{ marginLeft: "50px" }} class="btn-1" onClick={() => window.location.replace("/#contact")}>
                        Start free trial
                      </div>
                    </li>
                  )}
                </ul>
              ) : (
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <div
                      class="nav-link active"
                      onClick={() => window.location.replace("/")}
                    >
                      Home
                    </div>
                  </li>
                  <li class="nav-item">
                    <div
                      class="nav-link"
                      onClick={() => window.location.replace("/#pricing")}
                    >
                      Pricing
                    </div>
                  </li>
                  <li
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                    class="nav-item"
                  >
                    <Button
                      class="nav-link"
                      component={Link}
                      to="/dashboard"
                      variant="contained"
                      color="primary"
                    >
                      My Projects
                    </Button>
                  </li>
                  <li
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                    class="nav-item"
                  >
                    <Button
                      class="nav-link"
                      component={Link}
                      to="/upload2d"
                      variant="contained"
                      color="primary"
                    >
                      Upload 2D Plan
                    </Button>
                  </li>

                  <li class="nav-item" component={Link}>
                    <Avatar
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                      alt={user?.result.name}
                      src={user?.result.imageUrl}
                    >
                      {user?.result.name.charAt(0)}
                    </Avatar>
                  </li>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem
                      component={Link}
                      to="/dashboard"
                      onClick={handleClose}
                    >
                      My projects
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        handleLogout();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </ul>
              )}
            </div>
          </div>
        </nav>

        <div />
      </AppBar>
    </div>
  );
}

export default Navbar;
