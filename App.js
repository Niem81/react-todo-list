import React, {Component} from 'react';
import AdviceInput from './AdviceInput';
import AdviceList from './AdviceList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import UserInfo from './UserInfo';

class App extends Component {

  render () {
    return (
      <div>
        <h1>Consejos de Labuela</h1>
        <UserInfo user={this.props.user} actions={this.props.actions}/>
        <AdviceInput addAdvice={this.props.actions.addAdvice}/>
        <AdviceList actions={this.props.actions} advices={this.props.advices}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
