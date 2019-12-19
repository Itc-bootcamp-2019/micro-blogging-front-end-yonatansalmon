import React from "react";
import TweetList from "./TweetList";
import MyContext from "../context/MyContext";

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
      console.log("from handleInputChange", this.state.tweet);
    });
  };

  render() {
    const { tweet } = this.state;
    return (
      <MyContext.Consumer>
        {({ addTweet, tweets }) => (
          <div>
            <textarea
              className="textbox"
              onChange={this.handleInputChange}
              maxLength="140"
            ></textarea>
            <button className="tweet-button" onClick={() => addTweet(tweet)}>
              Tweet
            </button>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default TextBox;
