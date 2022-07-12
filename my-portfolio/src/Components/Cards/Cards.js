import React from "react";
import "./Card.css";

function Cards({ title, body, imageUrl, projectUrl, githubUrl }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
        "Card Divs"
      </div>
      <div className="card-content">
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>

      <div className="buttony">
        {/* need to add <a></a> tag with href to project url */}
        <button className="buttonyText">More ...</button>
      </div>
    </div>
  );
}

export default Cards;
