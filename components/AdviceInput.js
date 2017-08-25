import React, {Component} from 'react';

class AdviceInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addAdvice(this.state.inputText);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Ingresa nuevo consejo"
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)}
          />
          <input type="submit" text="Submit" />
        </form>
      </div>
    );
  }
}

export default AdviceInput;
