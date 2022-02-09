import React from "react"; //

import "./Main.module.css";
import Card from "./Card";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      cardProps: [
        { path: "/images/img1.png", id: 0, value: 20, face: false },
        { path: "/images/img2.png", id: 1, value: 21, face: false },
        { path: "/images/img3.png", id: 2, value: 22, face: false },
        { path: "/images/img4.png", id: 3, value: 23, face: false },
        { path: "/images/img5.png", id: 4, value: 24, face: false },
        { path: "/images/img6.png", id: 5, value: 25, face: false },
        { path: "/images/img1.png", id: 6, value: 20, face: false },
        { path: "/images/img2.png", id: 7, value: 21, face: false },
        { path: "/images/img3.png", id: 8, value: 22, face: false },
        { path: "/images/img4.png", id: 9, value: 23, face: false },
        { path: "/images/img5.png", id: 10, value: 24, face: false },
        { path: "/images/img6.png", id: 11, value: 25, face: false },
      ],
      currentValue1: "",
      currentValue2: "",
      matchedCards: 0,
    };
    this.turnTheCard = this.turnTheCard.bind(this);
    this.renderCards = this.renderCards.bind(this);
  }

  turnTheCard(cardVal, cardId) {
    if (this.state.currentValue1 === "") {
      this.setState({ currentValue1: cardVal });
    } else {
      this.setState({ currentValue2: cardVal });
      if (this.state.currentValue1 !== "" && this.state.currentValue2 !== "") {
        if (this.state.currentValue1 === this.state.currentValue2) {
          this.setState((prevState) => {
            return { matchedCards: prevState.matchedCards + 1 };
          });
          console.log(this.state.matchedCards);
          if (this.state.matchedCards === 6) {
            console.log("Game over");
          }
        }
      }
    }
  }
  componentDidMount() {
    this.state.cardProps.sort(() => Math.random() - 0.5);
  }

  componentDidUpdate() {
    console.log(this.state.currentValue1);
    console.log(this.state.currentValue2);
    if (this.state.currentValue1 !== "" && this.state.currentValue2 !== "") {
      this.setState({ currentValue1: "" });
      this.setState({ currentValue2: "" });
    }
  }
// takes index of first and last cards in the rendered row
renderCards(firstCard, lastCard) {
  console.log(this.state.cardProps)
  return (this.state.cardProps.map((card, i) => {
    if (i >= firstCard && i <= lastCard) {
      console.log(typeof i)
      return (
        <div className="card col-2">
          <Card
            cardProps={this.state.cardProps[1]}
            onClick={this.turnTheCard}
            currentValue1={this.state.currentValue1}
            currentValue2={this.state.currentValue2}
          />
        </div>
      );
    } else {
      return null;
    }
  })
  )}

  render() {
    return (<main>
      <section className="container-fluid">

      </section>
      <div className="row d-flex justify-content-around mt-4">
      {this.renderCards(0, 3)}</div>
      <div className="row d-flex justify-content-around mt-4">
      {this.renderCards(4, 7)}</div>
      <div className="row d-flex justify-content-around mt-4">
      {this.renderCards(8, 11)}</div>
    </main>);
  }
}

export default Main;
