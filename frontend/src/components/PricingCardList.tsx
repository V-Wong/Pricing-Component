import React from "react";
import PricingCard from "./PricingCard";
import "./pricing-card.css"

const samplePlans = [
  {
    planName: "Basic",
    pricing: "$20.99",
    storage: "5 TB Storage",
    userLimit: "5 Users Allowed",
    sendLimit: "Send Up To 10 GB",
  },
  {
    planName: "Professional",
    pricing: "$20",
    storage: "5 TB",
    userLimit: "5 Users Allowed",
    sendLimit: "10 GB",
  },
  {
    planName: "Professional",
    pricing: "$20",
    storage: "5 TB",
    userLimit: "5 Users Allowed",
    sendLimit: "10 GB",
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