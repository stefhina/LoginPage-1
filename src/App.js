import React from 'react';
import './App.css';
import Login from './components/login';
function App() {
  return [
    <div class="nav">
      <nav class="navbar">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT US</a>
          </li>
          <li>
            <a href="#contact">DOCS</a>
          </li>
        </ul>
      </nav>
    </div>,
    <div class="main">
      <h1 class="headings">
        BaaP
        <br />
      </h1>
    </div>,
    <div class="side">
      <h2>Backend as a Platfrom</h2>
    </div>,
    <div class="paragraph">
      <div class="text"></div>
      <ul class="option">
        <li>
          <span>
            {' '}
            A Low-code application development platform specifically for
            back-ends based on the technologies Node.js, Express, REST and
            MongoDB.
          </span>
        </li>
      </ul>
    </div>,

    <div className="App">
      <Login />
    </div>,
  ];
}

export default App;
