import React from "react";
import "./App.css";
import logo from "./img/BridgeLabzLogo.svg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Hello from BridgeLabz",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img
          src={logo}
          alt="The Bridgelabz logo: a Bridge to Employment through lab works"
        />
      </div>
    );
  }
}

export default App;
