import React from "react";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      path: "/images/halloween.jpg",
      face: false,
    };
    this.showFace = this.showFace.bind(this);
  }

  showFace() {
    this.setState({ face: true });
  }

  renderBack() {
    return (
      <div style={{ width: "3rem", height: "4rem", backgroundColor: "grey" }}>
        <img
          onClick={this.showFace}
          src={this.state.path}
          alt="pic"
          style={{ width: "auto", height: "4rem" }}
        />
      </div>
    );
  }

  renderFace() {
    return (
      <div style={{ width: "3rem", height: "4rem", backgroundColor: "grey" }}>
        <img
          src={this.props.cardProps.path}
          alt="pic"
          style={{ width: "auto", height: "4rem" }}
        />
      </div>
    );
  }

  render() {
    if (this.state.face === false) {
      return this.renderBack();
    } else if (this.state.face === true) {
      return this.renderFace();
    }
  }
}

export default Card;
