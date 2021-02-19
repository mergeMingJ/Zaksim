import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import StarBorder from '@material-ui/icons/StarBorder';


export default function NotificationsDrawer({ open, onClose }) {
  const history = useHistory();
  const classes = useStyles();

  const [openCategory, setOpenCategory] = React.useState(true);

  const handleClick = () => {
    setOpenCategory(!openCategory);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box boxShadow={3} onClick={onClose}>
        <div className={classes.drawerHeader}>
          <HomeIcon className={classes.marginIcon} />
          작심
        </div>
      </Box>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="메인페이지" />
        </ListItem>
      </Link>

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="카테고리" />
        {openCategory ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openCategory} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="운동" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="독서" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="공부" />
          </ListItem>
        </List>
      </Collapse>



      <Link to="/Detail" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="작심나눔" />
        </ListItem>
      </Link>
      <Link to="/MyZaksim" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="나의 작심" />
        </ListItem>
      </Link>
      <Link to="/community" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="커뮤니티" />
        </ListItem>
      </Link>
      <Link to="/mypage" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="나의 정보" />
        </ListItem>
      </Link>
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
    backgroundColor: '#fcf2f5',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#fcf2f5',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 4),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    backgroundColor: '#ff7761',
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
    marginRight: theme.spacing(1),
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  size: {
    width: '25px',
    height: '25px',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
