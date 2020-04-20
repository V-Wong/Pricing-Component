import React from 'react';
import PricingCardList from "./components/PricingCardList";
import PricingSwitch from "./components/PricingSwitch";
import "./app.css"

const samplePlans = [
  {
    planName: "Basic",
    pricing: "19.99",
    storage: "500 GB Storage",
    userLimit: "2 Users Allowed",
    sendLimit: "Send Up To 3 GB",
  },
  {
    planName: "Professional",
    pricing: "24.99",
    storage: "1 TB Storage",
    userLimit: "5 Users Allowed",
    sendLimit: "Send Up To 10 GB",
  },
  {
    planName: "Master",
    pricing: "39.99",
    storage: "2 TB Storage",
    userLimit: "10 Users Allowed",
    sendLimit: "Send Up To 20 GB",
  }
];

export default class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      annualPricing: false
    }
  }

  changePricingModel = () => {
    this.setState({annualPricing: !this.state.annualPricing})
  }

  render() {
    return (
      <>
        <div className="title">
          <h1>Pricing Component Exercise</h1>
        </div>
        <PricingSwitch pricingModelChanger={this.changePricingModel}></PricingSwitch>
        <PricingCardList plans={samplePlans} annualPricing={this.state.annualPricing}/>
        <footer>
          <a href="https://vwong.dev">My Personal Website</a>
        </footer>
      </>
    );
  }
}
