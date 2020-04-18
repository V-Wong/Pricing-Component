import React from "react";
import PricingCard from "./PricingCard";
import "./pricing-card.css"

const samplePlans = [
  {
    planName: "Basic",
    pricing: "$19.99",
    storage: "500 GB Storage",
    userLimit: "2 Users Allowed",
    sendLimit: "Send Up To 3 GB",
  },
  {
    planName: "Professional",
    pricing: "$24.99",
    storage: "1 TB Storage",
    userLimit: "5 Users Allowed",
    sendLimit: "10 GB",
  },
  {
    planName: "Master",
    pricing: "$39.99",
    storage: "2 TB Storage",
    userLimit: "10 Users Allowed",
    sendLimit: "Send Up To 20 GB",
  }
];

export default class PricingCardList extends React.Component {
  render() {
    return (
      <div className="pricing-card-list">
        {samplePlans.map(plan => <PricingCard plan={plan}/>)}
      </div>
    )
  }
}