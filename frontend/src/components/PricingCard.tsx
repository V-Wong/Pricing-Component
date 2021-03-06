import React from "react";
import "./css/pricing-card.css";

export default class PricingCard extends React.Component<any, any> {
  selectCard(event: any) {
    let curElement = event.target;
    while (![...curElement.classList].includes("pricing-card")) {
      curElement = curElement.parentNode;
    }
    curElement.classList.toggle("active");
    for (let card of curElement.parentNode.children) {
      if (card != curElement) {
        card.classList.remove("active");
      }
    }
  }

  componentDidMount() {
    // This is a hack to get the middle pricing card selected by default.
    // Figure out a better way to do this.

    document.getElementsByClassName("pricing-card")[1].classList.toggle("active");
  }

  render() {
    return (
      <div className="pricing-card" onClick={this.selectCard}>
        <div className="plan-name">{this.props.plan.planName}</div>
        <div className="pricing">{this.props.annualPricing ? "$" + this.props.plan.pricing * 12 :  "$" + this.props.plan.pricing}</div>
        <div className="details">
          <div className="detail" style={{borderBottom: "none"}}>
            {this.props.plan.storage}
          </div>
          <div className="detail" style={{borderBottom: "none"}}>
            {this.props.plan.userLimit}
          </div>
          <div className="detail">
            {this.props.plan.sendLimit}
          </div>
        </div>
        <div className="learn-more">
          <button>LEARN MORE</button>
        </div>
      </div>
    )
  }
}