import React, { Component } from "react";
// import { StatusTable } from "./StatusTable";
import "./LogIn.css";
import ContentItem from "./ContentItem";
import InputField from "@govuk-react/input-field";
import Button from "@govuk-react/button";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="flex-box">
      <div className="log-in-container"></div>
        <div className="log-in-container">
          <h2> Log in page </h2>
          <form action="/login" method="post">
            <ContentItem.B_30_15>
              <InputField input={{ name: "username" }}>Username</InputField>
            </ContentItem.B_30_15>
            <ContentItem.B_30_15>
              <InputField input={{ name: "password", type: "password" }}>Password</InputField>
            </ContentItem.B_30_15>
            <ContentItem.B_30_15>
              <Button type="submit">Log in</Button>
            </ContentItem.B_30_15>
          </form>
        </div>
        <div className="log-in-container"></div>
      </div>
    );
  }
}

export default LogIn;
