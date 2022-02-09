import React from "react"; //

import "./Main.module.css";
import Card from "./Card";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      cardProps: [
        { path: "/images/img1.jpg", id: 0, value: 20, face: false },
        { path: "/images/img2.jpg", id: 1, value: 21, face: false },
        { path: "/images/img3.jpg", id: 2, value: 22, face: false },
        { path: "/images/img4.jpg", id: 3, value: 23, face: false },
        { path: "/images/img5.jpg", id: 4, value: 24, face: false },
        { path: "/images/img6.jpg", id: 5, value: 25, face: false },
        { path: "/images/img1.jpg", id: 6, value: 20, face: false },
        { path: "/images/img2.jpg", id: 7, value: 21, face: false },
        { path: "/images/img3.jpg", id: 8, value: 22, face: false },
        { path: "/images/img4.jpg", id: 9, value: 23, face: false },
        { path: "/images/img5.jpg", id: 10, value: 24, face: false },
        { path: "/images/img6.jpg", id: 11, value: 25, face: false },
      ],
      currentValue1: "",
      currentValue2: "",
      matchedCards: 0,
    };
    this.turnTheCard = this.turnTheCard.bind(this);
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

  renderCards() {
    return (
      <section className="container-fluid">
        <div className="row d-flex justify-content-around mt-4">
          <div className="col-2">
            <Card
              cardProps={this.state.cardProps[0]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="col-2">
            <Card
              cardProps={this.state.cardProps[1]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="col-2">
            <Card
              cardProps={this.state.cardProps[2]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="col-2">
            <Card
              cardProps={this.state.cardProps[3]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
        </div>

        <div className="row d-flex justify-content-around">
          <div className="col-2">
            <Card
              cardProps={this.state.cardProps[4]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="col-2">
            <Card
              cardProps={this.state.cardProps[5]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="col-2">
            <Card
              cardProps={this.state.cardProps[6]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="col-2">
            <Card
              cardProps={this.state.cardProps[7]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
        </div>

        <div className="row d-flex justify-content-around">
          <div className="col-2">
            <Card
              cardProps={this.state.cardProps[8]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="col-2">
            <Card
              cardProps={this.state.cardProps[9]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="col-2">
            <Card
              cardProps={this.state.cardProps[10]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="col-2">
            <Card
              cardProps={this.state.cardProps[11]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
        </div>
      </section>
    );
  }

  render() {
    return <main>{this.renderCards()}</main>;
  }
}

export default Main;
