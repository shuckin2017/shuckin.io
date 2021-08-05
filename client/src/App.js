import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/HeaderL/HeaderL";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Qualification from "./pages/Qualification";
import Project from "./pages/Project";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <div className="App" data-theme="dark">
                    <Header />
                    <Home />
                    <About />
                    <Skills />
                    <Qualification />
                    <Services />
                    <Portfolio />
                    <Project />
                    <Contact />
                    <Footer />
                    <Route component={Home} path="/home" />
                    <Route component={About} path="/about" />
                    <Route component={Services} path="/services" />
                    <Route component={Skills} path="/skills" />
                    <Route component={Qualification} path="/qualification" />
                    <Route component={Portfolio} path="/portfolio" />
                    <Route component={Contact} path="/contact" />
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
