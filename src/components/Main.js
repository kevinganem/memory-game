import React from "react"; //

import "./Main.module.css";
import Card from "./Card";
import Reset from "./Reset";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      cardProps: [
        { path: "/images/img1.png", value: "mer" },
        { path: "/images/img2.png", value: "montagne" },
        { path: "/images/img3.png", value: "champs" },
        { path: "/images/img4.png", value: "chèvre" },
        { path: "/images/img5.png", value: "couple" },
        { path: "/images/img6.png", value: "rome" },
        { path: "/images/img1.png", value: "mer" },
        { path: "/images/img2.png", value: "montagne" },
        { path: "/images/img3.png", value: "champs" },
        { path: "/images/img4.png", value: "chèvre" },
        { path: "/images/img5.png", value: "couple" },
        { path: "/images/img6.png", value: "rome" },
      ],
      currentValue1: "",
      currentValue2: "",
      matchedCards: 0,
    };
    this.turnTheCard = this.turnTheCard.bind(this);
    this.addMatchedCards = this.addMatchedCards.bind(this);
    this.renderCards = this.renderCards.bind(this);
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

  render() {
    return (
      <main>
        <section className="container-fluid">
          <div className="row d-flex justify-content-around mt-4">
            {this.renderCards(0, 3)}
          </div>
          <div className="row d-flex justify-content-around mt-4">
            {this.renderCards(4, 7)}
          </div>
          <div className="row d-flex justify-content-around mt-4">
            {this.renderCards(8, 11)}
          </div>
        </section>
        {this.renderGameOver()}
      </main>
    );
  }
}

export default Main;
