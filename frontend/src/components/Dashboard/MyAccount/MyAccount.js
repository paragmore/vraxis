import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { LOADING, PROJECT } from "../../../constants/actionTypes";
import { myprofile, paymentInfo } from "../../../actions/profile";
import "./MyAccount.css";
import { FaCubes, FaImage } from "react-icons/fa";
import { Md3DRotation, MdPanorama } from "react-icons/md";

function MyAccount() {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));
  const alert = useAlert();
  const dispatch = useDispatch();
  const history = useHistory();
  const [profile, setprofile] = useState({});
  const [payInfo, setpayInfo] = useState({});

  const subscriptionDate = new Date(payInfo?.createdAt);

  const getProfile = async () => {
    dispatch({ type: LOADING, data: true });
    try {
      dispatch(myprofile(user.token, history, alert)).then((res) => {
        setprofile(res);
        dispatch({ type: LOADING, data: false });
      });
    } catch (error) {
      console.log(error);
    }
  };
  function subscriptionEndDate(inputFormat) {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear() + 1].join(
      "/"
    );
  }
  const getPaymentInfo = async () => {
    dispatch({ type: LOADING, data: true });
    try {
      dispatch(paymentInfo(user.token, history, alert)).then((res) => {
        setpayInfo(res);
        dispatch({ type: LOADING, data: false });
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfile();
    getPaymentInfo();
  }, []);
  console.log(payInfo.createdAt);
  return (
    <div id="maindash" style={{ marginLeft: "250px" }}>
      <div></div>
      <div
        style={{
          transition: "all 0.5s ease",
          width: "100vw",
        }}
      >
        <div style={{ display: "flex", marginTop: "50px" }}>
          {" "}
          <Avatar
            aria-controls="simple-menu"
            aria-haspopup="true"
            //   onClick={handleClick}
            alt={user?.result.name}
            src={user?.result.imageUrl}
            style={{ width: "120px", height: "120px" }}
          />
          <div style={{ marginLeft: "20px" }}>
            <div
              style={{
                textTransform: "capitalize",
                fontWeight: "bold",
                marginTop: "15px",
              }}
            >
              {user?.result.name}
            </div>
            <div>{user?.result.email}</div>
            <Chip
              size="small"
              style={{ backgroundColor: "var(--color-3)" }}
              clickable
              label={profile?.billingPlan}
            />
          </div>
        </div>
      </div>
      <hr style={{ width: "100vw" }} />
      <div class="row" style={{ transition: "all 0.5s ease" }}>
        <div
          style={{
            border: "solid 1px",
            borderRadius: "10px",
            borderColor: "var(--black-300)",
            height: "50vh",
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            class="row"
            style={{
              marginLeft: "40px",
              marginRight: "50px",
              marginTop: "20px",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "20px",
              justifyContent: "space-between",
            }}
          >
            Billing Plan : {profile?.billingPlan}
            <div onClick={() => window.location.replace("/#pricing")} class="btn btn-1">Upgrade / Renew</div>
          </div>
          <hr style={{ width: "90%", marginLeft: "5%" }} />
          <div style={{ marginLeft: "20px" }}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "20px",
                  marginBottom: "10px",
                }}
              >
                <FaCubes style={{ color: "var(--black-000)" }} size={"30px"} />
              </div>
              <div>
                3D models
                <div style={{ fontSize: "14px", color: "var(--black-400" }}>
                  {profile?._3dmodelsLeft} left
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "20px",
                  marginBottom: "10px",
                }}
              >
                <FaImage style={{ color: "var(--black-000)" }} size={"30px"} />
              </div>

              <div>
                Snapshots
                <div style={{ fontSize: "14px", color: "var(--black-400" }}>
                  {profile?.snapshotsLeft} left
                </div>
              </div>
            </div>
            {/* <div style={{ display: "flex" }}>
              
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "20px",
                  marginBottom:"10px"
                }}
              >
                <MdPanorama style={{color:"var(--black-000)"}} size={"30px"} />
              </div>

              <div>
                Panoramas
                <div style={{ fontSize: "14px", color: "var(--black-400" }}>
                  {profile?.panoramasLeft} left
                </div>
              </div>
            </div> */}
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "20px",
                  marginBottom: "10px",
                }}
              >
                <Md3DRotation
                  style={{ color: "var(--black-000)" }}
                  size={"30px"}
                />
              </div>
              <div>
                VR Tours
                <div style={{ fontSize: "14px", color: "var(--black-400" }}>
                  {profile?.vrtoursLeft} left
                </div>
              </div>
            </div>
          </div>
          <hr style={{ width: "90%", marginLeft: "5%" }} />

          {/* <div
            style={{
              marginLeft: "20px",
              color: "var(--black-400)",
              fontSize: "15px",
            }}
          >
            Subscription ends on: {subscriptionEndDate(subscriptionDate)}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
