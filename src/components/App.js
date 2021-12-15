import React, { Component } from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./ui/Footer";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <div>Hoooooome</div>} />
            <Route
              exact
              path="/services"
              component={() => <div>services</div>}
            />
            <Route
              exact
              path="/customsoftware"
              component={() => <div>customsoftware</div>}
            />
            <Route
              exact
              path="/mobileapps"
              component={() => <div>mobileapps</div>}
            />
            <Route
              exact
              path="/websites"
              component={() => <div>websites</div>}
            />
            <Route
              exact
              path="/revolution"
              component={() => <div>revolution</div>}
            />
            <Route
              exact
              path="/about"
              component={() => <div>about ussssssss</div>}
            />
            <Route
              exact
              path="/contact"
              component={() => <div>contact ussssssss</div>}
            />
            <Route
              exact
              path="/estimate"
              component={() => <div>estimate</div>}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
