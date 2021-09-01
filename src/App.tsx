import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  const [data, setData] = useState('');

  const onClick = () => {
    setData('');
    console.log('hack');
  }

  useEffect(() => {
    setData(logo);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={data} className="App-logo" alt="logo" />
        <p onClick={() => { onClick(); }}>
          Edit <code>src/App.tsx</code> and save to reload.
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
  );
}

export default App;
