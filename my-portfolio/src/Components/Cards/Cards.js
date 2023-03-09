import React from "react";
import "./Card.css";

function Cards({ title, body, imageUrl, projectUrl, githubUrl }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} width="350px" height="300px" alt="" />
        {/* "Card Divs" */}
      </div>
      <div className="card-content">
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>

      {/* <div className="buttony">
        <button className="buttonyText">More ...</button>
      </div> */}
    </div>
  );
}

export default Cards;
