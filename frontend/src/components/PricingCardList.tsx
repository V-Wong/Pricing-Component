import React from "react";
import PricingCard from "./PricingCard";

const samplePlans = [
  {
    planName: "Basic",
    pricing: "$20",
    storage: "5 TB",
    sendLimit: "10 GB",
  },
  // {
  //   planName: "Professional",
  //   pricing: "$20",
  //   storage: "5 TB",
  //   sendLimit: "10 GB",
  // }
];

export default class PricingCardList extends React.Component {
  render() {
    return (
      <>
        {samplePlans.map(plan => <PricingCard plan={plan}/>)}
      </>
    )
  }
}