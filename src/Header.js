import React from "react";
import "./css/Header.css";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="Appheader">
      <div className="headerLeft">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs or Podcasts"
          type="text"
        />
      </div>
      <div className="headerRight">
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
