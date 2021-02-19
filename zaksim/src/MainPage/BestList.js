import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import http from "../common/axios/index";


export default function BestList(props) {
  const classes = useStyles();
  const history = useHistory();

  const getDetail = (challenge) => {
    history.push(`/Detail/${challenge.challengeId}`);
  };

  const joinChallenge = (challenge) => {
    let params = {
      challengeId: challenge.challengeId,
      userId: window.localStorage.getItem('userId'),
    }
    if (params.userId === null) {
      alert('로그인 해주세요!')
    }
    else {
      http
        .post("/challenge/member/insert", params)
        .then((res) => {
          if (res.data.data === "success") {
            alert("작심을 시작하였습니다.");
          } else {
            alert(res.data.message);
          }
        });
    }
  }

  return (
    <main>
      <Grid container spacing={4}>
        {props.bestchallenges.map((challenge) => (
          <Grid item key={challenge.challengeId}>
            <Card className={classes.card}>
              {
                challenge.imgPath != null ?
                  <CardMedia
                    className={classes.cardMedia}
                    image={challenge.imgPath}
                    title="Challenge Image"
                  /> :
                  <CardMedia
                    className={classes.cardMedia}
                    image={"/Image/defaultChallenge.jpeg"}
                    title="Challenge Image"
                  />

              }
              <CardContent className={classes.cardContent}>
                {/* 챌린지 이름 */}
                <Typography gutterBottom variant="h6" component="h2" align="center" style={{ fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D', fontSize: '15px' }}>
                  {challenge.title}
                </Typography>
                {/* 챌린지 기간 */}
                <Typography gutterBottom align="center">
                  {moment(challenge.startDate).format('YY/MM/DD')} ~{' '}
                  {moment(challenge.endDate).format('YY/MM/DD')} (
                  {moment(challenge.endDate).diff(moment(challenge.startDate), 'days')}
                  일)
                </Typography>
                {/* 챌린지 전체 기간 */}
                <Progress percent={challenge.totalProgress} />
                {/* 챌린지 인증률 */}
                {/* <Progress percent={challenge.userProgress} /> */}
              </CardContent>
              <CardActions>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      className={classes.margin}
                      onClick={() => {
                        getDetail(challenge);
                      }}
                    >
                      상세보기
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      size="small"
                      color="secondary"
                      className={classes.margin}
                      onClick={() => { joinChallenge(challenge) }}
                    >
                      작심하기
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}



const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));
