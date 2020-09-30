import React from "react";
import { ReactComponent as PlayIcon } from "../svgs/playIcon.svg";
import { loginUrl } from "../spotify";

function PlayCards(props) {
  const data = [
    {
      id: 101,
      name: "Focus",
      boxId: 1,
      title: "Concentrate",
      description: "Minimalism, electronica and modern classical to...",
      img:
        "https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340_1280.jpg",
    },
    {
      id: 101,
      name: "Focus",
      boxId: 1,
      title: "Peaceful Piano",
      description: "Relax and indulge with beautiful piano pieces.",
      img:
        "https://cdn.pixabay.com/photo/2017/08/01/12/15/piano-2564908__340.jpg",
    },
    {
      id: 101,
      name: "Focus",
      boxId: 1,
      title: "While Noise",
      description: "Welcome to the soothing hum...",
      img:
        "https://cdn.pixabay.com/photo/2017/05/21/15/14/balloon-2331488__340.jpg",
    },
    {
      id: 101,
      name: "Focus",
      boxId: 1,
      title: "Peaceful Clouds",
      description: "Enter a new world in the skies...",
      img:
        "https://cdn.pixabay.com/photo/2016/05/21/22/15/light-bulb-1407610__340.jpg",
    },
    {
      id: 101,
      name: "Focus",
      boxId: 1,
      title: "Li-Fo Beats",
      description: "Beats to relax and focus",
      img:
        "https://cdn.pixabay.com/photo/2017/11/16/12/12/headphones-2954343__340.jpg",
    },
    {
      id: 101,
      name: "Focus",
      boxId: 1,
      title: "Deep Focus",
      description: "Keep calm and focus with ambient and post-rock music.",
      img:
        "https://cdn.pixabay.com/photo/2019/12/04/09/30/man-4672229_960_720.jpg",
    },
    {
      id: 102,
      name: "Mood",
      boxId: 2,
      title: "Beautiful Songs",
      description: "Songs so beautiful, they'll stop you in your tracks",
      img:
        "https://cdn.pixabay.com/photo/2017/06/14/23/15/soap-bubble-2403673__340.jpg",
    },
    {
      id: 102,
      name: "Mood",
      boxId: 2,
      title: "Fun times",
      description: "Music that makes you want to dance the night away",
      img:
        "https://cdn.pixabay.com/photo/2017/01/16/15/17/hot-air-balloons-1984308__340.jpg",
    },
    {
      id: 102,
      name: "Mood",
      boxId: 2,
      title: "Wholesome",
      description: "Lovely pop filled fun.",
      img:
        "https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515__340.jpg",
    },
    {
      id: 102,
      name: "Mood",
      boxId: 2,
      title: "Take it in",
      description: "Unravel all the wonderful memories.",
      img:
        "https://cdn.pixabay.com/photo/2015/06/28/12/20/happiness-824419__340.jpg",
    },
    {
      id: 102,
      name: "Mood",
      boxId: 2,
      title: "Unwind",
      description: "Enter a carefree world with no rules.",
      img:
        "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
    },
    {
      id: 102,
      name: "Mood",
      boxId: 2,
      title: "Easy 10s",
      description: "Unwind to these easy classics from the 2010s.",
      img:
        "https://cdn.pixabay.com/photo/2016/11/29/04/16/beach-1867271__340.jpg",
    },
    {
      id: 103,
      name: "Sleep",
      boxId: 3,
      title: "Rainy Days",
      description: "High Altitude Samples.",
      img:
        "https://cdn.pixabay.com/photo/2016/08/20/03/44/bench-1606824__340.jpg",
    },
    {
      id: 103,
      name: "Sleep",
      boxId: 3,
      title: "Reminisce",
      description: "Warm blankets and deep sleep music collectives.",
      img:
        "https://cdn.pixabay.com/photo/2020/05/16/20/30/dog-5179118__340.jpg",
    },
    {
      id: 103,
      name: "Sleep",
      boxId: 3,
      title: "Fond Memories",
      description: "Various Artists.",
      img:
        "https://cdn.pixabay.com/photo/2015/12/08/00/30/window-view-1081788_1280.jpg",
    },
    {
      id: 103,
      name: "Sleep",
      boxId: 3,
      title: "Relax and let go",
      description: "Soft music for sleepy people and animals.",
      img:
        "https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697__340.jpg",
    },
    {
      id: 103,
      name: "Sleep",
      boxId: 3,
      title: "Intense nostalgia",
      description: "Guided Sleep Meditation and Sleep Hypnosis.",
      img:
        "https://cdn.pixabay.com/photo/2020/07/14/22/10/woman-5405866__340.jpg",
    },
    {
      id: 103,
      name: "Sleep",
      boxId: 3,
      title: "Take a breather",
      description: "Calm piano music for sleeping.",
      img:
        "https://cdn.pixabay.com/photo/2015/03/26/09/43/living-room-690174__340.jpg",
    },
    {
      id: 104,
      name: "Soundtrack your home",
      boxId: 4,
      title: "Home Workout",
      description: "Bring the gym to you and work up a sweat.",
      img:
        "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741__340.jpg",
    },
    {
      id: 104,
      name: "Soundtrack your home",
      boxId: 4,
      title: "Your Kitchen Sterio",
      description: "Soundtrack to liven up the kitchen experience.",
      img:
        "https://cdn.pixabay.com/photo/2017/04/19/23/39/hdr-2244067__340.jpg",
    },

    {
      id: 104,
      name: "Soundtrack your home",
      boxId: 4,
      title: "Summer Garden",
      description: "Perfect music for a day in the garden.",
      img:
        "https://cdn.pixabay.com/photo/2017/08/15/12/37/tomato-2643774__340.jpg",
    },
    {
      id: 104,
      name: "Soundtrack your home",
      boxId: 4,
      title: "Precious Moments",
      description: "Make your day more uplifing by singing.",
      img:
        "https://cdn.pixabay.com/photo/2017/12/29/01/33/happy-3046564_1280.jpg",
    },
    {
      id: 104,
      name: "Soundtrack your home",
      boxId: 4,
      title: "Dance Away",
      description: "Bring the festival vibes to wherever you are.",
      img:
        "https://cdn.pixabay.com/photo/2018/04/13/08/06/father-3315817__340.jpg",
    },
    {
      id: 104,
      name: "Soundtrack your home",
      boxId: 4,
      title: "Garden Indie",
      description: "Nourish ears with selection of hand-picked Indie.",
      img:
        "https://cdn.pixabay.com/photo/2017/07/25/19/43/pink-2539310__340.jpg",
    },
  ];

  const foundPlayLists = data.filter((play) => play.boxId === props.boxId);
  return (
    <div>
      <div className="otherBoxes">
        {foundPlayLists.map((play, id) => (
          <a href={loginUrl} style={{ textDecoration: "none" }}>
            <div className="box" key={id}>
              <div className="boxImg">
                <img src={play.img} alt=""></img>
              </div>
              <div className="boxText">
                <h3>{play.title}</h3>
                <span className="boxComment">{play.description}</span>
              </div>
              <span className="playIcon">
                <PlayIcon />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default PlayCards;
