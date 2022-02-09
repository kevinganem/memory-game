import React from "react"; //

import "./Main.module.css";
import Card from "./Card";
import Reset from "./Reset";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      cardProps: [
        { path: "/images/img1.jpg", value: "mer" },
        { path: "/images/img2.jpg", value: "montagne" },
        { path: "/images/img3.jpg", value: "champs" },
        { path: "/images/img4.jpg", value: "chèvre" },
        { path: "/images/img5.jpg", value: "couple" },
        { path: "/images/img6.jpg", value: "rome" },
        { path: "/images/img1.jpg", value: "mer" },
        { path: "/images/img2.jpg", value: "montagne" },
        { path: "/images/img3.jpg", value: "champs" },
        { path: "/images/img4.jpg", value: "chèvre" },
        { path: "/images/img5.jpg", value: "couple" },
        { path: "/images/img6.jpg", value: "rome" },
      ],
      currentValue1: "",
      currentValue2: "",
      matchedCards: 0,
    };
    this.turnTheCard = this.turnTheCard.bind(this);
    this.addMatchedCards = this.addMatchedCards.bind(this);
  }

  addMatchedCards() {
    if (this.state.currentValue1 === this.state.currentValue2) {
      this.setState((prevState) => {
        return { matchedCards: prevState.matchedCards + 1 };
      });
    }
  }

  turnTheCard(cardVal) {
    if (this.state.currentValue1 === "") {
      this.setState({ currentValue1: cardVal });
    } else if (this.state.currentValue2 === "") {
      this.setState({ currentValue2: cardVal });
    }
  }
  componentDidMount() {
    this.state.cardProps.sort(() => Math.random() - 0.5);
  }

  componentDidUpdate() {
    console.log(`currentValue1 :${this.state.currentValue1}`);
    console.log(`currentValue2 :${this.state.currentValue2}`);
    console.log(`MatchedC :${this.state.matchedCards}`);
    if (this.state.currentValue1 !== "" && this.state.currentValue2 !== "") {
      this.addMatchedCards();
      this.setState({ currentValue1: "" });
      this.setState({ currentValue2: "" });
    }
  }

  renderGameOver() {
    if (this.state.matchedCards === 6) {
      return (
        <>
          <h2>Félicitations vous avez gagné</h2>
          <Reset />
        </>
      );
    }
  }

  renderCards() {
    return (
      <section className="container-fluid">
        <div className="row d-flex justify-content-around">
          <div className="card col-2">
            <Card
              cardProps={this.state.cardProps[0]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="card col-2">
            <Card
              cardProps={this.state.cardProps[1]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="card col-2">
            <Card
              cardProps={this.state.cardProps[2]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="card col-2">
            <Card
              cardProps={this.state.cardProps[3]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
        </div>

        <div className="row d-flex justify-content-around">
          <div className="card col-2">
            <Card
              cardProps={this.state.cardProps[4]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="card col-2">
            <Card
              cardProps={this.state.cardProps[5]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="card col-2">
            <Card
              cardProps={this.state.cardProps[6]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="card col-2">
            <Card
              cardProps={this.state.cardProps[7]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
        </div>

        <div className="row d-flex justify-content-around">
          <div className="card col-2">
            <Card
              cardProps={this.state.cardProps[8]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="card col-2">
            <Card
              cardProps={this.state.cardProps[9]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="card col-2">
            <Card
              cardProps={this.state.cardProps[10]}
              onClick={this.turnTheCard}
              currentValue1={this.state.currentValue1}
              currentValue2={this.state.currentValue2}
            />
          </div>
          <div className="card col-2">
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
    return (
      <main>
        {this.renderCards()}
        {this.renderGameOver()}
      </main>
    );
  }
}

export default Main;
