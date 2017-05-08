import React from 'react';

export class AddNewTask extends React.Component {
  constructor () {
    super();
    this.todoSubmitted = this.todoSubmitted.bind(this);
  }
  
  todoSubmitted(event) {
    event.preventDefault();
    var input = event.target.querySelector('input');
    var value = input.value;
    input.value = '';
    this.props.updateList(value);
  }
  
  render() {
    return (
      <form onSubmit={this.todoSubmitted}>
        <input type='text'></input>
      </form>
    );
  }
}