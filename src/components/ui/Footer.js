import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Hidden } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#0B72B9",
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
}));
export default function Footer({
  value,
  setvalue,
  selectIndex,
  setselectIndex,
}) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setvalue(0)}
                to="/"
                className={classes.link}
              >
                home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setvalue(1);
                  setselectIndex(0);
                }}
                to="/services"
                className={classes.link}
              >
                services
              </Grid>
              <Grid
                item
                component={Link}
                to="/customsoftware"
                className={classes.link}
                onClick={() => {
                  setvalue(1);
                  setselectIndex(1);
                }}
              >
                Custom software dev
              </Grid>
              <Grid
                item
                component={Link}
                to="/mobileapps"
                className={classes.link}
                onClick={() => {
                  setvalue(1);
                  setselectIndex(2);
                }}
              >
                Mobile app dev
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setvalue(1);
                  setselectIndex(3);
                }}
                to="/websites"
                className={classes.link}
              >
                Website dev
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => setvalue(2)}
              >
                The revolution
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => setvalue(2)}
              >
                vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => setvalue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => setvalue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setvalue(3)}
                to="/about"
                className={classes.link}
              >
                About us
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => setvalue(3)}
                className={classes.link}
              >
                history
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => setvalue(3)}
                className={classes.link}
              >
                team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/contact"
                onClick={() => setvalue(4)}
                className={classes.link}
              >
                Contact us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="deco slash"
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  );
}
