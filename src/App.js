import React from "react";
import {Switch,Link,Route,BrowserRouter as Router,useParams} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Profile from "./components/Profile";
import TweetList from "./components/TweetList";
import { getTweet, postTweet } from "./lib/api";
import Modal from "./components/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: true,
      displayModal:true
    };
  }

  componentDidMount() {
    getTweet().then(response =>
      this.setState({ tweets: response.data.tweets, loading: false })
    );
  }


  onHandleTweet = tweet => {
    tweet.userName = window.localStorage.getItem("Username");
    tweet.date = new Date().toISOString();
    if (tweet.userName) {
      postTweet(tweet)
        .then(response => {
          const { tweets } = this.state;
          this.setState({ tweets: [tweet, ...tweets] });
        })
        .catch(error => {
          alert("ERROR: Tweet Empty");
        });
    } else {
      this.setState({ displayModal: false });
    }
  };

  render() {
    const { displayModal, loading, tweets } = this.state;
    return (
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <TextBox tweets={tweets} onHandleTweet={this.onHandleTweet} />
              {loading && <div className="tweet">loading...</div>}
              {!loading && <TweetList tweets={tweets} />}
            </Route>
            <Route path="/profile">
              <Profile onHandleTweet={this.onHandleTweet}></Profile>
            </Route>
          </Switch>
          {!displayModal && (
            <Modal handleClick={() => this.setState({ displayModal: true })} />
          )}
        </Router>
      </div>
    );
  }
}

export default App;
