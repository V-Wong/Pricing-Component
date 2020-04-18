import React from 'react';
import PricingCardList from "./components/PricingCardList";
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
    sendLimit: "10 GB",
  },
  {
    planName: "Master",
    pricing: "39.99",
    storage: "2 TB Storage",
    userLimit: "10 Users Allowed",
    sendLimit: "Send Up To 20 GB",
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      annualPricing: false
    }
  }

  render() {
    return (
      <>
        <div className="title">
          <h1>Pricing Component Exercise</h1>
        </div>
        <div className="switch-container">
          <p style={{marginRight: "1vw"}}>Monthly</p>
          <label class="switch">
            <input type="checkbox" onClick={() => this.setState({annualPricing: !this.state.annualPricing})}/>
            <span class="slider"></span>
          </label>
          <p style={{marginLeft: "1vw"}}>Annually</p>
        </div>
        <PricingCardList plans={samplePlans} annualPricing={this.state.annualPricing}/>
      </>
    );
  }
}
