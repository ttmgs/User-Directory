import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


document.getElementById("name").addEventListener("click", function() {
  ReactDOM.render(<App />, document.getElementById('name'));
})
