import React, { Component } from 'react';
import {AddNewTask} from './addnewtask';
import {ToDoAppList} from './todoapplist';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {tasks: props.tasks}; 
    this.updateList = this.updateList.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  
  updateList (text) {
    var updatedTasks = this.state.tasks;
    updatedTasks.unshift(text);
    this.setState({tasks: updatedTasks});
    this.updateLocalStorage(updatedTasks);
  }
  
  removeTask(text) {
    var updatedTasks = this.state.tasks;
    updatedTasks.splice(updatedTasks.indexOf(text), 1);
    this.setState({tasks: updatedTasks});
    this.updateLocalStorage(updatedTasks);
  }
  
  updateLocalStorage(updatedTasks) {
    console.log("Tasks Updated");
    localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
  }
  
  render() {
    return (
      <div>
        <h3>Todo App</h3>
        <AddNewTask updateList={this.updateList}/>
        <ToDoAppList tasks={this.state.tasks} remove={this.removeTask}/>
      </div>
    );
  }
}

export default App;
