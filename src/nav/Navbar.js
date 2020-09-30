import React from "react";
import { ReactComponent as SpotifyLogo } from "../svgs/spotifyLogo.svg";
import { ReactComponent as Home } from "../svgs/homeLogo.svg";
import { ReactComponent as Search } from "../svgs/searchLogo.svg";
import { ReactComponent as Library } from "../svgs/libraryLogo.svg";
import { Link } from "react-router-dom";

function Container() {
  return (
    <div className="header">
      <Link to="/" exact style={{ textDecoration: "none" }}>
        <div className="logo">
          <SpotifyLogo />
        </div>
      </Link>
      <ul>
        <Link to="/" exact style={{ textDecoration: "none" }}>
          <li className="active">
            <Home />
            Home
          </li>
        </Link>
        <Link to="/#" style={{ textDecoration: "none" }}>
          <li>
            <Search />
            Search
          </li>
        </Link>
        <Link to="/#" style={{ textDecoration: "none" }}>
          <li>
            <Library />
            Your Library
          </li>
        </Link>
      </ul>
      <div className="cookies">
        <span style={{ color: "#b3b3b3" }}>Cookies</span>{" "}
        <span style={{ color: "#b3b3b3" }}>Privacy</span>{" "}
      </div>
    </div>
  );
}

export default Container;
