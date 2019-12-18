import React from "react";

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
    this.setState({ tweet: { content: event.target.value } });
  };

  render() {
    return (
      <MyAppContext.Consumer>
        {context => (
          <form>
            <textarea
              className="textbox"
              onChange={this.handleInputChange}
              maxLength="140"
            ></textarea>
            <button
              className="tweet-button"
              onClick={() => context.addTweet(tweet)}
            >
              Tweet
            </button>
          </form>
        )}
      </MyAppContext.Consumer>
    );
  }
}

export default TextBox;
