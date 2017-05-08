import React from 'react';
import AddNewTask from './addnewtask.js';
import ToDoAppList from './todoapplist.js';

export class Todo extends React.Component {
  constructor () {
    super(); 
  }
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <AddNewTask />
        <ToDoAppList tasks={this.props.tasks}/>
      </div>
    );
  }
}