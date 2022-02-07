import React from "react";

import "./Main.module.css";
import Card from "./Card";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      cardProps: [
        { id: 1, path: "/images/img1.jpg" },
        { id: 2, path: "/images/img2.jpg" },
        { id: 3, path: "/images/img3.jpg" },
        { id: 4, path: "/images/img4.jpg" },
        { id: 5, path: "/images/img5.jpg" },
        { id: 6, path: "/images/img6.jpg" },
      ],
    };
  }

  render() {
    return (
      <main>
        <section className="container-fluid">
          <div className="row d-flex justify-content-around">
            <div className="card col-2">
              <Card cardProps={this.state.cardProps[0]}></Card>
            </div>
            <div className="card col-2">
              <Card cardProps={this.state.cardProps[0]}></Card>{" "}
            </div>
            <div className="card col-2">
              <Card cardProps={this.state.cardProps[1]}></Card>{" "}
            </div>
            <div className="card col-2">
              <Card cardProps={this.state.cardProps[1]}></Card>{" "}
            </div>
          </div>

          <div className="row d-flex justify-content-around">
            <div className="card col-2">
              <Card></Card>
            </div>
            <div className="card col-2">
              <Card></Card>{" "}
            </div>
            <div className="card col-2">
              <Card></Card>{" "}
            </div>
            <div className="card col-2">
              <Card></Card>{" "}
            </div>
          </div>

          <div className="row d-flex justify-content-around">
            <div className="card col-2">
              <Card></Card>
            </div>
            <div className="card col-2">
              <Card></Card>{" "}
            </div>
            <div className="card col-2">
              <Card></Card>{" "}
            </div>
            <div className="card col-2">
              <Card></Card>{" "}
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Main;
