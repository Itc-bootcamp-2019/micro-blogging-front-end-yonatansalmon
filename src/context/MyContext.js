import React from "react";

const MyContext = React.createContext({
  tweets: [],
  loading: null,
  addTweet: tweet => {}
});

export default MyContext;
