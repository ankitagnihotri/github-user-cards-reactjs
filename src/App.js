import React, { Component } from 'react';
import './App.css';
import GitForm from './GitForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub User Search</h1>
        </header>
       <GitForm />
      </div>
    );
  }
}

export default App;
