import React, { useState } from "react";
import FormArea from "./FormArea";
import Feeds from "./Feeds";

function MainContent() {
  const [feeds, setFeeds] = useState([]);

  function returnValueFeeds(value) {
    setFeeds((preValue) => {
      return [...preValue, value];
    });
  }

  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="inputArea">
            <div className="inputPicker">
              <FormArea onGet={returnValueFeeds} />
            </div>
          </div>
          <div className="outputArea">
            <div className="headTopic">
              <div className="topic">Feedbacks</div>
            </div>
            <div className="contentFeedback">
              {feeds.map((value, index) => (
                <Feeds
                  key={index}
                  name={value.username}
                  content={value.feedback}
                  howdy={value.rating}
                  time={value.timing}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainContent;
