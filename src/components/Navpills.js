import React from "react";
import "./Header.css";


const Navpills = (props) => (
<ul className="nav">
  <li>
    <h4>Memory Game</h4>
  </li>
  <li className="item2">
    Score: {props.score} | Top Score: {props.totalScore}
  </li>

  <li>
	{props.loss}
  </li>
</ul>
  );

export default Navpills;