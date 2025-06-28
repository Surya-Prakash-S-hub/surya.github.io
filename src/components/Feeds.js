import React from "react";
import CustomizedRating from "./FormInputs/FavFeed";
import RatingFeed from "./FormInputs/RatingFeed";

function Feeds(props) {
  function changeStyle(e) {
    let box = document.querySelector(".feedbackBox");
    box.classList.add("overFeed");
  }
  function normalStyle(e) {
    let box = document.querySelector(".feedbackBox");
    box.classList.remove("overFeed");
  }
  return (
    <>
      <div id="root" className="content">
        <div
          onMouseOver={changeStyle}
          onMouseOut={normalStyle}
          className="feedbackBox"
        >
          <div className="feedHeading">
            <div className="name">
              <span>
                <h3>{props.name}</h3>
              </span>{" "}
            </div>
            <div className="time">{props.time}</div>
          </div>
          <div className="feedContent">
            <div className="mainContent">{props.content}</div>
          </div>
          <div className="feedRating">
            <div className="anime">
              <RatingFeed rate={props.howdy} />
            </div>
            <div className="likeFeed">
              <CustomizedRating />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feeds;
