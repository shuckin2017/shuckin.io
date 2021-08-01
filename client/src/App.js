import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/HeaderL/HeaderL';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Service from './pages/Service';
import Skills from './pages/Skills';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Header />
          <Home/>
          <About/>
          <Route component={Home} path="/home" />
          <Route component={About} path="/about" />
          <Route component={Service} path="/service" />
          <Route component={Skills} path="/skills" />
          <Route component={Portfolio} path="/portfolio" />
          <Route component={Contact} path="/contact" />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
