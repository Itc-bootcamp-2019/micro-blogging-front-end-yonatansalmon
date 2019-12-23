import React from "react";
import MyContext from "../context/MyContext";

class TweetList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyContext.Consumer>
        {({ tweets }) => (
          <div>
            {tweets.map(tweet => (
              <div key={tweet.date + tweet.userName} className="tweet">
                <div className="user-date">
                  <div className="grey">{tweet.userName}</div>
                  <div className="grey">{tweet.date}</div>
                </div>
                  <div className="tweet-message">{tweet.content}</div>             
              </div>
            ))}
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default TweetList;
