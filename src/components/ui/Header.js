import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
//MUI inport
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import { Tabs, Tab } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
//scroll fix MUI Function
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
//styles
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "8em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    // bring the attribute from theme file
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  menu: {
    backgroundColor: "#0B72B9",
    color: "white",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

function Header(props) {
  const classes = useStyles();
  //set the value to select the tab in the tabBar
  const [value, setvalue] = useState(0);
  // Func to handle the value on the click
  const handleChange = (e, value) => {
    setvalue(value);
  };
  // menu setting
  const [anchorEl, setanchorEl] = useState(null);
  const [open, setopen] = useState(false);
  //opening menu
  const handleClick = (e) => {
    setanchorEl(e.currentTarget);
    setopen(true);
  };
  //closing menu
  const handleClose = (e) => {
    setanchorEl(null);
    setopen(false);
  };
  // keep track of the active button in the nav
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setvalue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setvalue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setvalue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setvalue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setvalue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setvalue(5);
    }
    // add value to not keep extra performance
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              onClick={() => setvalue(0)}
              component={Link}
              to="/"
              className={classes.logoContainer}
              disableRipple
            >
              <img src={logo} alt="logo" className={classes.logo} />
            </Button>
            <Tabs
              className={classes.tabContainer}
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/services"
                label="Services"
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={(e) => handleClick(e)}
              />
              <Tab
                className={classes.tab}
                component={Link}
                label="The Revolution"
                to="/revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                label="About Us"
                to="/about"
              />
              <Tab
                className={classes.tab}
                component={Link}
                label="Contact Us"
                to="/contact"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              component={Link}
              to="/estimate"
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              classes={{ paper: classes.menu }}
              elevation={0}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  setvalue(1);
                }}
                component={Link}
                to="/services"
                classes={{ root: classes.menuItem }}
              >
                Services
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setvalue(1);
                }}
                component={Link}
                to="/customsoftware"
                classes={{ root: classes.menuItem }}
              >
                Custom software development
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setvalue(1);
                }}
                component={Link}
                to="/mobileapps"
                classes={{ root: classes.menuItem }}
              >
                {" "}
                Mobile app development
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setvalue(1);
                }}
                component={Link}
                to="/websites"
                classes={{ root: classes.menuItem }}
              >
                {" "}
                Website development
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header;
