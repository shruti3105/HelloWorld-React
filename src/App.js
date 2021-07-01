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
          <h1>Hello {this.state.userName} from Bridgelabz</h1>
          <img
            src={logo}
            onClick={this.onClick}
            alt="The Bridgelabz logo : a Bridge to Employment through lab works"
          />
        </div>
        <div>
          <input class="text-box" onChange={this.onNameChange} />
          <span className="error-output">{this.state.nameError}</span>
        </div>
        <div>
          <p>At BridgeLabz, we're a community of</p>
          <ul>
            <li>technologists</li>
            <li>thinkers</li>
            <li>builders</li>
          </ul>
          <p>
            Working together to keep the Tech Employability of Engineers alive
            and accessible, so Tech Companies worldwide can get contributors and
            creators for Technology Solutions. We believe this act of
            humancollaboration across an employability platform is essential to
            indivisual growth and our collective future.
          </p>

          <p>
            To Know about us, visit{" "}
            <a href="https://www.bridgelabz.com/">BridgeLabz</a> to learn even
            more about our mission i.e. <strong> Employability to all</strong>.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
