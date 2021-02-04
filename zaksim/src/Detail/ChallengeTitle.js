import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import water from '../Image/water.jpg';

const useStyles = makeStyles((theme) => ({
  bg: {
    width: '100%',
    height: '100%',
    position: 'absolute', // 다른 요소들 위로 겹쳐질 수 있게 함
  },
  titleContent: {
    padding: theme.spacing(8, 0, 6),
    position: 'relative',
    backgroundImage: `url(${water})`,
    '&::after': {
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: '100%',
      height: '100%',
    },
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  buttonSize: {
    width: '130px',
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
              variant="h4"
              align="center"
              color="textPrimary"
              style={{ fontWeight: 'bold' }}
              gutterBottom
            >
              물 마시는 습관 기르기. 매일 500mL 인증!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    참여 32명
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    인증률 61%
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
