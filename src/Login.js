import React from "react";
import "./css/Login.css";
import Navbar from "./nav/Navbar";
import Main from "./main/Main";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Navbar />
        <div className="body">
          <Main />
        </div>
      </div>
      <div className="controls">
        <a href={loginUrl} style={{ textDecoration: "none" }}>
          <div className="outerMusic">
            <div className="musicInfo">
              <p className="regPreview">PREVIEW OF SPOTIFY</p>
              <span className="regDescription">
                Sign up to get unlimited songs and podcasts with occasional ads.
                No credit card needed.
              </span>
            </div>
            <div className="login">
              <a href={loginUrl}>SIGN UP FREE</a>
            </div>
          </div>
        </a>
      </div>
      {/*
      <div className="login">
         Login with spotify button 
        <a href={loginUrl}>LOG IN</a>
      </div>*/}
    </div>
  );
}

export default Login;
