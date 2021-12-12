import React, { Component } from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./ui/Theme";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Header />
      </ThemeProvider>
    );
  }
}

export default App;
