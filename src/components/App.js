import React, { Component } from "react";
import Header from "./ui/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {[...new Array(12)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
      </div>
    );
  }
}

export default App;
