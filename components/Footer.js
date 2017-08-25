import React, {Component} from 'react';
import Link from 'react-router';

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navHeader">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">Grandmas Tips</Link>
        <div className="collapse navbar-collapse justify-content-end" id="navHeader">
          <div className="navbar-nav nav-fill">
            <Link to="/signup" className="nav-item nav-link">Register</Link>
            <Link to="/login" className="nav-item nav-link">Login</Link>
          </div>
        </div>
      </nav>
    );
  }
}
