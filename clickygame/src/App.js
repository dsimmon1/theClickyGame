import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Main from "./components/Main";
import Game from "./components/Game"

const App = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/about" component={About} />
      <Main />
      <Game />
      <Footer />
    </div>
  </Router>;

export default App;
