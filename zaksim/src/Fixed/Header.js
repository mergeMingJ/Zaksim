import React from 'react';
import { Link, withStyles, Grid, Menu } from '@material-ui/core';
import Logo from '../Image/Logo.png';
import { AccountCircle, NotificationsActive } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const MenuItem = withStyles({
  root: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '40px',
  },
})(Link);

const Header = () => {
  const history = useHistory();
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item md={2} align="center">
          <MenuItem href="/">
            <img src={Logo} alt="작심!"></img>
          </MenuItem>
        </Grid>
        <Grid item md={2} align="center">
          <MenuItem href="/">{'홈'}</MenuItem>
        </Grid>
        <Grid item md={2} align="center">
          <MenuItem href="/">{'작심이란'}</MenuItem>
        </Grid>
        <Grid item md={2} align="center">
          <MenuItem href="/">{'작심나눔'}</MenuItem>
        </Grid>
        <Grid item md={2} align="center">
          <MenuItem href="/MyZaksim">{'나의작심'}</MenuItem>
          </Grid>
        <Grid item md={2} align="center">
          <MenuItem href="/community">
            {'열린마당'}
          </MenuItem>
        </Grid>
        <Grid item md={2} align="center">
          <AccountCircle
            fontSize="large"
            onClick={function handleClick() {
              history.push('/mypage');
            }}
          ></AccountCircle>
          <NotificationsActive fontSize="large"></NotificationsActive>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
