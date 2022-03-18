import React from 'react';
import './App.css';
import Login from './components/login';
function App() {
  return [
    <div class="main">
      <h1 class="headings">BAAP<br/></h1>
      </div>,
      <div class="side">
      <h2>Backend As A Platfrom</h2>
      </div>,
      <div class="paragraph">
      <p> A Low-code application development
platform specifically for back-ends based on the technologies Node.js, Express, REST, GraphQL and MongoDB.</p>
      </div>,

    <div className="App">
      <Login />
      
    </div>
    

    
    
  ]
}

export default App;
