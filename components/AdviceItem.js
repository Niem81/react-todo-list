import React, { Component } from 'react';

class AdviceItem extends Component {

  handleComplete() {
    this.props.actions.completeConsejo(this.props.advice.id);
  }

  handleDelete() {
    this.props.actions.deleteAdvice(this.props.advice.id);
  }

  render() {
    return (
      <li>
        <div>{this.props.advice.text}</div>
        <button onClick={this.handleComplete.bind(this)}>Mark as complete</button>
        <button onClick={this.handleDelete.bind(this)}>Delete Advice</button>
      </li>
    );
  }
}

export default AdviceItem;
