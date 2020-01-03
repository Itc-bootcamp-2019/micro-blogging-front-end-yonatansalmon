import React from "react";

class TweetList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tweets } = this.props;
    return (
      <div>
        {tweets.map(tweet => {
          return (
            <div className="tweet">
              <div className="user-date">
                <div  className="grey">{tweet.userName}</div>
                <div  className="grey">{tweet.date}</div>
              </div>
              <br></br>
              <div className="tweet-message">{tweet.content}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TweetList;
