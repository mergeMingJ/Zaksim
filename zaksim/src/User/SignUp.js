import React, { useState } from 'react';
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
    <Typography variant="body2" color="textSecondary" align="center" >
      Copyright © MergeTech {new Date().getFullYear()} All Rights Reserved.
    </Typography>
  );
}


export default function SignIn({ onClickLogin }) {

  const classes = useStyles();
  const history = useHistory();



  // 회원가입 관련
  const [email, setEmail] = useState('');
  const [nickname, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    /**검증 로직 만들기
     * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
     * 2. 약관 동의를 확인한다.
     */
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }

    let user = {
      nickname: nickname,
      email: email,
      password: password,
    }


    if (password.length > 0 && password === passwordCheck) {
      http.post('/user/signup', user)
        .then(res => {
          if (res.data.data == "success") {
            onClickLogin();
            history.push('/');
          } else {
            alert("회원가입에 실패했습니다.");
          }
          // console.log(res)
        })
    }


  };

  // Coustom Hook 이전
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeNick = (e) => {
    setNick(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordChk = (e) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };
  const onChangeTerm = (e) => {
    //체크박스 초기화
    setTermError(false);
    setTerm(e.target.checked);
  }



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{
          fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D'
        }}>
          회원가입
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit} >
          <TextField
            required
            value={nickname}
            onChange={onChangeNick}
            className={classes.inputmargin}
            fullWidth
            id="nickname"
            label="닉네임"
            name="nickname"
            autoComplete="nickname"
            autoFocus
          />
          <TextField
            className={classes.inputmargin}
            required
            value={email}
            onChange={onChangeEmail}
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            className={classes.inputmargin}
            required
            value={password}
            onChange={onChangePassword}
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            className={classes.inputmargin}
            required
            fullWidth
            value={passwordCheck}
            onChange={onChangePasswordChk}
            name="passwordCheck"
            label="비밀번호 확인"
            type="password"
            id="passwordCheck"
            autoComplete="current-password"
          />
          {passwordError && <div style={{ color: '#ff7761', display: 'flex', justifyContent: 'flex-end' }}>비밀번호가 일치하지 않습니다.</div>}

          <FormControlLabel
            control={<Checkbox value={term} onChange={onChangeTerm} color="primary" />}
            label={<Typography className={classes.size}>작심 이용 약관 및 개인정보 취급방침에 대한 내용을 모두 확인하였으며, 이에 동의합니다.</Typography>}
          />
          {termError && <div style={{ color: '#ff7761', display: 'flex', justifyContent: 'flex-end' }}>약관에 동의하셔야 합니다.</div>}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            회원가입
          </Button>

          <Grid container className={classes.endPosition}>
            <Grid item >
              <Link onClick={onClickLogin} style={{
                fontFamily: 'KOTRA_BOLD-Bold'
              }}>
                {"이미 회원이신가요?"}
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
  paper: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(0, 1, 1, 1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  inputmargin: {
    marginBottom: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 4),
    fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D'

  },
  size: {
    fontSize: 10,
    [theme.breakpoints.up("sm")]: {
      fontSize: 10
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 11
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 13
    }
  },
  endPosition: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  centerPosition: {
    display: 'flex',
    justifyContent: 'center'
  },

}));