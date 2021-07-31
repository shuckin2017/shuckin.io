import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './pages/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Header />
          <div className="wrapper h-screen">
            <Route component={Home} path="/" exact />
            <Route component={About} path="/about" />
            <Route component={Project} path="/project" />
            <Route component={Contact} path="/contact" />
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
