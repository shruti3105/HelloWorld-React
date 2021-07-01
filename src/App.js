import "./App.css";
import React from "react";
import logo from "./img/BridgeLabzLogo.svg";

class App extends React.Component {
  url = "https://www.bridgelabz.com/";
  constructor() {
    super();
    this.state = {
      userName: "",
      nameError: "",
    };
  }

  //onClick function
  onClick = ($event) => {
    console.log("save button is clicked", $event);
    window.open(this.url, "_blank");
  };

  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    const nameRegex = RegExp("^[A-Z]{1}[a-zA-z\\s]{2,}$");
    //set the title using setState method
    this.setState({ userName: event.target.value });

    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: "" });
    } else {
      this.setState({ nameError: "Name is Invalid" });
    }
  };

  render() {
    return (
      <div>
        <div>
          <h1>Hello {this.state.userName} From BridgeLabz</h1>
          <img src={logo} onClick={this.onClick} alt="The BridgeLabz Logo" />
        </div>
        <div className="text-box">
          <input onChange={this.onNameChange} />
          <span className="error-output">{this.state.nameError}</span>
        </div>
      </div>
    );
  }
}
export default App;
