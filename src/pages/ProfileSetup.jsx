import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";

const ProfileSetup = () => {
  return (
    <Layout>
      <form className="form-wrapper">
        <div className="logo">
          <img src="/images/barter.svg" width="85" alt="barter" />
        </div>

        <div>
          <h3 className="upload-title">Profile Setup</h3>
          <input type="file" id="file" accept="image/*" />
          <label>BP</label>
          <div className="upload-image-wrapper">
            <span className="upload-image-text">Upload</span>{" "}
            <img src="/images/camera.svg" />
          </div>
        </div>

        <div className="input-wrapper">
          <div>
            <label>First Name</label>
            <input type="text" placeholder="Enter First Name" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" placeholder="Enter Last Name" />
          </div>
        </div>
        <div className="input-wrapper">
          <div>
            <label>Location</label>
            <input type="text" placeholder="Enter Location" />
            <img src="/images/location.svg" className="input-icon icon" />
          </div>
          <div>
            <label>Branch</label>
            <input type="text" placeholder="Enter Branch" />
            <img src="/images/branch.svg" className="input-icon icon" />
          </div>
        </div>
        <div className="input-wrapper">
          <div>
            <label>Job</label>
            <input type="text" placeholder="Enter Job" />
          </div>
          <div>
            <label>Hire Date</label>
            <input type="date" placeholder="Enter Date" />
            <img src="/images/date.svg" className="input-icon icon" />
          </div>
        </div>

        <button className="btn">Continue</button>
        <Link to="/">
          <p className="skip">Skip</p>
        </Link>
      </form>
    </Layout>
  );
};

export default ProfileSetup;
