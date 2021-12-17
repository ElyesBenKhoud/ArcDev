import React, { useState } from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./ui/Footer";
import Home from "./Home";
function App() {
  const [selectIndex, setselectIndex] = useState(0);
  const [value, setvalue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setvalue={setvalue}
          selectIndex={selectIndex}
          setselectIndex={setselectIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              // <div style={{ height: "376px" }}>
              <Home />
            )}
          />
          <Route
            exact
            path="/services"
            component={() => <div style={{ height: "376px" }}>services</div>}
          />
          <Route
            exact
            path="/customsoftware"
            component={() => (
              <div style={{ height: "376px" }}>customsoftware</div>
            )}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div style={{ height: "376px" }}>mobileapps</div>}
          />
          <Route
            exact
            path="/websites"
            component={() => <div style={{ height: "376px" }}>websites</div>}
          />
          <Route
            exact
            path="/revolution"
            component={() => <div style={{ height: "376px" }}>revolution</div>}
          />
          <Route
            exact
            path="/about"
            component={() => (
              <div style={{ height: "376px" }}>about ussssssss</div>
            )}
          />
          <Route
            exact
            path="/contact"
            component={() => (
              <div style={{ height: "376px" }}>contact ussssssss</div>
            )}
          />
          <Route
            exact
            path="/estimate"
            component={() => <div style={{ height: "376px" }}>estimate</div>}
          />
        </Switch>
        <Footer
          value={value}
          setvalue={setvalue}
          selectIndex={selectIndex}
          setselectIndex={setselectIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
