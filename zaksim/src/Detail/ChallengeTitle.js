import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import water from '../Image/water.jpg';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { IconButton } from 'material-ui';

const useStyles = makeStyles((theme) => ({
  darken: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
    backgroundImage: `url(${water})`,
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

export default function ChallengeTitle() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.titleContent}>
          <Container maxWidth="md">
            <Typography
              className={classes.darken}
              variant="h4"
              align="center"
              style={{ fontWeight: 'bold', color: 'white' }}
            >
              물 마시는 습관 기르기. 매일 500mL 인증!
            </Typography>
            <Grid container spacing={0} justify="center">
              <Typography className={classes.statusBox}>
                참여 32명&nbsp;&nbsp;|&nbsp;&nbsp;인증률 61%
              </Typography>
            </Grid>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
