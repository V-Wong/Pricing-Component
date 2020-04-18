import React from 'react';
import PricingCardList from "./components/PricingCardList";
import "./app.css"

function App() {
  return (
    <>
      <div className="title">
        <h1>Pricing Component Exercise</h1>
      </div>
      <div className="switch-container">
        <p style={{marginRight: "1vw"}}>Monthly</p>
        <label class="switch">
          <input type="checkbox"/>
          <span class="slider"></span>
        </label>
        <p style={{marginLeft: "1vw"}}>Annually</p>
      </div>
      <PricingCardList/>
    </>
  );
}

export default App;
