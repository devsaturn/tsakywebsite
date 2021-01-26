import React from 'react';
import './App.scss';
import Navigation from './navigation/Navigation';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HomePage/>
    </div>
  );
}

export default App;
