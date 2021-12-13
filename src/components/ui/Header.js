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
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
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
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    background: "#0B72B9",
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: "#FFBA60",
  },
  drawerItemSelectedStyle: {
    opacity: 1,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
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
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Custom Software development",
      Link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Mobile app development",
      Link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website development",
      Link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    {
      name: "Home",
      link: "/",
      activeIndex: 0,
    },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
    },
    {
      name: "Revolution",
      link: "/revolution",
      activeIndex: 2,
    },
    {
      name: "About us",
      link: "/about",
      activeIndex: 3,
    },
    {
      name: "Contact",
      link: "/contact",
      activeIndex: 4,
    },
  ];

  // keep track of the active button in the nav
  useEffect(() => {
    [...MenuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setvalue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectIndex) {
              setselectIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, MenuOptions, selectIndex, routes]);

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
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem
            divider
            button
            component={Link}
            to="/"
            onClick={() => {
              setopenDrawer(false);
              setvalue(0);
            }}
            selected={value === 0}
          >
            <ListItemText
              className={
                value === 0
                  ? [classes.drawerItem, classes.drawerItemSelectedStyle]
                  : classes.drawerItem
              }
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/services"
            onClick={() => {
              setopenDrawer(false);
              setvalue(1);
            }}
            selected={value === 1}
          >
            <ListItemText
              className={
                value === 1
                  ? [classes.drawerItem, classes.drawerItemSelectedStyle]
                  : classes.drawerItem
              }
              disableTypography
            >
              services
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/revolution"
            onClick={() => {
              setopenDrawer(false);
              setvalue(2);
            }}
            selected={value === 2}
          >
            <ListItemText
              className={
                value === 2
                  ? [classes.drawerItem, classes.drawerItemSelectedStyle]
                  : classes.drawerItem
              }
              disableTypography
            >
              revolution
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/about"
            onClick={() => {
              setopenDrawer(false);
              setvalue(3);
            }}
            selected={value === 3}
          >
            <ListItemText
              className={
                value === 3
                  ? [classes.drawerItem, classes.drawerItemSelectedStyle]
                  : classes.drawerItem
              }
              disableTypography
            >
              About us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/contact"
            onClick={() => {
              setopenDrawer(false);
              setvalue(4);
            }}
            selected={value === 4}
          >
            <ListItemText
              className={
                value === 4
                  ? [classes.drawerItem, classes.drawerItemSelectedStyle]
                  : classes.drawerItem
              }
              disableTypography
            >
              Contact us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/estimate"
            onClick={() => {
              setopenDrawer(false);
              setvalue(5);
            }}
            className={classes.drawerItemEstimate}
            selected={value === 5}
          >
            <ListItemText
              className={
                value === 5
                  ? [classes.drawerItem, classes.drawerItemSelectedStyle]
                  : classes.drawerItem
              }
              disableTypography
            >
              Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setopenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appbar}>
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
