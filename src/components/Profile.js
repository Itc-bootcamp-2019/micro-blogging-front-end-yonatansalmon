import React from "react";
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router,
  useParams
} from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: window.localStorage.getItem("Username")
    };
  }

  handleUsernameSubmit = event => {
    event.preventDefault();
    let username = this.state.userName;
    window.localStorage.setItem("Username", username);
  };

  handleProfileInput = event => {
    this.setState({ userName: event.target.value });

  };

  render() {
    return (
      <div>
      <form>
        <h1 className="profile-title">Profile</h1>
        <div className="users-title">User Name</div>
        <input
          className="profile-input"
          type="text"
          onChange={this.handleProfileInput}
        ></input>
        <button className="profile-button" onClick={this.handleUsernameSubmit}>
          Save
        </button>
      </form>
      <h3 className="current-profile">Current profile: <p className ="myCurrentProfile">{this.state.userName} </p> </h3>
      </div>
    );
  }
}

export default Profile;
