import React from "react";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      path: "/images/backside.jpg",
      face: false,
      founded: false,
    };
    this.showCard = this.showCard.bind(this);
    this.turnFalse = this.turnFalse.bind(this);
  }
  turnFalse() {
    this.setState({ face: false });
  }
  showCard() {
    if (this.state.face === false) {
      this.setState({ face: true });
    } else if (this.state.face === true) {
      this.setState({ face: false });
    }
  }
  showBack(value1, value2) {
    if (value1 !== "" && value2 !== "") {
      if (value1 !== value2) {
        console.log("Good Morning");
        this.setState({ face: false });
      }
    }
  }
  renderBack() {
    return (
      <div style={{ width: "3rem", height: "8rem" }}>
        <img
          onClick={() => {
            this.props.onClick(this.props.cardProps.value);
            this.showCard();
          }}
          src={this.state.path}
          alt="Carte retournée"
          style={{ width: "auto", height: "4rem" }}
        />
      </div>
    );
  }

  renderFace() {
    return (
      <div style={{ width: "3rem", height: "4rem" }}>
        <img
          src={this.props.cardProps.path}
          alt="Carte face"
          style={{ width: "auto", height: "6rem" }}
        />
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentValue2 !== this.props.currentValue2) {
      if (this.props.currentValue1 !== this.props.currentValue2) {
        if (
          this.props.currentValue1 !== this.props.cardProps.value ||
          this.props.currentValue2 !== this.props.cardProps.value
        ) {
          setTimeout(this.turnFalse, 1000);
        }
      } else if (this.props.currentValue1 === this.props.currentValue2) {
        if (
          this.props.currentValue1 === this.props.cardProps.value ||
          this.props.currentValue2 === this.props.cardProps.value
        ) {
          this.setState({ founded: true });
        }
      }
    }
  }

  render() {
    if (this.state.founded === true) {
      return this.renderFace();
    } else if (this.state.face === false) {
      return this.renderBack();
    } else if (this.state.face === true) {
      return this.renderFace();
    }
  }
}

export default Card;
