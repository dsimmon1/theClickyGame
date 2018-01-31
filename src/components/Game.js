import React, { Component } from "react";
import image from "./data.json";
import "./Game.css";
import Navpills from "./Navpills";
import Main from "./Main";

const shuffle = require('shuffle-array');

let images = image;
for (var i = 0; i < image.length; i++) {
    images[i] = image[i].image;
}
let useImage = shuffle(images);
let urls = [];


class Game extends Component {

    state = {
        score: 0,
        totalScore: 0,
        loss: ""
    }


    increaseTotal = () => {
        if (this.state.score >= this.state.totalScore) {
            this.setState({ totalScore: this.state.totalScore + 1 });
        }
    }

    getImage = (event) => {
        let useImage = shuffle(images);

        let url = event.currentTarget.dataset.url;
        for (var k = 0; k < urls.length; k++) {
            if (url === urls[k]) {
                urls = [];
                this.setState({ loss: "This has already been clicked. GAME OVER!" });
                this.setState({ score: 0 });


            } else {
                this.setState({ loss: "" });
                this.setState({ score: this.state.score + 1 });
                this.increaseTotal();
            }
        }
        urls.push(url);
        console.log(urls);

        this.forceUpdate();
    }

    render() {
        return ( 
        	< div >
            < Navpills score = { this.state.score } loss = { this.state.loss } totalScore = { this.state.totalScore }/> 
     		
            < div className = "game" >
            < Main / >
            
            < div className = "pictures" >
            < div className = "picture" >
            < img data-url = { useImage[0] } alt = "Game of Thrones" src = { useImage[0] } onClick = { this.getImage }/> 
            < img data-url = { useImage[1] } alt = "Game of Thrones" src = { useImage[1] } onClick = { this.getImage }/> 
            < img data-url = { useImage[2] } alt = "Game of Thrones" src = { useImage[2] } onClick = { this.getImage }/>
            </div>

            < div className = "picture" >
            < img data-url = { useImage[3] } alt = "Game of Thrones" src = { useImage[3] } onClick = { this.getImage }/>
            < img data-url = { useImage[4] } alt = "Game of Thrones" src = { useImage[4] } onClick = { this.getImage }/> 
            < img data-url = { useImage[5] } alt = "Game of Thrones" src = { useImage[5] } onClick = { this.getImage }/>
            </div>

            < div className = "picture" > 
            < img data-url = { useImage[6] } alt = "Game of Thrones" src = { useImage[6] } onClick = { this.getImage }/> 
            < img data-url = { useImage[7] } alt = "Game of Thrones" src = { useImage[7] } onClick = { this.getImage }/>
            < img data-url = { useImage[8] } alt = "Game of Thrones" src = { useImage[8] } onClick = { this.getImage }/>  
			</div>

			< div className = "picture">
         	< img data-url = { useImage[9] } alt = "Game of Thrones" src = { useImage[9] } onClick = { this.getImage }/>
         	< img data-url = { useImage[10] } alt = "Game of Thrones" src = { useImage[10] } onClick = { this.getImage }/> 
         	< img data-url = { useImage[11] } alt = "Game of Thrones" src = { useImage[11] } onClick = { this.getImage }/> 
         	< /div> 

         	< /div>
         	< /div>
         	< /div>

        )
    }
}

export default Game;