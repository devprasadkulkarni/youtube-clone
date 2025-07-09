import React from "react";
import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <div className="feed">
      <Link to={`video/20/2345`} className="card">
        <img src={thumbnail1} alt="thumbnail" />
        <h2>Video Name</h2>
        <h3>Channel Name</h3>
        <p>Views Count &bull; Days Ago</p>
      </Link>
    </div>
  );
};

export default Feed;
