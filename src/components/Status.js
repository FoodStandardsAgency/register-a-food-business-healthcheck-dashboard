import React, { Component } from "react";
import { StatusTable } from "./StatusTable";
import "./Status.css";

class Status extends Component {
  constructor() {
    super();
    this.state = {
      statusData: {
        frontendStatusData: {
          frontendStatus: "Loading",
          registrationsStarted: "Loading",
          submissionsSucceeded: "Loading",
          submissionsFailed: "Loading",
          mostRecentSubmitSucceeded: "Loading",
          addressLookupsSucceeded: "Loading",
          addressLookupsReturnedZero: "Loading",
          addressLookupsFailed: "Loading",
          mostRecentAddressLookupSucceeded: "Loading"
        },
        backendStatusData: {
          backendStatus: "Loading",
          submissionsReceived: "Loading",
          authenticationsPassed: "Loading",
          authenticationsBlocked: "Loading",
          fsaRnCallsSucceeded: "Loading",
          fsaRnCallsFailed: "Loading",
          mostRecentFsaRnCallSucceeded: "Loading",
          tascomiCreateRegistrationCallsSucceeded: "Loading",
          tascomiCreateRegistrationCallsFailed: "Loading",
          mostRecentTascomiCreateRegistrationSucceeded: "Loading",
          tascomiCreateRefnumberCallsSucceeded: "Loading",
          tascomiCreateRefnumberCallsFailed: "Loading",
          mostRecentTascomiCreateRefnumberSucceeded: "Loading",
          storeRegistrationsInDbSucceeded: "Loading",
          storeRegistrationsInDbFailed: "Loading",
          mostRecentStoreRegistrationInDbSucceeded: "Loading",
          storeRegistrationsInCacheSucceeded: "Loading",
          storeRegistrationsInCacheFailed: "Loading",
          mostRecentRegistrationInCacheSucceeded: "Loading",
          getConfigFromDbSucceeded: "Loading",
          getConfigFromDbFailed: "Loading",
          mostRecentGetConfigFromDbSucceeded: "Loading",
          emailNotificationsSucceeded: "Loading",
          emailNotificationsFailed: "Loading",
          mostRecentEmailNotificationSucceeded: "Loading",
          endToEndRegistrationsSucceeded: "Loading",
          endToEndRegistrationsFailed: "Loading",
          mostRecentEndToEndRegistrationSucceeded: "Loading"
        }
      }
    };
  }

  apiCall = async () => {
    const response = await fetch("/detailed");
    const statusData = await response.json();
    console.log(statusData);
    this.setState({ statusData });
  };

  componentDidMount() {
    const apiCall = this.apiCall;
    apiCall();
    setInterval(apiCall, 30000);
  }

  render() {
    return (
      <div className="flex-box">
        <div className="front-end">
          <h2> Front end </h2>
          <StatusTable data={this.state.statusData.frontendStatusData} />
        </div>
        <div className="back-end">
          <h2> Back end </h2>
          <StatusTable data={this.state.statusData.backendStatusData} />
        </div>
      </div>
    );
  }
}

export default Status;
