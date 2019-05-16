import React, { Component } from "react";
import "./MainDashboard.css";
import { MainDashboardCard } from "./MainDashboardCard";

class MainDashboard extends Component {
  constructor() {
    super();
    this.state = {
      pingData: {
        frontEndHealthcheck: "LOADING",
        backEndHealthcheck: "LOADING"
      }
    };
  }

  apiCall = async () => {
    const response = await fetch("/data");
    const pingData = await response.json();
    console.log(pingData);
    this.setState({ pingData });
  };

  componentDidMount() {
    this.apiCall();
  }

  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    return (
      <div className="grid-container">
        <MainDashboardCard
          title="General Status"
          frontendHealthcheck={this.state.pingData.frontEndHealthcheck}
          backendHealthcheck={this.state.pingData.backEndHealthcheck}
          href="/status"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default MainDashboard;
