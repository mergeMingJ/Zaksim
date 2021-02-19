import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { NotificationsActive } from '@material-ui/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { useHistory } from "react-router-dom";
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Alarm from './Alarm'



export default function Notifications({ onClick }) {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.size}>

      {/* 알림창 */}
      <NotificationsIcon
        fontSize="medium"
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={onClick}
      ></NotificationsIcon>

    </div>

  );
}




const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({

  // hide: {
  //   display: 'none',
  // },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#fede95'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#fede95'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 4),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    backgroundColor: '#fede95',
    fontSize: '20px',

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  marginIcon: {
    marginRight: theme.spacing(1)
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  },
  size: {
    width: '25px',
    height: '25px'
  }
}));