import React from "react"; //

import "./Main.module.css";
import Card from "./Card";
import Reset from "./Reset";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      cardProps: [
        { path: "/images/img1.png", value: "bootstrap" },
        { path: "/images/img2.png", value: "css" },
        { path: "/images/img3.png", value: "html" },
        { path: "/images/img4.png", value: "js" },
        { path: "/images/img5.png", value: "node" },
        { path: "/images/img6.png", value: "python" },
        { path: "/images/img1.png", value: "bootstrap" },
        { path: "/images/img2.png", value: "css" },
        { path: "/images/img3.png", value: "html" },
        { path: "/images/img4.png", value: "js" },
        { path: "/images/img5.png", value: "node" },
        { path: "/images/img6.png", value: "python" },
      ],
      currentValue1: "",
      currentValue2: "",
      matchedCards: 0,
      seconds: 30,
      classToChange: "visible",
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
    this.myInterval = setInterval(() => {
      const { seconds } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
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

    if (this.state.matchedCards === 6) {
      return this.props.gameOver();
    }
  }

  renderGameOver() {
    if (this.state.matchedCards === 6 && this.state.seconds > 0) {
      return (
        <>
          <div className="gameOver mt-5">
            <h2 className="text-center">Félicitations vous avez gagné</h2>
            <div className="d-flex justify-content-center mt-3">
              <Reset finish={this.props.finish} />
            </div>
          </div>
        </>
      );
    } else if (this.state.seconds === 0) {
      return (
        <>
          <div className="gameOver mt-5">
            <div className="d-flex justify-content-center mt-3">
              <Reset finish={this.props.finish} />
            </div>
          </div>
        </>
      );
    }
  }
  // takes index of first and last cards in the rendered row
  renderCards(firstCard, lastCard) {
    console.log(this.state.cardProps);
    return this.state.cardProps.map((card, i) => {
      if (i >= firstCard && i <= lastCard) {
        console.log(typeof i);
        return (
          <Card
            cardProps={this.state.cardProps[i]}
            onClick={this.turnTheCard}
            currentValue1={this.state.currentValue1}
            currentValue2={this.state.currentValue2}
          />
        );
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <main>
        <div>
          {this.props.finish || this.state.seconds === 0 ? (
            <h2 className="text-center">Again ?</h2>
          ) : (
            <h2 className="text-center">Time remaining {this.state.seconds}</h2>
          )}
        </div>
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
