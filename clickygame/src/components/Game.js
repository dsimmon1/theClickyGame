import React, { Component } from "react";
import image from "./data.json"; 
import "./Game.css";
const shuffle = require('shuffle-array')

	let images = image;
	for (var i = 0; i < image.length; i++) {
		// images[i]  = image[Math.floor(Math.random()*image.length)];
		images[i] = image[i].image;

	}
	let useImage = shuffle(images);
	console.log(useImage);


class Game extends Component {

state = {
	score: 0,
	totalScore: 0,
	clicked: false 
}

increaseScore = () => {

}

increaseTotal = () => {

}

getImage = () => {

}


render() {
	return (
		<div className="container">
		<div className="picture">
		<img src={useImage[0]} />
		<img src={useImage[1]} />
		<img src={useImage[2]} />
		<img src={useImage[3]} />
		<img src={useImage[4]} />
		<img src={useImage[5]} />
		<img src={useImage[6]} />
		<img src={useImage[7]} />
		<img src={useImage[8]} />
		<img src={useImage[9]} />
		<img src={useImage[10]} />
		<img src={useImage[11]} />
       	</div>
		</div>
		   )
		} 
}

export default Game;