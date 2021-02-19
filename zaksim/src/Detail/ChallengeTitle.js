import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import water from '../Image/water.jpg';
import http from '../common/axios/index';

export default function ChallengeTitle({ challengeId }) {
  const classes = useStyles();

  const [title, setTitle] = React.useState('');
  const [nowUser, setNowUser] = React.useState('');
  const [userProgress, setUserProgress] = React.useState('');
  const [imgPath, setImgPath] = React.useState('');


  let params = {
    challengeId: Number(challengeId)
  };

  useEffect(() => {
    http.get('/challenge/info', { params }).then((res) => {
      if (res.data.data === 'success') {
        setTitle(res.data.object.title);
        setNowUser(res.data.object.nowUser);
        setUserProgress(res.data.object.userProgress);
        setImgPath(res.data.object.imgPath)
      }
    });
  }, [])



  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {
          imgPath != null ?
            <div className={classes.titleContent}
              style={{ backgroundImage: `url(${imgPath})`, }}>

              <Container maxWidth="md">
                <Typography
                  className={classes.darken}
                  variant="h4"
                  align="center"
                  style={{ fontFamily: 'KOTRA_BOLD-Bold', color: 'white' }}
                >
                  {title}
                </Typography>
                <Grid container spacing={0} justify="center">
                  <Typography className={classes.statusBox} style={{ fontFamily: 'KOTRA_GOTHIC' }}>
                    참여 {nowUser}명&nbsp;&nbsp;|&nbsp;&nbsp;진행률 {userProgress}%
              </Typography>
                </Grid>
              </Container>
            </div> :
            <div className={classes.titleContent}
              style={{ backgroundColor: '#fc9e4f' }}>
              <Container maxWidth="md">
                <Typography
                  className={classes.darken}
                  variant="h4"
                  align="center"
                  style={{ fontFamily: 'KOTRA_BOLD-Bold', color: 'white' }}
                >
                  {title}
                </Typography>
                <Grid container spacing={0} justify="center">
                  <Typography className={classes.statusBox} style={{ fontFamily: 'KOTRA_GOTHIC' }}>
                    참여 {nowUser}명&nbsp;&nbsp;|&nbsp;&nbsp;진행률 {userProgress}%
              </Typography>
                </Grid>
              </Container>
            </div>
        }
      </main>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  darken: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: '54px 0px 80px',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  titleContent: {
    padding: theme.spacing(8, 0, 5),
    // backgroundImage: `url(${water})`,
    position: 'relative',
  },
  statusBox: {
    padding: '7px 30px 7px 30px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    marginTop: theme.spacing(7),
    borderRadius: '2em',
    backgroundColor: 'black',
    opacity: '0.7',
  },
}));
