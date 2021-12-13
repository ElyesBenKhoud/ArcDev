import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
//MUI inport
import AppBar from "@material-ui/core/AppBar";
import { IconButton, Toolbar } from "@material-ui/core";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import { Tabs, Tab } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { SwipeableDrawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
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
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4.5em",
    },
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
    borderRadius: "0px",
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
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setopenDrawer] = useState(false);
  //set the value to select the tab in the tabBar
  const [value, setvalue] = useState(0);
  // Func to handle the value on the click
  const handleChange = (e, newValue) => {
    setvalue(newValue);
  };
  // menu setting
  const [anchorEl, setanchorEl] = useState(null);
  const [openMenu, setopenMenu] = useState(false);
  //keep track of the active metu component
  const [selectIndex, setselectIndex] = useState(0);
  //opening menu
  const handleClick = (e) => {
    setanchorEl(e.currentTarget);
    setopenMenu(true);
  };
  //closing menu
  const handleClose = (e) => {
    setanchorEl(null);
    setopenMenu(false);
  };

  // handle the click in the menu
  const handleMenuClick = (e, i) => {
    setanchorEl(null);
    setopenMenu(false);
    setselectIndex(i);
  };

  //menuoptions to optimize the code
  const MenuOptions = [
    {
      name: "Services",
      Link: "/services",
    },
    {
      name: "Custom Software development",
      Link: "/customsoftware",
    },
    {
      name: "Mobile app development",
      Link: "/mobileapps",
    },
    {
      name: "Website development",
      Link: "/websites",
    },
  ];

  // keep track of the active button in the nav
  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setvalue(0);
        }
        break;
      case "/services":
        if (value !== 1) {
          setvalue(1);
          setselectIndex(0);
        }
        break;
      case "/customsoftware":
        if (value !== 1) {
          setvalue(1);
          setselectIndex(1);
        }
        break;
      case "/mobileapps":
        if (value !== 1) {
          setvalue(1);
          setselectIndex(2);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setvalue(1);
          setselectIndex(3);
        }
        break;
      case "/revolution":
        if (value !== 2) {
          setvalue(2);
        }
        break;
      case "/about":
        if (value !== 3) {
          setvalue(3);
        }
        break;

      case "/contact":
        if (value !== 4) {
          setvalue(4);
        }
        break;
      case "/estimate":
        if (value !== 5) {
          setvalue(5);
        }
      default:
        break;
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        className={classes.tabContainer}
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
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
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {MenuOptions.map((option, i) => (
          <MenuItem
            key={option}
            component={Link}
            to={option.Link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuClick(event, i);
              setvalue(1);
              handleClose();
            }}
            selected={i === selectIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
        onOpen={() => setopenDrawer(true)}
      >
        Example drawer
      </SwipeableDrawer>
      <IconButton onClick={() => setopenDrawer(!openDrawer)} disableRipple>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );

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
            {/* if the screen is full render tabs otherwise don't */}
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header;
