import React, { Component } from "react";
import "./style.css";
import NavBar from "../Navbar";
import Header from "../Header";
import Wire from "../Images";
import wires from "../Images/wires.json";

class Game extends Component {
    state = {
        wires,
        instruction: "click on any wire to begin",
        gameScore: 0
    };

    componentDidMount() {
      const imageSet = this.resetGame(this.state.wires);
      this.setState({ wires: this.shuffle(imageSet)});
    };

    //randomly rearranges wire images
    //called by continueGame and loseGame
    shuffle = lastImageSet => {
      let imageSet = lastImageSet.sort(() => {return 0.5 - Math.random() });
      return imageSet;
    };

    //sets all game options back to clicked = false
    //called by loseGame when an element is clicked twice
    resetGame = lastImageSet => {
      let imageSet = lastImageSet.map(wire => {
        wire.clicked = false;
        return wire;
      });
      return imageSet;
    };

    //resets state to a new game attempt, including shuffling images and resetting the score
    //called by handleOnClick if an element has already been clicked
    loseGame = wireMap => {
      const resetWires = this.resetGame(wireMap);
      this.setState({
        wires: this.shuffle(resetWires),
        instruction: "Try Again! Cut any wire.",
        gameScore:0
      });
    };

    //checks for win condition (all wires have been cut)
    winGame = wireMap => {
      if (this.state.gameScore === 8) {
        const resetWires = this.resetGame(wireMap);
        this.setState({
          wires: this.shuffle(resetWires),
          instruction: "Congratulations! Cut any wire to start a new game.",
          gameScore: 0
        });
      }
    }

    //increments score and calls shuffle
    //called by handleOnClick when an element is clicked for the first time
    continueGame = wireMap => {
      this.setState({
        wires: this.shuffle(wireMap),
        instruction: "Well done! Keep going!",
        gameScore: this.state.gameScore + 1
      });

      this.winGame(wireMap);

    };

    //event handler
    //determines whether or not an element has been clicked
    //calls appropriate function
    //responsible for setting clicked = true
    handleOnClick = event => {
      let loseGame = false;
      const wireMap = this.state.wires.map(wire => {
        if (wire.id === event) {
          wire.clicked ? loseGame = true : wire.clicked = true;
        }
        return wire;
      });
      loseGame ? this.loseGame(wireMap) : this.continueGame(wireMap);
    };

  //render game elements to the page
  render() {
    return (
      <div>
        <NavBar 
          gameScore={this.state.gameScore}
          instruction={this.state.instruction}
        />
        <Header />
        <div className="images-div text-center">
          {this.state.wires.map(wire => (
            <Wire
              id={wire.id}
              key={wire.id}
              image={wire.image}
              handleOnClick={this.handleOnClick}
            />
          ))}
        </div>
    </div>
    );
  }

};

export default Game;