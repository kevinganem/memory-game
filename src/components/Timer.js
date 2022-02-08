import React from "react";
let timer = 45;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      timing: timer,
      started: false,
    };
    this.decrement = this.decrement.bind(this);
    this.startReset = this.startReset.bind(this);
  }

  decrement() {
    timer--;
  }

  componentDidUpdate() {
    if (this.state.started === true) {
      setInterval(this.decrement, 1000);
      console.log("hello");
    }
  }
  startReset() {
    if (this.state.started === true) {
      this.setState({ started: false });
      this.setState({ timing: 45 });
    } else if (this.state.started === false) {
      this.setState({ started: true });
    }
  }

  renderStart() {
    return (
      <>
        <h2>{this.state.timing}</h2>
        <button onClick={this.startReset}>Start</button>
      </>
    );
  }

  renderPlaying() {
    return (
      <>
        <h2>{this.state.timing}</h2>
        <button onClick={this.startReset}>Reset</button>
      </>
    );
  }

  render() {
    if (this.state.started === false) {
      return this.renderStart();
    } else if (this.state.started === true) {
      return this.renderPlaying();
    }
  }
}
export default Timer;
