import React, { Component } from 'react';
import './PowerCalculator.css';

class PowerCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wattage: 0,
      hours: 0,
      minutes: 0,
      cost: 0,
      timeUnit: 'minutes', // Default to minutes
      isLoading: true, // Loading state
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 9000); // Simulate loading for 2 seconds (adjust the duration as needed)
  }

  handleWattageChange = (event) => {
    const wattage = parseFloat(event.target.value);
    this.setState({ wattage }, this.calculateConsumption);
  }

  handleHoursChange = (event) => {
    const hours = parseFloat(event.target.value);
    this.setState({ hours }, this.calculateConsumption);
  }

  handleTimeUnitChange = (unit) => {
    this.setState({ timeUnit: unit }, this.calculateConsumption);
  }

  calculateConsumption = () => {
    const { wattage, hours, timeUnit } = this.state;
    let minutes = 0;

    if (timeUnit === 'minutes') {
      minutes = hours;
    } else {
      minutes = hours * 60;
    }

    const consumption = (wattage * minutes) / 1000; // Calculating consumption in kWh
    const cost = consumption * 10; // Assuming 1 kWh costs 10 Naira

    this.setState({ minutes, cost });
  }

  render() {
    const { wattage, hours, minutes, cost, timeUnit, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="open">
          <div className="loading-message">
            <div class="loader">
              <div class="item1"></div>
              <div class="item2"></div>
              <div class="item3"></div>
            </div>

          </div>
        </div>
      );
    }

    return (
      <div className="open">
        <div className="power-calculator">
          <h1 style={{ font: "revert", fontWeight: "900" }}>Power Consumption Calculator</h1>
          <label className="input-label">
            Device Wattage (in Watts):
            <input
              type="number"
              value={wattage}
              onChange={this.handleWattageChange}
              className="input-field"
              placeholder="Enter Wattage"
            />
          </label>
          <br />
          <label className="input-label">
            Usage Hours:
            <input type="number" value={hours} onChange={this.handleHoursChange} className="input-field" />
          </label>
          </div>
          <br />
          <div className="time-unit-buttons">
            <div className="params">
              <button onClick={() => this.handleTimeUnitChange('minutes')} className={timeUnit === 'minutes' ? 'active' : ''}>
                Minutes
              </button>
              <button onClick={() => this.handleTimeUnitChange('hours')} className={timeUnit === 'hours' ? 'active' : ''}>
                Hours
              </button>
            </div>
            <br />
            <div className="ammount">
              <p className="result">
                Power Consumption: {minutes} minutes or {hours} hours
              </p>
              <p className="result">
                Cost in Naira: ₦{cost}
              </p>
            </div>
          </div>
       
      </div>
    );
  }
}

export default PowerCalculator;
