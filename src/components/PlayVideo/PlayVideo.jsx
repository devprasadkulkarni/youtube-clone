import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Channel</h3>
      <div className="play-video-info">
        <p>Views &bull; Time of Upload</p>
        <div>
          <span>
            <img src={like} alt="" />
            Like Count
          </span>
          <span>
            <img src={dislike} alt="" />
            Dislike Count
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Channel Name</p>
          <span>Subscriber Count</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Video Description</p>
        <hr />
        <h4>Comment Count</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Username <span>Time</span>
            </h3>
            <p>User Comment</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>Like Count</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
