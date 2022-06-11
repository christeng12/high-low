import React, {Component} from 'react';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 1,
    };
  }

  render() {
    return (
      <h1 className="card">{this.state.value}</h1>
    );
  }
}

class Keep extends Component {
  render() {
    return(
      <button className="keep">Keep</button>
    );
  }
}

class High extends Component {
  render() {
    return(
      <button className="high">High</button>
    );
  }
}

class Low extends Component {
  render() {
    return(
      <button className="low">Low</button>
    );
  }
}

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <Card />
        <High />
        <Low />
        <Keep />
      </div>
    );
  }
}
export default Game;
