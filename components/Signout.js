import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Signout extends Component {
  componentWillMount() {
    this.props.signOutUser();
    setTimeout(() => {
      hashHistory.push('/');
    }, 3000);
  }

  render() {
    return <div>Come back Soon!</div>;
  }
}

export default connect(null, actions)(Signout);
