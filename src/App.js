import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Profile from "./components/Profile";
import TweetList from "./components/TweetList";
import { getTweet, postTweet } from "./lib/api";
import MyContext from "./context/MyContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: true,
      addTweet: this.onHandleTweet.bind(this)
    };
  }

  allTweets = () =>
    getTweet().then(response =>
      this.setState({ tweets: response.data.tweets, loading: false })
    );

  componentDidMount() {
    this.allTweets();
    this.interval = setInterval(() => this.allTweets(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onHandleTweet = tweet => {
    tweet.userName = window.localStorage.getItem("Username");
    tweet.date = new Date().toISOString();
    postTweet(tweet)
      .then(response => {
        const { tweets } = this.state;
        this.setState({ tweets: [tweet, ...tweets] });
      })
      .catch(error => alert("ERROR"));
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <MyContext.Provider value={this.state}>
                <TextBox />
                {loading && <div className="tweet">loading...</div>}
                {!loading && <TweetList />}
              </MyContext.Provider>
            </Route>
            <Route path="/profile">
              <Profile onHandleTweet={this.onHandleTweet}></Profile>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
