import logo from './logo.svg';
import './App.css';

import React, { useCallback } from 'react';

import Drawer from '@mui/material/Drawer';

function App() {
  const handleClose = useCallback((event, reason) => {
    console.log(reason);
  }, []);

  return (
      <Drawer onClose={handleClose} open={true}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Drawer>
  );
}

export default App;
