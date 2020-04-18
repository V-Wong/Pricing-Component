import React from "react";
import "./pricing-card.css";

export default class PricingCard extends React.Component<any, any> {
  render() {
    return (
      <div className="pricing-card">
        <p>{this.props.plan.planName}</p>
        <p>{this.props.plan.pricing}</p>
        <p>{this.props.plan.storage}</p>
        <p>{this.props.plan.sendLimit}</p>
      </div>
    )
  }
}