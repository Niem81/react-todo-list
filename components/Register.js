import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import * as actions from '../actions';
import {hashHistory} from 'react-router';
import {PropTypes} from 'prop-types';

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.authenticated) {
      hashHistory.push('/profileDashboard');
    }
  }

  componentWillRecieveProps(nextProps) {
    if (nextProps.authenticated) {
      hashHistory.push('/profileDashboard');
    }
  }

  handleFormSubmit({email, password}) {
    this.props.signInUser({email,password});
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <div className="container">
        <header className="navbar bg-primary">
          <span className="navbar-text">Login Page</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <Field name="email" component={email =>
              <div>
                <input type="text" {...email} placeholder="Username"/>
                {email.touched && email.error && <span>{email.error}</span>}
              </div>
            }/>
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <Field name="username" component={username =>
              <div>
                <input type="text" {...username} placeholder="Username"/>
                {username.touched && username.error && <span>{username.error}</span>}
              </div>
            }/>
          </div>
          <div>
            <label>Password</label>
            <Field name="password" component={password =>
              <div>
                <input type="password" {...password} placeholder="Password"/>
                {password.touched && password.error && <span>{password.error}</span>}
              </div>
            }/>
          </div>
          {error && <strong>{error}</strong>}
          <div>
            <button type="submit" className="btn btn-primary">Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {errorMessage: state.auth.error, authenticated:state.auth.authenticated};
}

export default reduxForm({form: 'register'})(connect(mapStateToProps, actions)(Register));
