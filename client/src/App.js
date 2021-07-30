import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';


function App() {
  return (
    <div className="App wrapper h-screen">
      <Header/>
      <About/>
    </div>
  );
}

export default App;
