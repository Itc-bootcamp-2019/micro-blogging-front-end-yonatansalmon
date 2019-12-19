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
      userName: ""
    };
  }

  handleUsernameSubmit = event => {
    event.preventDefault();
    let username = this.state.userName;
    window.localStorage.setItem("Username", username);
  };

  handleProfileInput = event => {
    this.setState({ userName: event.target.value });
    console.log(this.state.userName);
  };

  render() {
    return (
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
    );
  }
}

export default Profile;
