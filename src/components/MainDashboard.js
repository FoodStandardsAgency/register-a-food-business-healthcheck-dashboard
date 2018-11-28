import React, { Component } from "react";
import "./MainDashboard.css";
import { MainDashboardCard } from "./MainDashboardCard";

class MainDashboard extends Component {
  constructor() {
    super();
    this.state = {
      allData: {
        testData: {
          frontEndHealthcheck: "LOADING",
          backEndHealthcheck: "LOADING"
        },
        stagingData: {
          frontEndHealthcheck: "LOADING",
          backEndHealthcheck: "LOADING"
        },
        prodData: {
          frontEndHealthcheck: "LOADING",
          backEndHealthcheck: "LOADING"
        }
      }
    };
  }

  apiCall = async () => {
    const response = await fetch("/data");
    const allData = await response.json();
    console.log(allData);
    this.setState({ allData });
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
          title="Testing"
          frontendHealthcheck={this.state.allData.testData.frontEndHealthcheck}
          backendHealthcheck={this.state.allData.testData.backEndHealthcheck}
          href="/test-status"
          onClick={this.handleClick}
        />
        <MainDashboardCard
          title="Staging"
          frontendHealthcheck={
            this.state.allData.stagingData.frontEndHealthcheck
          }
          backendHealthcheck={this.state.allData.stagingData.backEndHealthcheck}
          href="/staging-status"
          onClick={this.handleClick}
        />
        <MainDashboardCard
          title="Production"
          frontendHealthcheck={this.state.allData.prodData.frontEndHealthcheck}
          backendHealthcheck={this.state.allData.prodData.backEndHealthcheck}
          href="/prod-status"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default MainDashboard;
