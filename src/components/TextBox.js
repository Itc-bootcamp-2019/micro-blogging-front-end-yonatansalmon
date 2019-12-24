import React from "react";
import TweetList from "./TweetList";
import MyContext from "../context/MyContext";
import Profile from "./Profile";

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: {
        content: "",
        date: "",
        userName: ""
      }
    };
  }

  handleInputChange = event => {
    this.setState({ tweet: { content: event.target.value } }, () => {
    });
  };

  render() {
    let tweetLength = this.state.tweet.content.length;
    const { tweet } = this.state;
    return (
      <MyContext.Consumer>
        {({ addTweet }) => (
          <div>
            <textarea
              className="textbox"
              onChange={this.handleInputChange}
              length="140"
              placeholder="What do you have in mind..."
             
            >
            </textarea>
            {tweetLength > 140 && (
              <div className="tooManyChars">
                The tweet can't contain more than 140 chars.
              </div>
            )}
            <button
              className="tweet-button"
              disabled={tweetLength > 140}
              onClick={() => addTweet(tweet)}
            >
              Tweet
            </button>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default TextBox;
