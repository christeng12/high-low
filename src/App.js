import React, {Component} from 'react';

function Card(props){
  return(
    <div className="Card">{props.value}</div>
  );
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      pile: 0,
      score: 0
    }
  }

  drawCard = () => {
    console.log("draw");
    const randomCard = Math.floor(Math.random()*13+1);
    this.setState({
      currentCard: randomCard
    });
    return randomCard;
  }

  high = () => {
    console.log("high");
    const current = this.state.currentCard;
    const next = this.drawCard();
    if (next>=current){
      this.setState({pile: this.state.pile+1});
    } else {
      this.setState({pile: 0});
    }
  }

  low = () => {
    console.log("low");
    const current = this.state.currentCard;
    const next = this.drawCard();
    if (next<=current){
      this.setState({pile: this.state.pile+1});
    } else {
      this.setState({pile: 0});
    }
  }

  keep = () => {
    console.log("keep");
    this.drawCard();
    this.setState({score: this.state.score+this.state.pile,
                   pile: 0 });
  }

  render() {
    return(
      <div>
        <div className="card_region">
          <Card 
            value={this.state.currentCard}
          />
        </div>
        <div className="pile">
          Pile: {this.state.pile}
        </div>
        <div className="score">
          Score: {this.state.score}
        </div>
        <div className="controls">
          <button className="high" onClick={this.high}>high</button>
          <button className="low" onClick={this.low}>low</button>
          <button className="keep" onClick={this.keep}>keep</button>
        </div>
      </div>
    );
  }
}

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <div className="Game-Table">
          <Table />
        </div>
      </div>
    );
  }
}
export default Game;
