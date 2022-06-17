import React, {Component} from 'react';

function Card(props){
  return(
    <div className={"Card " +props.value+" "+props.suit}>{props.value} of {props.suit}</div>
  );
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      nextFlag: true,
      cardList: [],
      winner: "",
      player1:{
        name: "Player1",
        pile: 0,
        score: 0
      },
      player2:{
        name: "Player2",
        pile: 0,
        score: 0,
      }
    } // consider making map
    for(var i=1; i<=52;i++){
      this.state.cardList.push(i);
    }
  }

  getPlayer = () => {
    return this.state.nextFlag ? this.state.player1 : this.state.player2;
  }

  getSuit = (card_value) => {
    const key = Math.ceil(card_value/13);
    let suit = "";
    switch (key) {
      case 1:
        suit = "hearts";
        break;
      case 2:
        suit = "spades";
        break;
      case 3:
        suit = "diamonds";
        break;
      case 4:
        suit = "clubs";
        break;
      default:
        suit = "";
    }
    console.log(suit);
    return suit;
  }

  determineWinner = () => {
    const p1Score = this.state.player1.score;
    const p2Score = this.state.player2.score;
    let winString = "";
    if(p1Score>p2Score){
      winString = this.state.player1.name+" Won!";
    } else if(p2Score>p1Score){
      winString = this.state.player2.name+" Won!";
    } else {
      winString = "Its a tie!";
    }
    this.setState({
      winner: winString,
    });
  }

  drawCard = () => {
    console.log("draw");
    const currentCardList = this.state.cardList;
    if(currentCardList.length>0){
      const randomIndex = Math.floor(Math.random()*currentCardList.length);
      const randomCard = currentCardList[randomIndex];
      currentCardList.splice(randomIndex,1);
      this.setState({
        currentCard: randomCard,
        cardList: currentCardList,
      });
      return randomCard;
    } else {
      this.determineWinner();
      return null;
    }
  }

  high = () => {
    console.log("high");
    const current = this.state.currentCard%13;
    const next = this.drawCard()%13;
    const currentPlayer = this.getPlayer();
    if (next>=current){
      currentPlayer.pile+=1;
      this.setState({currentPlayer});
    } else {
      currentPlayer.pile = 0;
      this.setState({currentPlayer});
      this.setState({nextFlag: !this.state.nextFlag});
    }
  }

  low = () => {
    console.log("low");
    const current = this.state.currentCard%13;
    const next = this.drawCard()%13;
    const currentPlayer = this.getPlayer();
    if (next<=current){
      currentPlayer.pile+=1;
      this.setState({currentPlayer});
    } else {
      currentPlayer.pile = 0;
      this.setState({currentPlayer});
      this.setState({nextFlag: !this.state.nextFlag});
    }
  }

  keep = () => {
    console.log("keep");
    this.drawCard();
    const currentPlayer = this.getPlayer(); 
    currentPlayer.score = currentPlayer.score+currentPlayer.pile
    currentPlayer.pile = 0;
    this.setState({currentPlayer});
    this.setState({nextFlag: !this.state.nextFlag});
  }

  render() {
    return(
      <div>
        <Card 
          value={this.state.currentCard%13+1}
          suit={this.getSuit(this.state.currentCard)}
        />
        <div className="player">
          {this.getPlayer().name}
        </div>
        <div className="pile">
          Pile: {this.getPlayer().pile}
        </div>
        <div className="score">
          Score: {this.getPlayer().score}
        </div>
        <div className="controls">
          <button className="high" onClick={this.high}>high</button>
          <button className="low" onClick={this.low}>low</button>
          <button className="keep" onClick={this.keep}>keep</button>
        </div>
        <div className="win_message">{this.state.winner}
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
