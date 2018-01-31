import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Game from "./components/Game"

const App = (props) =>
  <Router>
    <div>
      <Route exact path="/about" component={About} />
      <Game />
      <Footer />
    </div>
  </Router>;

export default App;
