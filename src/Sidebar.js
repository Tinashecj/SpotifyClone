import React from "react";
import "./css/Sidebar.css";
import { ReactComponent as SpotifyLogo } from "./svgs/spotifyLogo.svg";
import SiderbarOption from "./SiderbarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SpotifyLogo className="SidebarLogo" />
      <SiderbarOption Icon={HomeIcon} title="Home" />
      <SiderbarOption Icon={SearchIcon} title="Search" />
      <SiderbarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="SiderbarTitle">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SiderbarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
