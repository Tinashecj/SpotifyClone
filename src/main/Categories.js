import React from "react";
import { ReactComponent as PlayIcon } from "../svgs/playIcon.svg";
import PlayCards from "./PlayCards";
import { loginUrl } from "../spotify";

function Categories() {
  const storeData = [
    {
      id: 1,
      name: "Focus",
      tageline: "Music to help you concentrate.",
    },
    {
      id: 2,
      name: "Mood",
      tageline: "Playlist to match your mood.",
    },
    {
      id: 3,
      name: "Sleep",
      tageline: "",
    },
    {
      id: 4,
      name: "Soundtrack your home",
      tageline: "",
    },
  ];
  return (
    <div className="innerPage">
      <div className="boxes">
        <h1 className="title">Uniquely yours</h1>
        <a href={loginUrl} style={{ textDecoration: "none" }}>
          <div className="box">
            <div className="boxImg">
              <img
                src="https://cdn.pixabay.com/photo/2018/08/26/13/16/forest-3632206__340.jpg"
                alt=""
              ></img>
            </div>
            <div className="boxText">
              <h3>Liked Songs</h3>
            </div>
            <span className="playIcon">
              <PlayIcon />
            </span>
          </div>
        </a>
      </div>
      {storeData.map((allBoxes, id) => (
        <div>
          <div className="boxes" key={id}>
            <h1 className="focusH1">{allBoxes.name}</h1>
            <p className="focusText">{allBoxes.tageline}</p>
            <PlayCards boxId={allBoxes.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
export default Categories;
