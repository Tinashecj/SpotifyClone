import React from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as PlayIcon } from "../svgs/playIcon.svg";
import { ReactComponent as HeartIcon } from "../svgs/heart.svg";

function Playlist() {
  var { id } = useParams();
  return (
    <div>
      <div className="playpage">
        <div className="innerPage">
          <div className="playlistinfo">
            <div className="playlistinfoIMG">
              <img
                draggable="false"
                loading="lazy"
                src="https://i.scdn.co/image/ab67706f000000033466e2ac76e504f4131af598"
                alt="Music For Concentration"
                class="_64acb0e26fe0d9dff68a0e9725b2a920-scss _4c838ef3d2b6da1a61669046bbfae3d1-scss"
                sizes="(min-width: 1280px) 232px, 192px"
              />
            </div>
            <div className="pageContent">
              <h2>PLAYLIST</h2>
              <h1>Music For Concentration</h1>
              <div className="icons">
                <div className="hearts"></div>
                <div className="dots"></div>
              </div>
              <p>
                Minimalism, electronica and modern classical to concentrate to.
              </p>
              <div className="spotifyLikes">
                <span className="caption">Spotify</span>
                <span className="dot"></span>
                <span className="dotLikes">700,000 likes</span>
                <span className="dot"></span>
                <span className="time">4 hr 35 min</span>
              </div>
            </div>
          </div>
          <div className="playlistSongs">
            <div className="playlistIcons">
              <span className="playIcon">
                <PlayIcon />
              </span>
              <div className="OtherIcons">
                <div className="heartIcon">
                  <HeartIcon />
                </div>
                <div className="elipses"></div>
              </div>
            </div>
            <ul className="Songs">
              <li>
                <div className="songIcon"></div>
                <div className="songInfo">
                  <h3>Next</h3>
                  <span>Emily Rubye</span>
                </div>
                <div className="songTime">
                  <span>2.14</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playlist;
