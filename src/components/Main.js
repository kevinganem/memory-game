import React from "react";
import "./Main.module.css";

class Main extends React.Component {
  render() {
    return (
      <main>
        <section className="container-fluid">
          <div className="row d-flex justify-content-around">
            <div className="card col-2">
              <img src="/images/halloween.jpg" />
            </div>
            <div className="card col-2">
              <img src="/images/halloween.jpg" />{" "}
            </div>
            <div className="card col-2">
              <img src="/images/halloween.jpg" />{" "}
            </div>
            <div className="card col-2">
              <img src="/images/halloween.jpg" />{" "}
            </div>
          </div>

          <div className="row d-flex justify-content-around">
            <div className="card col-2">
              <img src="/images/halloween.jpg" />
            </div>
            <div className="card col-2">
              <img src="/images/halloween.jpg" />{" "}
            </div>
            <div className="card col-2">
              <img src="/images/halloween.jpg" />{" "}
            </div>
            <div className="card col-2">
              <img src="/images/halloween.jpg" />{" "}
            </div>
          </div>

          <div className="row d-flex justify-content-around">
            <div className="card col-2">
              <img src="/images/halloween.jpg" />
            </div>
            <div className="card col-2">
              <img src="/images/halloween.jpg" />{" "}
            </div>
            <div className="card col-2">
              <img src="/images/halloween.jpg" />{" "}
            </div>
            <div className="card col-2">
              <img src="/images/halloween.jpg" />{" "}
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Main;
