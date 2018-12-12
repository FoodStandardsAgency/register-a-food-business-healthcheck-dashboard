import React, { Component } from "react";
import { StatusTable } from "./StatusTable";
import "./StagingStatus.css";

class StagingStatus extends Component {
  constructor() {
    super();
    this.state = {
      stagingData: {
        stagingFrontendStatusData: {
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
        stagingBackendStatusData: {
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
    try {
      const response = await fetch("/detailed/staging");
      const stagingData = await response.json();
      console.log(stagingData);
      this.setState({ stagingData });
    } catch (err) {
      const customError = new Error();
      customError.name = "fetchErrorStagingDetailed";
      customError.message = `Fetch to healthcheck backend /detailed/staging route failed with error: ${
        err.message
      }`;
      console.error(customError);
    }
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
          <StatusTable
            data={this.state.stagingData.stagingFrontendStatusData}
          />
        </div>
        <div className="back-end">
          <h2> Back end </h2>
          <StatusTable data={this.state.stagingData.stagingBackendStatusData} />
        </div>
      </div>
    );
  }
}

export default StagingStatus;
