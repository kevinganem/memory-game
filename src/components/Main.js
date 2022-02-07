import React from "react";

import "./Main.module.css";
import Card from "./Card";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      cardsArray: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
    };
    this.renderCards = this.renderCards.bind(this);
  }

  renderCards() {
    let randomArray = this.state.cardsArray.sort(() => Math.random() - 0.5);
 
      return (
        <>
      <div className="row d-flex justify-content-around">
      <div className="card col-2">
        <Card>{this.state.cardsArray[0]}</Card>
      </div>
      <div className="card col-2">
        <Card>{this.state.cardsArray[1]}</Card>{" "}
      </div>
      <div className="card col-2">
        <Card>{this.state.cardsArray[2]}</Card>{" "}
      </div>
      <div className="card col-2">
        <Card>{this.state.cardsArray[3]}</Card>{" "}
      </div>
    </div> 
    
      <div className="row d-flex justify-content-around">
      <div className="card col-2">
        <Card>{this.state.cardsArray[4]}</Card>
      </div>
      <div className="card col-2">
        <Card>{this.state.cardsArray[5]}</Card>{" "}
      </div>
      <div className="card col-2">
        <Card>{this.state.cardsArray[6]}</Card>{" "}
      </div>
      <div className="card col-2">
        <Card>{this.state.cardsArray[7]}</Card>{" "}
      </div>
    </div>
     
      <div className="row d-flex justify-content-around">
      <div className="card col-2">
        <Card>{this.state.cardsArray[8]}</Card>
      </div>
      <div className="card col-2">
        <Card>{this.state.cardsArray[9]}</Card>{" "}
      </div>
      <div className="card col-2">
        <Card>{this.state.cardsArray[10]}</Card>{" "}
      </div>
      <div className="card col-2">
        <Card>{this.state.cardsArray[11]}</Card>{" "}
      </div>
    </div>
    </>);
    
    
    
  }

  render() {
    return (
      <main>
        <section className="container-fluid">
          {this.renderCards()}
        </section>
      </main>
    );
  }
}

export default Main;
