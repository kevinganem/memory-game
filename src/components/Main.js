import React from "react";

import "./Main.module.css";
import Card from "./Card";

class Main extends React.Component {
  render() {
    return (
      <main>
        <section className="container-fluid">
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

        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </main>
    );
  }
}
export default Main;
