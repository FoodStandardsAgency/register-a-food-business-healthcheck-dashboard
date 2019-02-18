import React, { Component } from "react";
import { withCookies } from 'react-cookie';
import { differenceInHours } from 'date-fns';
import RegistrationTable from "./RegistrationTable";
import Radio from "@govuk-react/radio";
import "./RegistrationTable.css";

class RegistrationStatsView extends Component {
  constructor(props) {

    super(props);

    this.state = {
      registrationStats: {},
      displayedStats: {
        councils: []
      },
      timeFilter: "0"
    };

  }

  apiCall = async () => {
    console.log("Registration stats called");
    const response = await fetch("/registrationStats", { credentials: "include" });
    const registrationStats = await response.json();
    this.constructDisplayedStats(registrationStats, this.state.timeFilter);
  };

  constructDisplayedStats = (registrationStats = [], timeFilter)  => {
    const rawCouncils = {};
    registrationStats.forEach(registration => {
      if (timeFilter === "0" || differenceInHours(new Date(), registration.createdAt) < timeFilter) {
        if (rawCouncils[registration.council]) {
          rawCouncils[registration.council] += 1;
        } else {
          rawCouncils[registration.council] = 1;
        }
      }
    });
    const displayedStats = {
      councils: []
    };
    Object.keys(rawCouncils).forEach(council => {
      displayedStats.councils.push({ name: council, count: rawCouncils[council] });
    });
    console.log(displayedStats);
    this.setState({ registrationStats, displayedStats });
  }

  handleCheckBoxChange = e => {
    this.constructDisplayedStats(this.state.registrationStats, e.target.value);
  }

  componentDidMount() {
    this.apiCall();
    setInterval(this.apiCall, 30000);
  }

  render() {
    return (
      <div>
        <div className="flex-container">
          <div className="flex-box"></div>
          <div className="flex-box">
            <div>
              <h2>Show registrations from the last: </h2>
              <Radio name="timeFilter" value="0" onChange={this.handleCheckBoxChange}>Forever</Radio>
              <Radio name="timeFilter" value="24" onChange={this.handleCheckBoxChange}>24 hours</Radio>
              <Radio name="timeFilter" value="168" onChange={this.handleCheckBoxChange}>7 days</Radio>
              <Radio name="timeFilter" value="720" onChange={this.handleCheckBoxChange}>1 month</Radio>
            </div>
          </div>
          <div className="flex-box"></div>
        </div>
        <RegistrationTable councils={this.state.displayedStats.councils} />
      </div>
    );
  }
}

export default withCookies(RegistrationStatsView);
