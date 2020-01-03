import React from "react";
import { Link, BrowserRouter as Router, NavLink } from "react-router-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleClick } = this.props;
    return (
      <>
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-title">Error</div>
            <div className="modal-content">
              Please choose a user profile before posting a tweet.
            </div>
            <Link
              to="/profile"
              className="profile-menu-modal"
              onClick={handleClick}
            >
              Profile Page
            </Link>
          </div>
        </div>
        )}
      </>
    );
  }
}

export default Modal;
