import React, { Component } from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <div>Hoooooome</div>} />
            <Route exact path="/" component={() => <div>Hoooooome</div>} />
            <Route exact path="/" component={() => <div>Hoooooome</div>} />
            <Route exact path="/" component={() => <div>Hoooooome</div>} />
            <Route exact path="/" component={() => <div>Hoooooome</div>} />
            <Route exact path="/" component={() => <div>Hoooooome</div>} />
            <Route exact path="/" component={() => <div>Hoooooome</div>} />
            <Route exact path="/" component={() => <div>Hoooooome</div>} />
            <Route exact path="/" component={() => <div>Hoooooome</div>} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
