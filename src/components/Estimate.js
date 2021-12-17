import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    marginLeft: "25em",
  },
  images: {
    width: "100%",
  },
}));

export default function Estimate() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="JavaScript" {...a11yProps(0)} />
          <Tab label="Python" {...a11yProps(1)} />
          <Tab label="Kotlin" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <img
            alt="JS"
            className={classes.images}
            src="https://fedojo.com/wp-content/uploads/2019/03/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png"
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <img
            alt="Py"
            className={classes.images}
            src="https://mpng.subpng.com/20180811/pul/kisspng-python-general-purpose-programming-language-comput-python-programming-language-symphony-solution-5b6ee0c863a5a1.6306397415339931604082.jpg"
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <img
            alt="Kotlin"
            className={classes.images}
            src="https://logowik.com/content/uploads/images/kotlin.jpg"
          />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
