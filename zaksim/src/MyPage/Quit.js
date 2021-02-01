import React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';


function Quit(props) {
  const classes = useStyles();

  const history = useHistory();


  return (
    <Grid container component="main" className={classes.root}>
      <Title />
      <CssBaseline />
      <Grid item xs={12} md={12} lg={12} component={Paper} elevation={6} >
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <h1>머지텍님 저희 작심과 함께한지 N일이 입니다.</h1>
            <p style={{fontSize: 20}}>정말 떠나시겠습니까?</p>

            {/* 새 비밀번호 */}
            <div className={classes.marginP}>
              <Grid item >
                <Grid container >
                  <Grid container item xs={false} md={4} lg={3} alignItems="center" className={classes.laeblCenter}>
                  <label style={{fontSize: 20}}>비밀번호</label>
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
                  <label style={{fontSize: 20}}>비밀확인</label>
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

            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <FormControlLabel 
                control={<Checkbox value="remember" color="primary" />}
                label="정말 떠나시겠습니까?"
                onClick={function byeClick(e)  {
                  e.preventDefault();
                  alert('정말로 떠나시겠습니까?')
                }}
              />
            </div>

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
                      onClick={function handleClick()  {
                        history.push("/");
                      }}
                    >
                      회원 탈퇴
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

export default Quit