import React, {Component} from 'react';

function Card(props){
  return(
    <div className="Card">{props.value}</div>
  );
}

class Table extends Component {
  drawCard() {
    return(
      <Card 
        value={Math.floor(Math.random()*13+1)}
      />
    );
  }

  render () {
    return(
      <div>
        <div className="card_region">
          {this.drawCard()}
        </div>
        <div className="controls">
          <button>high</button>
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
