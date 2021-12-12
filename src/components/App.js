import React, { Component } from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        hello
      </ThemeProvider>
    );
  }
}

export default App;
