import React from "react";
import imageOfMe from "../../imageOfMe.jpg";

function Intro() {
  return (
    <div className="ColumnsForIntro">
      <div className="ColumnLeft">
        <h1>Hi, I am Rajesh</h1>
        <p>I used to push pills and now I git push</p>
        <p>Having worked in the pharmaceutical industry I am...</p>
      </div>
      <div className="ColumnRight">
        <img src={imageOfMe} className="imageOfMe" alt="myself" />
      </div>
    </div>
  );
}

export default Intro;
