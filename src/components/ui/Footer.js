import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Grid } from "@material-ui/core";

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
  },
  gridItem: {
    margin: "3em",
  },
}));
export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              services
            </Grid>
            <Grid item className={classes.link}>
              Custom software dev
            </Grid>
            <Grid item className={classes.link}>
              Mobile app dev
            </Grid>
            <Grid item className={classes.link}>
              Website dev
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              The revolution
            </Grid>
            <Grid item className={classes.link}>
              vision
            </Grid>
            <Grid item className={classes.link}>
              Technology
            </Grid>
            <Grid item className={classes.link}>
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              About us
            </Grid>
            <Grid item className={classes.link}>
              history
            </Grid>
            <Grid item className={classes.link}>
              team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              Contact us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        alt="deco slash"
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  );
}
