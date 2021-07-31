import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/HeaderL/HeaderL';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Header />
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Work} path="/work" />
          <Route component={Contact} path="/contact" />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
