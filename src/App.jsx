import React, { Component } from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
