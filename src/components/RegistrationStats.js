import React, { Component } from "react";
import { withCookies } from 'react-cookie';
import RegistrationStatsView from "./RegistrationStatsView";
import LogIn from "./LogIn";

class RegistrationStats extends Component {
  constructor(props) {

    super(props);

    const { cookies } = props;

    this.state = {
      loading: true,
      token: cookies.get('token') || "",
      loggedIn: false,
    };
  }

  isLoggedIn = async () => {
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
  }

  render() {
    if (this.state.loading) {
      return (<h3>Loading...</h3>)
    }
    return ( this.state.loggedIn ? <RegistrationStatsView registrationStats={this.state.registrationStats}/> : <LogIn /> );
  }
}

export default withCookies(RegistrationStats);
