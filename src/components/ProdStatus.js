import React, { Component } from "react";
import { StatusTable } from "./StatusTable";
import "./ProdStatus.css";

class ProdStatus extends Component {
  constructor() {
    super();
    this.state = {
      prodData: {
        prodFrontendStatusData: {
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
        prodBackendStatusData: {
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
    const response = await fetch("/detailed/prod");
    const prodData = await response.json();
    console.log(prodData);
    this.setState({ prodData });
  };

  componentDidMount() {
    const apiCall = this.apiCall;
    setInterval(apiCall, 30000);
  }

  render() {
    return (
      <div className="flex-box">
        <div className="front-end">
          <h2> Front end </h2>
          <StatusTable data={this.state.prodData.prodFrontendStatusData} />
        </div>
        <div className="back-end">
          <h2> Back end </h2>
          <StatusTable data={this.state.prodData.prodBackendStatusData} />
        </div>
      </div>
    );
  }
}

export default ProdStatus;
