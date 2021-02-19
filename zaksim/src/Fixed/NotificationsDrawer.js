import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { NotificationsActive } from '@material-ui/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Alarm from './Alarm';

export default function NotificationsDrawer({ noticeopen, onClose }) {
  const history = useHistory();
  const classes = useStyles();

  // console.log(onClose)
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={noticeopen}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box boxShadow={3}>
        <div className={classes.drawerHeader} onClick={onClose}>
          <NotificationsActive className={classes.marginIcon} />
          알림
        </div>
      </Box>
      <List>
        <Alarm className={classes.center} onClose={onClose} />
      </List>
    </Drawer>
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
    backgroundColor: '#fef0cf',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#fef0cf',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 4),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    backgroundColor: '#fc9e4f',
    fontSize: '20px',
    color: 'white'

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
    marginRight: theme.spacing(1),
    color: 'white'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  size: {
    width: '25px',
    height: '25px',
  },
}));
