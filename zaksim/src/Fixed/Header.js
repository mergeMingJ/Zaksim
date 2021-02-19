import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Box, Container } from "@material-ui/core";

import logo from "../Image/logo.png";

import UserItem from "./UserItem";

export default function Header() {
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();
  const [userId, setUserId] = useState(window.localStorage.getItem('userId'));

  const loginRequired = () => {
    alert('로그인 해주세요!')
  };

  return (
    <div className={classes.background}>
      <Grid container xs={12} className={classes.root}>
        <Grid item xs={4} md={4} lg={4} />
        <Grid
          item
          xs={4}
          md={4}
          lg={4}
          className={classes.center}
          style={{ zIndex: "1" }}
        >
          <img src={window.location.origin + "/Image/logo.png"} width={120} />
        </Grid>
        <Grid container xs={4} md={4} lg={4} className={classes.end}>
          <UserItem />
        </Grid>
      </Grid>
      <div className={classes.menuroot}>
        <Grid container justify="center">
          <HeaderMenu
            className={classes.sectionMobile}
            to="/"
            currentLocation={location.pathname}
            className={classes.menu}
          >
            Home
          </HeaderMenu>
          <HeaderMenu
            to="/About"
            currentLocation={location.pathname}
            className={classes.menu}
          >
            About
          </HeaderMenu>
          <HeaderMenu
            to="/Category"
            currentLocation={location.pathname}
            className={classes.menu}
          >
            Category
          </HeaderMenu>
          {
            userId === null
            ? <HeaderMenu
              currentLocation={location.pathname}
              className={classes.menu}
              onClick={loginRequired}
            >
              MyZaksim
            </HeaderMenu>
            : 
            <HeaderMenu
              to="/MyZaksim"
              currentLocation={location.pathname}
              className={classes.menu}
            >
              MyZaksim
            </HeaderMenu>
          }
          {
            userId === null
            ? <HeaderMenu
              currentLocation={location.pathname}
              className={classes.menu}
              onClick={loginRequired}
            >
              Community
            </HeaderMenu>
            : 
            <HeaderMenu
              to="/community"
              currentLocation={location.pathname}
              className={classes.menu}
            >
              Community
            </HeaderMenu>
          }
        </Grid>
      </div>
    </div>
  );
}
const HeaderMenu = ({ to, currentLocation, className, ...rest }) => (
  <Grid item>
    <Link
      to={to}
      className={className}
      style={{ color: to === currentLocation ? "#ff521b" : "#3E3D3D" }}
      {...rest}
    />
  </Grid>
);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // background: theme.palette.background.default,
    // display: 'flex',
    // justifyContent: 'center',
    position: "sticky",
    top: "0px",
  },
  menuroot: {
    width: "100%",
    // background: theme.palette.background.default,
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(1, 0, 2, 0),
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  end: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: theme.spacing(5),
  },

  background: {
    // background: theme.palette.background.default,
    backgroundColor: "rgba(0,0,0,0)",
    position: "absolute",
    width: "100%",
    zIndex: "1000",
  },
  menu: {
    textDecoration: "none",
    margin: theme.spacing(1, 4),
    fontSize: "18px",
    fontWeight: "bold",
  },
  sectionMobile: {
    fontSize: "15px",
    [theme.breakpoints.up("md")]: {
      fontSize: "10px",
    },
  },
}));
