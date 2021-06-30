import React from "react";
import "./App.css";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>hello from Bridgelabz</h1>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "hello from BridgeLabz !!!",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default App;
