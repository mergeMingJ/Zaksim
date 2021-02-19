import React from 'react';
import { makeStyles, Dialog } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CancelIcon from '@material-ui/icons/Cancel';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import ContactsIcon from '@material-ui/icons/Contacts';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Profile from './Profile'
import Divider from '@material-ui/core/Divider';
import { useHistory } from "react-router-dom"


export default function ProfilesModal({ open, onClose }) {
  const classes = useStyles();
  const history = useHistory();


  const logout = () => {
    window.localStorage.clear();
    onClose();
    history.push('/');
  }

  return (
    < Dialog
      classes={{ paper: classes.dialog }}
      open={open} onClose={onClose}
    >
      {/* <DialogActions>
        <Button onClick={onProfileClose} color="primary">
          <CancelIcon />
        </Button>
      </DialogActions> */}

      <DialogContent >
        <Profile />
        <br />
        <Divider />
        <ListItem button
          onClick={
            function handleClick() {
              history.push("/MyZaksim");
            }
          }
        >
          <ListItemIcon>
            <DirectionsRunIcon style={{ color: "#020122" }} />
          </ListItemIcon>
          <ListItemText primary="나의 작심" style={{ color: "#020122", fontFamily: 'KOTRA_BOLD-Bold' }} />
        </ListItem>
        <ListItem button
          onClick={
            function handleClick() {
              history.push("/mypage");
            }
          }
        >
          <ListItemIcon>
            <ContactsIcon style={{ color: "#020122" }} />
          </ListItemIcon>
          <ListItemText primary="나의 정보" style={{ color: "#020122" }} />
        </ListItem>
        <Divider />

        {/* TODO: 로그아웃 해줘야함 */}
        <Link to='/' style={{ textDecoration: 'none', color: "#020122" }}>
          <ListItem button onClick={logout}>
            <ListItemIcon style={{ color: "#020122" }}>
              <PowerSettingsNewIcon />
            </ListItemIcon>
            <ListItemText primary="로그아웃" />
          </ListItem>
        </Link>
      </DialogContent>
    </ Dialog >
  );
}


const useStyles = makeStyles((theme) => ({
  dialog: {
    position: 'absolute',
    right: 0,
    top: 50,
    backgroundColor: '#fef0cf'
  },
  hidden: {
    display: 'none'
  }


}));

