import React from "react";

import "./Main.module.css";
import Card from "./Card";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      cardProps: [
        {  path: "/images/img1.jpg", value: 20, face: false},
        {  path: "/images/img2.jpg", value: 21, face: false},
        {  path: "/images/img3.jpg", value: 22, face: false},
        {  path: "/images/img4.jpg", value: 23, face: false},
        {  path: "/images/img5.jpg", value: 24, face: false},
        {  path: "/images/img6.jpg", value: 25, face: false},
        {  path: "/images/img1.jpg", value: 20, face: false},
        {  path: "/images/img2.jpg", value: 21, face: false},
        {  path: "/images/img3.jpg", value: 22, face: false},
        {  path: "/images/img4.jpg", value: 23, face: false},
        {  path: "/images/img5.jpg", value: 24, face: false},
        {  path: "/images/img6.jpg", value: 25, face: false},
      ],
      currentValue1: "",
      currentValue2: "",
     
    };
this.turnTheCard = this.turnTheCard.bind(this)
  }
turnTheCard(cardVal){

  if(this.state.currentValue1 ===""){
    this.setState({currentValue1: cardVal});
  }else {
    this.setState({currentValue2: cardVal})
    if(this.state.currentValue1 !== "" && this.state.currentValue2 !== ""){
      if (this.state.currentValue1 === this.state.currentValue2){
        console.log("hello")
        
        }
      }
    }
  }
componentDidMount(){
  this.state.cardProps.sort(() => Math.random() - 0.5);
}

componentDidUpdate(){
  console.log(this.state.currentValue1);
  console.log(this.state.currentValue2);
}


  renderCards() {
    

    return (
      <section className="container-fluid">
        <div className="row d-flex justify-content-around">
          <div className="card col-2">
            <Card cardProps={this.state.cardProps[0]}
            onClick={this.turnTheCard} 
            try={this.state.try}
            />
          </div>
          <div className="card col-2">
            <Card cardProps={this.state.cardProps[1]} onClick={this.turnTheCard} />
          </div>
          <div className="card col-2">
            <Card cardProps={this.state.cardProps[2]} onClick={this.turnTheCard} />
          </div>
          <div className="card col-2">
            <Card cardProps={this.state.cardProps[3]} onClick={this.turnTheCard} />
          </div>
        </div>

        <div className="row d-flex justify-content-around">
          <div className="card col-2">
            <Card cardProps={this.state.cardProps[4]} onClick={this.turnTheCard} />
          </div>
          <div className="card col-2">
            <Card cardProps={this.state.cardProps[5]} onClick={this.turnTheCard} />
          </div>
          <div className="card col-2">
            <Card cardProps={this.state.cardProps[6]} onClick={this.turnTheCard} />
          </div>
          <div className="card col-2">
            <Card cardProps={this.state.cardProps[7]} onClick={this.turnTheCard} />
          </div>
        </div>

        <div className="row d-flex justify-content-around">
          <div className="card col-2">
            <Card cardProps={this.state.cardProps[8]} onClick={this.turnTheCard} />
          </div>
          <div className="card col-2">
            <Card cardProps={this.state.cardProps[9]} onClick={this.turnTheCard} />
          </div>
          <div className="card col-2">
            <Card cardProps={this.state.cardProps[10]} onClick={this.turnTheCard} />
          </div>
          <div className="card col-2">
            <Card cardProps={this.state.cardProps[11]} onClick={this.turnTheCard} />
          </div>
        </div>
      </section>
    );
  }

  render() {
    return <main>{this.renderCards()}
     
    </main>;
  }
}

export default Main;
