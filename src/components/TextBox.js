import React from 'react';
import TweetList from "./TweetList"



class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: "",
            
           
        }
    }

    handleSubmit = (event) => {
        const onHandleTweet = this.props.onHandleTweet
        event.preventDefault();
        onHandleTweet(this.state.textInput)


    }


    handleInputChange = (event) => {
        this.setState({
            textInput: event.target.value,
       
        })
    }

    render() {
        return (

            <form>
                <textarea className="textbox" onChange={this.handleInputChange} maxLength="140" ></textarea>
                <button className="tweet-button" onClick={this.handleSubmit}>Tweet</button>

            </form>
        )
    };
}


export default TextBox