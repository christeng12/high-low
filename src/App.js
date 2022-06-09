import React, {Component} from 'react';

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
        <High />
        <Low />
        <Keep />
      </div>
    );
  }
}
export default Game;
