import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      finish: false,
    };
    this.gameOver = this.gameOver.bind(this);
  }

  gameOver() {
    if (this.state.finish === false) {
      this.setState({ finish: true });
    }
  }

  render() {
    return (
      <>
        <Header finish={this.state.finish} />
        <Main finish={this.state.finish} gameOver={this.gameOver} />
      </>
    );
  }
}

export default App;
