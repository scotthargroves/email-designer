import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      
		  <div className='browser-window'>
			  
			  <div className='top-bar'>
			    <div className='circles'>
            <div className="circle circle-red"></div>
            <div className="circle circle-yellow"></div>
            <div className="circle circle-green"></div>
	        </div>
        </div>
        
        <div className='header'>To: Desk.com Support &rarr; <strong>support@desk.com</strong> </div>
        
        <div className='content'>
          hello
        </div>
        
        <div className='clear'></div>
        
      </div>
      
      

    );
  }
}

export default App;
