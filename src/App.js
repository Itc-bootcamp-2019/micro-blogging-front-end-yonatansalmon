import React from 'react';
import { Switch, Link, Route, BrowserRouter as Router, useParams } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import TextBox from "./components/TextBox"
import Profile from "./components/Profile"
import TweetList from "./components/TweetList"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    }

  }

  onHandleTweet = (tweet) => {
    this.setState((prevState) => {
      return { tweets: [tweet, ...prevState.tweets] }
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
