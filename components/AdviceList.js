import React, { Component } from 'react';
import AdviceItem from './AdviceItem';

class AdviceList extends Component {

  render() {
    return (
      <ul>
        {
          this.props.advices.map((advice) => {
            return <AdviceItem key={advice.id} advice={advice} actions={this.props.actions}/>;
          })
        }
      </ul>
    )
  }
}

export default AdviceList;
