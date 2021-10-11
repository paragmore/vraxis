import React from "react";
import "./Snapshots.css";
import {
  IconButton,
  Avatar,
  Tooltip,
  MenuItem,
  Divide,
  ListItemIcon,
  Divider,
  Menu,
} from "@material-ui/core";
import { FaShareSquare, FaLink, FaDownload } from "react-icons/fa";
import { saveAs } from 'file-saver'

function Snapshots({ project }) {
  console.log(project);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const downloadImage = (imageURL) => {
    saveAs(`${imageURL}`, 'image.jpg') // Put your image url here.
  }
  const snapshots = project?.snapshots;
  return (
    <div class="column">
      <div class="snap-container">
        <div class="row">
          {snapshots?.length === 0 ? (
            <div
              style={{ marginTop: "40vh", marginLeft: "15vw" }}
              class="justify-content-center"
            >
              No Snapshots Generated, Please Wait.{" "}
            </div>
          ) : null}{" "}
          {snapshots?.map((snapshot) => {
            return (
              <div class="row">
                {" "}
                <div class="snap-card">
                  <img class="snap-img" src={snapshot.id} />
                </div>
                <div class="snap-share">
                  {" "}
                  <Tooltip title="Share/Download">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                    >
                      <FaShareSquare
                        style={{
                          width: "40px",
                          height: "40px",
                          color: "var(--black-000)",
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          left: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "left", vertical: "top" }}
                    anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                  >
                    <MenuItem>
                      <ListItemIcon>
                        <FaLink style={{ color: "var(--black-000)" }} />
                      </ListItemIcon>
                      Share Link
                    </MenuItem>
                    <MenuItem onClick={()=>downloadImage(snapshot?.id)}>
                      <ListItemIcon>
                        <FaDownload style={{ color: "var(--black-000)" }} />
                      </ListItemIcon>
                      Download
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Snapshots;
