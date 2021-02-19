import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { createMuiTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';

import SmallProfile from './SmallProfile';
import Notifications from './Notifications';
import NotificationsDrawer from './NotificationsDrawer';
import ProfileModal from './ProfileModal';
import SignupModal from './SignupModal';
import MenusDrawer from '../ActionCompents/MenusDrawer';
import { Link } from 'react-router-dom';
import http from '../common/axios/index';



export default function UserItem() {
  const classes = useStyles();

  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')



  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    setUserId(window.localStorage.getItem('userId'));
  }, [userId])


  const isLogin = window.localStorage.getItem('isLogin')
  const alarm = window.localStorage.getItem('alarm')

  // const MyProfile = window.localStorage.getItem('profileimgPath');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // 알림창 사이드바
  const [noticeopen, setNoticeopen] = React.useState(false);
  const handleDrawerOpen = () => {
    setNoticeopen(true);
  };
  const handleDrawerClose = () => {
    setNoticeopen(false);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      return window.location.href = `/Category/${title}`
    }
  };
  // console.log(noticeopen)

  // 로그인시 프로필 모달 열었다. 닫았다.
  const [profileopen, setProfileopen] = React.useState(false);
  const handleClickProfileOpen = () => {
    setProfileopen(true);
  };
  const handleClickProfileClose = () => {
    setProfileopen(false);
  };
  const getLogout = () => {
    setProfileopen(false);
  };

  // signup, Login Modal 열었다 닫았다.
  const [accountopen, setAccountopen] = React.useState(false);
  const handleAccountClickOpen = () => {
    setAccountopen(true);
  };
  const handleAccountClickClose = () => {
    setAccountopen(false);
  };

  const colorTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#fff9ec',
      },
    },
  });
  // console.log(alarm)

  // console.log(userId)

  const menuId = 'secondary-search-account-menu';
  const renderMenu = (
    <Menu
      className={classes.appbar}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'secondary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* TODO: 로그인 상태에서 보여지지 않거나 활성화 금지 */}
      {/* 눌럿을 경우 전체 Notifications 동작 */}
      <MenuItem onClick={handleDrawerOpen} open={noticeopen}>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          {
            alarm !== 0 ?
              <Badge badgeContent={'new'} color="primary">
                <Notifications noticeopen={noticeopen} />
              </Badge> :
              <Notifications noticeopen={noticeopen} />

          }
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      {
        isLogin === 'true' ? (
          <MenuItem onClick={handleClickProfileOpen}>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <SmallProfile
                profileopen={profileopen}
                onClick={handleClickProfileOpen}
                userId={userId}
              />
            </IconButton>
          </MenuItem>
        ) : (
            <MenuItem onClick={handleAccountClickOpen}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleAccountClickOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <p style={{ marginLeft: '12px' }}>Profile</p>
            </MenuItem>
          )
      }
    </Menu >
  );

  return (
    <div className={classes.root}>
      {/* Modal + Drawer */}
      <div>
        <NotificationsDrawer noticeopen={noticeopen} onClose={handleDrawerClose} />
        <ProfileModal open={profileopen} onClose={handleClickProfileClose} />
        <SignupModal open={accountopen} onClose={handleAccountClickClose} />
      </div>

      <div className={classes.sectionDesktop}>
        <Link to={`Category/${title}`}><IconButton><SearchIcon style={{ color: "#3E3D3D" }}
        /></IconButton></Link>
        <input onChange={handleChange} onKeyPress={handleEnter} className={classes.searchInput}></input>

        <IconButton aria-label="show 10 new notifications" color="inherit" onClick={handleDrawerOpen} open={noticeopen}>
          {
            alarm !== 0 ?
              <div className={classes.size}>
                <NotificationsIcon
                  fontSize="medium"
                  style={{ color: "#3E3D3D" }}
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                ></NotificationsIcon>
              </div> :
              <Notifications noticeopen={noticeopen} />

          }
        </IconButton>
        {isLogin === 'true' ? (
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleClickProfileOpen}
            color="inherit"
          >
            <SmallProfile
              profileopen={profileopen}
              onClick={handleClickProfileOpen}
              userId={userId}
            />
          </IconButton>
        ) : (
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleAccountClickOpen}
              style={{ color: "#3E3D3D" }}
            >
              <AccountCircle />
            </IconButton>
          )}
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>

      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  glow: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  center: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  userInfo: {
    marginLeft: theme.spacing(1),
  },
  size: {
    width: '25px',
    height: '25px',
  },
  searchInput: {
    height: '30px',
    margin: '11px 0',
  }


}));
