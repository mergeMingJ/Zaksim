import React, { useState } from 'react';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import PageviewIcon from '@material-ui/icons/Pageview';

import SmallProfile from './SmallProfile';
import Notifications from './Notifications';
import NotificationsDrawer from './NotificationsDrawer';
import ProfileModal from './ProfileModal';
import SignupModal from './SignupModal';
import MenusDrawer from '../ActionCompents/MenusDrawer';

export default function NewHeader() {
  const classes = useStyles();

  const isLogin = window.localStorage.getItem('isLogin');

  const today = '게으름은 독이다.';

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
  // 로그인시 모달 열었다. 닫았다.
  const [profileopen, setProfileopen] = React.useState(false);
  const handleClickProfileOpen = () => {
    setProfileopen(true);
  };
  const handleClickProfileClose = () => {
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
  // 메뉴 사이드바
  const [menuopen, setMenuopen] = React.useState(false);
  const handleMenuDrawerOpen = () => {
    setMenuopen(true);
  };
  const handleMenuDrawerClose = () => {
    setMenuopen(false);
  };

  const colorTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#ff7761',
      },
    },
  });

  const [myTheme, setMyTheme] = useState(colorTheme);

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
      <MenuItem onClick={handleDrawerOpen}>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleAccountClickOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={myTheme}>
      <div className={classes.root}>
        {/* Modal + Drawer */}
        <NotificationsDrawer open={noticeopen} onClose={handleDrawerClose} />
        <ProfileModal open={profileopen} onClose={handleClickProfileClose} />
        <SignupModal open={accountopen} onClose={handleAccountClickClose} />
        <MenusDrawer open={menuopen} onClose={handleMenuDrawerClose} />

        <AppBar position="static">
          <Toolbar>
            <div className={classes.glow}>
              <IconButton
                // className={classes.}
                color="inherit"
                aria-label="open drawer"
                onClick={handleMenuDrawerOpen}
              >
                <MenuIcon />
                <Typography className={classes.title} variant="h6" noWrap>
                  작심
                </Typography>
              </IconButton>
            </div>

            {/* TODO: 알림 drawer 닫힘 이거 고쳐야함 */}
            <div className={classes.glow}>
              <Typography variant="h5" noWrap onClick={handleDrawerClose}>
                {today}
              </Typography>
            </div>

            {/* 검색 눌렀을 경우 보이도록 */}
            {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <SearchIcon />
              </IconButton>

              <IconButton aria-label="show 10 new notifications" color="inherit">
                <Badge badgeContent={10} color="secondary">
                  <Notifications onClick={handleDrawerOpen} />
                </Badge>
              </IconButton>
              {isLogin === 'true' ? (
                <SmallProfile profileopen={profileopen} onClick={handleClickProfileOpen} />
              ) : (
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
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </ThemeProvider>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    background: theme.palette.background.default,
    flexGrow: 1,
  },
  glow: {
    flexGrow: 1,
  },

  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginLeft: theme.spacing(1),
    },
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
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
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
  appbar: {
    background: theme.palette.background.default,
  },
}));
