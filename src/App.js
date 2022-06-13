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
      currentCard: 0
    }
  }

  drawCard = () => {
    const randomCard = Math.floor(Math.random()*13+1);
    this.setState({
      currentCard: randomCard
    });
  }

  render() {
    return(
      <div>
        <div className="card_region">
          <Card 
            value={this.state.currentCard}
          />
        </div>
        <div className="controls">
          <button className="high" onClick={this.drawCard}>high</button>
          <button>low</button>
          <button>keep</button>
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
