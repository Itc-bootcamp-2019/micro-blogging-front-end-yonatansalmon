import React from "react";
import TweetList from "./TweetList";

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

  handleSubmit = event => {
    const onHandleTweet = this.props.onHandleTweet;
    event.preventDefault();
    onHandleTweet(this.state.tweet);
  };

  handleInputChange = event => {
    this.setState({ tweet: { content: event.target.value } });
  };

  render() {
    let tweetLength = this.state.tweet.content.length;

    return (
      <div>
        <textarea
          className="textbox"
          onChange={this.handleInputChange}

        ></textarea>
        {tweetLength > 140 && (
          <div className="tooManyChars">
            The tweet can't contain more than 140 chars.
          </div>
        )}
        <button
          className="tweet-button"
          onClick={this.handleSubmit}
          disabled={tweetLength > 140}
        >
          Tweet
        </button>
      </div>
    );
  }
}

export default TextBox;
