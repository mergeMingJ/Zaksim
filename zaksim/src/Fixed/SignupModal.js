import React from 'react';
import { makeStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CancelIcon from '@material-ui/icons/Cancel';
import SignUp from '../User/SignUp';
import Login from '../User/Login';

export default function FormDialog({ open, onClose }) {
  const classes = useStyles();
  const [login, setLogin] = React.useState('login')

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" >
      <DialogActions className={classes.root}>
        <Button onClick={onClose} color="primary">
          <CancelIcon />
        </Button>
      </DialogActions>
      <DialogContent className={classes.root}>
        {
          login === 'login' ? <Login onClickSignUp={() => { setLogin('signup') }} onClose={onClose} /> : <SignUp onClickLogin={() => { setLogin('login') }} />
        }
      </DialogContent>
    </Dialog>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fcf2f5'
  },
  Bottom: {
    paddingBottom: theme.spacing(10)
  },


}));