import React, { Component } from 'react';
import './CarbonFootprintCalculator.css'; // Create a CSS file for styling

class CarbonFootprintCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      electricityConsumption: 0, // in kWh
      carbonFootprint: 0, // in kg of CO2 equivalent
    };
  }

  handleElectricityConsumptionChange = (event) => {
    const electricityConsumption = parseFloat(event.target.value);
    this.setState({ electricityConsumption }, this.calculateCarbonFootprint);
  }

  calculateCarbonFootprint = () => {
    // Dummy data for the carbon footprint calculation (actual data might come from an API)
    const carbonIntensity = 0.5; // kg of CO2 per kWh
    const electricityConsumption = this.state.electricityConsumption;
    const carbonFootprint = electricityConsumption * carbonIntensity;

    this.setState({ carbonFootprint });
  }

  render() {
    const { electricityConsumption, carbonFootprint } = this.state;

    return (
      <div className="carbon-footprint-calculator">
        <h2>Carbon Footprint Calculator</h2>
        <label>
          Electricity Consumption (in kWh):
          <input
            type="number"
            value={electricityConsumption}
            onChange={this.handleElectricityConsumptionChange}
          />
        </label>
        <p>Carbon Footprint: <h2 style={{color:"green", fontWeight:"900"}}> {carbonFootprint}</h2> kg of CO2 equivalent</p>

        {/* Additional Features */}
        <div className="suggestions">
          <h3>Tips to Reduce Your Carbon Footprint</h3>
          <ul>
            <li>Switch to renewable energy sources.</li>
            <li>Use energy-efficient appliances.</li>
            <li>Reduce, reuse, and recycle.</li>
            <li>Conserve water and reduce waste.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CarbonFootprintCalculator;
