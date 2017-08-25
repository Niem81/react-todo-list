import React, { Component } from 'react';

class UserInfo extends Component {

  handleNewId() {
    this.props.actions.createNewUserId();
  }

  handleNewIdIfOdd() {
    this.props.actions.createNewUserIdOdd();
  }

  handleNewIdAsync() {
    this.props.actions.createNewUserIdAsync();
  }

  render() {
    return (
      <li>
        <div>Username: {this.props.user.username}</div>
        <div>Id: {this.props.user.id}</div>
        <button onClick={this.handleNewId.bind(this)}>Update with random ID</button>
        <button onClick={this.handleNewIdIfOdd.bind(this)}>Update only if odd</button>
        <button onClick={this.handleNewIdAsync.bind(this)}>Update async</button>
      </li>
    );
  }
}

export default UserInfo;
