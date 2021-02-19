import React, { useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BestList from '../MainPage/BestList';
import RecList from '../MainPage/RecList';
import TodayList from '../MainPage/TodayList';
import http from '../common/axios/index';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function TestFullScreen() {
  const classes = useStyles();

  const [bestchallenges, setBest] = React.useState([]);
  const [recchallenges, setRec] = React.useState([]);
  const [todaychallenges, setToday] = React.useState([]);

  const isLogin = window.localStorage.getItem('isLogin');
  const id = window.localStorage.getItem('userId');

  useEffect(() => {
    http.get('/challenge/main/best').then((res) => setBest(res.data.object));
    http.get(`/challenge/main/recommend?userId=${id}`).then((res) => setRec(res.data.object));
    http.get('/challenge/new').then((res) => setToday(res.data.object));
  }, []);

  return (
    <ReactFullpage
      sectionsColor={['rgba(0,0,0,0.5)', 'rgba(252, 158, 79, 0.9)', 'rgba(237, 211, 130, 0.9)']}
      render={({ fullpageApi }) => {
        return (
          <div id="fullpage-wrapper" className={classes.front}>
            <div className="section" zIndex="100000">
              <div className={classes.videoOverlay}></div>
              <video muted data-autoplay loop>
                <source src="/introvideo.mp4" type="video/mp4" />
              </video>
              <div className={classes.textCopy}>
                <div style={{ fontSize: '2.3rem', fontWeight: 'bold' }}>
                  My advice is, never do tomorrow what you can do today.
                  <br />
                  Procrastination is the thief of time, Collar him!!
                </div>

                <br />
                <div style={{ fontSize: '1.3rem' }}>
                  내 충고는, 절대로 오늘 할 수 있는 것을 내일 하지 마.
                  <br />
                  게으름은 시간을 훔쳐가는 도둑이야. 그를 잡아!
                </div>
              </div>
            </div>
            <div className="section">
              <div>
                <div className={classes.sectionTitle}>인기 챌린지 Top 4</div>
                {/* <h1>인기챌린지 Top4</h1> */}
                <div style={{ width: '100%' }}>
                  <Grid container alignItems="center" justify="center">
                    <BestList bestchallenges={bestchallenges}></BestList>
                  </Grid>
                </div>
                {/* <button onClick={() => fullpageApi.moveTo(1, 0)}>Move top</button> */}
              </div>
            </div>
            {isLogin === 'true' ? (
              <div className="section">
                <div>
                  <div className={classes.sectionTitle}>
                    {window.localStorage.getItem('nickname')}님을 위한 추천 챌린지
                  </div>
                  <RecList recchallenges={recchallenges}></RecList>
                </div>
              </div>
            ) : (
                <div className="section">
                  <div>
                    <div className={classes.sectionTitle}>최근 생성된 챌린지</div>
                    <TodayList todaychallenges={todaychallenges}></TodayList>
                  </div>
                </div>
              )}
            ;
          </div>
        );
      }}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  front: {
    zIndex: '10000',
  },
  videoOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.3)',
    zIndex: '2',
  },
  textCopy: {
    position: 'absolute',
    top: '50%',
    right: '10%',
    zIndex: '2',
    color: 'white',
    textAlign: 'right',
  },
  sectionTitle: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(5),
    textAlign: 'center',
    fontSize: '3rem',
    zIndex: '3',
    color: 'black',
  },
  carouselItem: {
    margin: theme.spacing(0, 10, 0, 10),
  },
}));
