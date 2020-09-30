import React from "react";
import Categories from "./Categories";
import { Route, Switch } from "react-router-dom";
import Playlist from "../Music/Playlist";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { loginUrl } from "../spotify";

function Main() {
  return (
    <div className="main">
      <div className="topNavBar">
        <KeyboardArrowLeftIcon fontSize="large" />
        <KeyboardArrowRightIcon fontSize="large" />
        <div className="login">
          <a href={loginUrl}>LOG IN</a>
        </div>
      </div>

      <div className="mainBody">
        <Switch>
          <Route path="/" component={Categories} exact></Route>
          <Route path="/play/:id" component={Playlist}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default Main;
