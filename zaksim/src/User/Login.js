import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import http from '../common/axios/index';
import { useHistory } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright © MergeTech {new Date().getFullYear()} All Rights Reserved.
    </Typography>
  );
}

export default function Login({ onClickSignUp, onClose }) {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let params = {
      email: email,
      password: password,
    };

    http.get('/user/login', { params }).then((res) => {
      if (res.data.data === 'success') {
        // alert('로그인에 성공했습니다.');
        onClose();
        // 로그인한 회원의 정보를 저장
        var user = res.data.object;
        window.localStorage.setItem('isLogin', true);
        window.localStorage.setItem('userId', user.userId);
        window.localStorage.setItem('email', user.email);
        window.localStorage.setItem('nickname', user.nickname);
        window.localStorage.setItem('desc', user.desc);
        window.localStorage.setItem('profileimgPath', user.profileimgPath);
        window.localStorage.setItem('grade', user.grade);
        window.localStorage.setItem('point', user.point);
        window.localStorage.setItem('regtime', user.regtime);
        // console.log(window.localStorage.getItem('isLogin'));
        window.location.replace('/')
      } else {
        alert('로그인에 실패했습니다.');
        // console.log(res)
      }
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{
          fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D'
        }} >
          로그인
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            className={classes.inputmargin}
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
            onChange={handleEmailChange}
            autoFocus
          />
          <TextField
            className={classes.inputmargin}
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            onChange={handlePasswordChange}
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            로그인
          </Button>


          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={{
                fontFamily: 'KOTRA_BOLD-Bold'
              }}>
                비밀번호 찾기
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={onClickSignUp} style={{
                fontFamily: 'KOTRA_BOLD-Bold'
              }}>
                {"아직 회원이 아니신가요?"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8} mb={2}>
        <Copyright />
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  body: {
    width: '100%',
    height: '100%',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  inputmargin: {
    marginBottom: theme.spacing(1),

  },
  submit: {
    margin: theme.spacing(3, 0, 4),
    fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D'

  },
  endPosition: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  centerPosition: {
    display: 'flex',
    justifyContent: 'center',
  },
  size: {
    fontSize: 10,
    [theme.breakpoints.up('sm')]: {
      fontSize: 10,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 11,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 13,
    },
  },
}));
