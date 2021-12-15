import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import footerAdornment from "../../assets/Footer Adornment.svg";
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#0B72B9",
    width: "100%",
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
}));
export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img
        alt="deco slash"
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  );
}
