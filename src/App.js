import React from 'react';
import { Switch, Link, Route, BrowserRouter as Router, useParams } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import TextBox from "./components/TextBox"
import Profile from "./components/Profile"
import TweetList from "./components/TweetList"
import ls from 'local-storage'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [{}]
      
      
      
       }
  // window.localStorage.getItem("Tweets") ? JSON.parse(window.localStorage.getItem("Tweets")):[]
   

  }


  onHandleTweet = (tweet) => {
    tweet.userName = "Yonatan";
    tweet.date = (new Date()).toISOString();
    let savedTweets = this.state.tweets;
    const allTweets = [tweet, ...savedTweets]
    window.localStorage.setItem("Tweets", JSON.stringify(allTweets))
    this.setState((prevState) => {
      return { tweets: allTweets }
    })
  }

  render() {

    return (

      <Router>
        <div className="App">

          <Navbar></Navbar>

        </div>

        <Switch>
          <Route exact path="/" >
            <TextBox tweets={this.state.tweets} onHandleTweet={this.onHandleTweet}></TextBox>
            <TweetList tweets={this.state.tweets} />
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
        </Switch>
      </Router>

    );
  }
}

export default App;
