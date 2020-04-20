import React from "react";
import "./pricing-switch.css"

export default class PricingSwitch extends React.Component<any, any> {
  render() {
    return (
      <div className="switch-container">
        <p style={{marginRight: "1vw"}}>Monthly</p>
        <label className="switch">
          <input type="checkbox" onClick={this.props.pricingModelChanger}/>
          <span className="slider"></span>
        </label>
        <p style={{marginLeft: "1vw"}}>Annually</p>
      </div>
    )
  }
}