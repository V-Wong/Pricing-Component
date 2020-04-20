import React from "react";
import PricingCard from "./PricingCard";
import "./css/pricing-card.css"

export default class PricingCardList extends React.Component<any, any> {
  render() {
    return (
      <div className="pricing-card-list">
        {this.props.plans.map(plan => <PricingCard plan={plan} annualPricing={this.props.annualPricing}/>)}
      </div>
    )
  }
}