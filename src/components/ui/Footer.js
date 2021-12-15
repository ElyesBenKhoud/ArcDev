import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#0B72B9",
    width: "100%",
  },
}));
export default function Footer() {
  const classes = useStyles();

  return <footer className={classes.footer}>example footer</footer>;
}
