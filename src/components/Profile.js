import React from "react";

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
    console.log(this.state.userName);
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
          <button
            className="profile-button"
            onClick={this.handleUsernameSubmit}
          >
            Save
          </button>
        </form>
        <h3 className="current-profile">Current profile: <h3 className ="myCurrentProfile">{this.state.userName} </h3> </h3>
      </div>
    );
  }
}

export default Profile;
