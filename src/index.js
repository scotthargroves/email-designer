import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var tasksList = ["Task One", "Task Two", "Task 3"];

var tasks = localStorage.getItem('storedTasks');

if(tasks) {
  tasksList = JSON.parse(tasks);
}

ReactDOM.render(
  <App tasks={tasksList} />,
  document.getElementById('root')
);
