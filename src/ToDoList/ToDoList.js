import React from 'react';
// import Abc from './Abc';
import './ToDoList.scss';

function ToDoList() {
  
    return (
      <div className="container">
        <div className="h1">To Do App</div>
        <div className="input-block">
          <input
            className="to-do-input"
            type="text"
            placeholder="Fill Your Goal"
          />
          <button>Add</button>
        </div>
        <div className="to-do-list">
          <ul>
            <li>dasfsd</li>
          </ul>
        </div>
      </div>
    );
  
}

export default ToDoList;
