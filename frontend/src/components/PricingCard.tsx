import React from "react";
import "./pricing-card.css";

export default class PricingCard extends React.Component<any, any> {
  selectCard(event: any) {
    const card = event.target.parentNode.parentNode;
    console.log(card);
    card.classList.toggle("active");
  }

  render() {
    return (
      <div className="pricing-card">
        <div className="plan-name">{this.props.plan.planName}</div>
        <div className="pricing">{this.props.plan.pricing}</div>
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
          <button onClick={this.selectCard}>Learn More</button>
        </div>
      </div>
    )
  }
}