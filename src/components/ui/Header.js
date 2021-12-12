import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import useScrollTrigger from "@mui/material/useScrollTrigger";
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header(props) {
  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar> Arc Development </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
