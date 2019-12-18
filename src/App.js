import React from "react";
import {Switch,Link,Route,BrowserRouter as Router,useParams} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Profile from "./components/Profile";
import TweetList from "./components/TweetList";
import { getTweet, postTweet } from "./lib/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: true,
      addTweet: this.onHandleTweet.bind(this)

    };
  }

  componentDidMount() {
    getTweet().then(response =>
      this.setState({ tweets: response.data.tweets, loading: false })
    );
  }

  componentWillUnmount() {}

  onHandleTweet = tweet => {
    tweet.userName = window.localStorage.getItem("Username")
    tweet.date = new Date().toISOString();
    postTweet(tweet).catch(error => alert("ERROR"));
    const { tweets } = this.state;
    this.setState({ tweets: [tweet, ...tweets] });
  };

  render() {
    const { tweets, loading } = this.state;
    return (
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
            <MyAppContext.Provider value={this.state}>
              <TextBox tweets={tweets} onHandleTweet={this.onHandleTweet} />
              {loading && <div className="tweet">loading...</div>}
              {!loading && <TweetList tweets={tweets} />}
              </MyAppContext.Provider>
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
