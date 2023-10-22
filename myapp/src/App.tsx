import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Alert} from './Alert';

function App() {
  return (
    <div className="App">
      <Alert heading = "success" closable> Everythings works good! </Alert>
    </div>
  );
}

export default App;
