import React, { Component } from "react";
import { withCookies, Cookies } from 'react-cookie';
import LogIn from "./LogIn";

class RegistrationStats extends Component {
  constructor(props) {

    super(props);

    const { cookies } = props;

    this.state = {
      loading: true,
      token: cookies.get('token') || "",
      loggedIn: false,
      registrationStats: "Loading..."
    };

  }

  apiCall = async () => {
    console.log("Registration stats called");
    const response = await fetch("/registrationStats", { credentials: "include" });
    const registrationStats = await response.json();
    this.setState({ registrationStats });
  };

  isLoggedIn = async () => {
    console.log("isLoggedIn called");
    const response = await fetch("/isLoggedIn", { credentials: "include" });
    if (response.status === 200) {
      console.log("Logged in");
      this.setState({
        loggedIn: true,
        loading: false
      });
    } else {
      console.log("Not logged in");
      this.setState({
        loggedIn: false,
        loading: false
      });
    }
  };

  componentDidMount() {
    this.isLoggedIn();
    this.apiCall();
    setInterval(this.apiCall, 30000);
  }

  render() {
    if (this.state.loading) {
      return (<h3>Loading...</h3>)
    }
    return this.state.loggedIn ? (
      <div className="flex-box">
        <div className="front-end">
          <h2> Registration Stats </h2>
          {this.state.registrationStats.message}
        </div>
      </div>
    ) : <LogIn />;
  }
}

export default withCookies(RegistrationStats);
