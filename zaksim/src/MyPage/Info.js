import React from 'react';
import axios from '../common/axios'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title'


function Info(props) {
  const classes = useStyles();
  axios.get("/")
    .then(function (res) {
      console.log(res)
    })
    .catch(function(err){
      console.log(err)
    })
  return (
    <Grid container component="main" className={classes.root}>
      <Title />
      <CssBaseline />
      <Grid item xs={12} md={12} lg={12} component={Paper} elevation={6} >
        <div className={classes.paper}>
          <form className={classes.form} noValidate>

            {/* 닉네임 */}
            <div>
              <Grid item >
                <Grid container >
                  <Grid container item xs={false} md={4} lg={3} alignItems="center" className={classes.laeblCenter}>
                    <label style={{fontSize: 20}}>닉네임</label>
                  </Grid>
                  <Grid container item xs={12} md={8} lg={9}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="nickname"
                  label="김싸피"
                  name="nickname"
                  autoComplete="nickname"
                  autoFocus
                />
                </Grid>
                </Grid>
              </Grid>
            </div>

            {/* 이메일 */}
            <div>
              <Grid item >
                <Grid container >
                  <Grid container item xs={false} md={4} lg={3} alignItems="center" className={classes.laeblCenter}>
                  <label style={{fontSize: 20}}>이메일</label>
                  </Grid>
                  <Grid container item xs={12} md={8} lg={9}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  value="ssafy123@naver.com"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                </Grid>
                </Grid>
              </Grid>
            </div>
            <hr />
            {/* 한줄 소개 */}
            <div>
              <Grid item >
                <Grid container >
                  <Grid container item xs={false} md={4} lg={3} alignItems="center" className={classes.laeblCenter}>
                  <label style={{fontSize: 20}}>한줄소개</label>
                  </Grid>
                  <Grid container item xs={12} md={8} lg={9}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="info"
                  label="안녕 난 김싸피야"
                  name="info"
                  autoComplete="info"
                  autoFocus
                />
                </Grid>
                </Grid>
              </Grid>
            </div>

            <hr />
            {/* 새 비밀번호 */}
            <div>
              <Grid item >
                <Grid container >
                  <Grid container item xs={false} md={4} lg={3} alignItems="center" className={classes.laeblCenter}>
                  <label style={{fontSize: 20}}>새 비밀번호</label>
                  </Grid>
                  <Grid container item xs={12} md={8} lg={9}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="새 비밀번호"
                  name="password"
                  autoComplete="password"
                  autoFocus
                />
                </Grid>
                </Grid>
              </Grid>
            </div>
            {/* 비밀번호 확인 */}
            <div>
              <Grid item >
                <Grid container >
                  <Grid container item xs={false} md={4} lg={3} alignItems="center" className={classes.laeblCenter}>
                  <label style={{fontSize: 20}}>비밀번호 확인</label>
                  </Grid>
                  <Grid container item xs={12} md={8} lg={9}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="passwordConfirm"
                  label="비밀번호 확인"
                  name="passwordConfirm"
                  autoComplete="passwordConfirm"
                  autoFocus
                />
                </Grid>
                </Grid>
              </Grid>
            </div>

            <hr />
            {/* Button */}
            <div>
              <Grid item >
                <Grid container justify="flex-end">
                  <Grid container item xs={5} md={7} lg={6} justify="center"/>
                  <Grid container item xs={2} md={2} lg={2} className={classes.buttonMargin}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      취소
                    </Button>
                  </Grid>

                  <Grid container item xs={3} md={3} lg={3} >
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      변경사항없음
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    margin: theme.spacing(5,0,0,0)
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  rowStyle: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '2%',
    fontSize: '14px',
  },
  laeblCenter: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
  },
  buttonMargin:{
    margin: theme.spacing(0,3,0,0)
  },
  buttonPosition:{
    display: 'flex',
    justifyContent: 'flex-end'
    
  }

}));

export default Info