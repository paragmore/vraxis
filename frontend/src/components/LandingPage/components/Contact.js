import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { enquiry } from "../../../actions/contact";
import { useAlert } from "react-alert";
import { LOADING } from "../../../constants/actionTypes";

function Contact() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const history = useHistory();
  const [contactformData, setcontactformData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING, data: true });
    dispatch(enquiry(contactformData, history, alert)).then((data) => {
      dispatch({ type: LOADING, data: false });
    });
  };
  const handleChange = (e) => {
    setcontactformData({ ...contactformData, [e.target.name]: e.target.value });
  };
  return (
    <section id="contact" class="contact section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title">
              <h2>
                Contact <span>Us</span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-5">
            <div class="contact-info">
              <h3>For Any Queries and Support</h3>
              <div class="contact-info-item">
                <i class="fas fa-location-arrow"></i>
                <h4>Company Location</h4>
                <p>Shivtirtha-A, Mhasrul, Nashik- 422004 </p>
              </div>
              <div class="contact-info-item">
                <i class="fas fa-envelope"></i>
                <h4>Drop Us An E-mail</h4>
                <p>contact.curateup@gmail.com</p>
              </div>
              <div class="contact-info-item">
                <i class="fas fa-phone"></i>
                <h4>Call Us Directly</h4>
                <p>Parag: +91-8605976910</p>
                <p>Suyash: +91-7225957110</p>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-7">
            <div class="contact-form">
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      autoComplete="name"
                      name="userName"
                      variant="outlined"
                      required
                      fullWidth
                      id="userName"
                      label="Name"
                      // autoFocus
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="userEmail"
                      label="Email Address"
                      name="userEmail"
                      autoComplete="email"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="userPhone"
                      label="Mobile Phone Number"
                      type="number"
                      id="userPhone"
                      autoComplete="phone"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      required
                      name="subject"
                      label="Subject"
                      id="subject"
                      autoComplete="subject"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Multiline"
                      multiline
                      maxRows={6}
                      rows={6}
                      fullWidth
                      name="message"
                      label="Message"
                      type="message"
                      id="message"
                      autoComplete="message"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>

                <div class="row mt-3">
                  <div class="col-lg-12">
                    <button type="submit" class="btn btn-1">
                      Send Enquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
