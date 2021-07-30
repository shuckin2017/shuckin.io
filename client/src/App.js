import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App wrapper h-screen">
          <Header/>
          <Route components={Home} path="/" exact/>
          <Route components={About} path="/about" />
          <Route components={Project} path="/project" />
          <Route components={Contact} path="/contact" />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
