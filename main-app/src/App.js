import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Main App</h1>
        <div id="subapp-container" />
        <nav>
          <Link to="/app1">App 1</Link> |&nbsp;
          <Link to="/app2">App 2</Link>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App; 