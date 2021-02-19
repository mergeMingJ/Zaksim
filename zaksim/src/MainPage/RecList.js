import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import moment from 'moment';
import http from "../common/axios/index";
import { useHistory } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RecList(props) {
  const classes = useStyles();
  const history = useHistory();



  const joinChallenge = (challenge) => {
    let params = {
      challengeId: challenge.challengeId,
      userId: window.localStorage.getItem('userId'),
    }
    http
      .post("/challenge/member/insert", params)
      .then((res) => {
        if (res.data.data === "success") {
          alert("작심을 시작하였습니다.");
        } else {
          alert(res.data.message);
        }
      });
  };
  const getDetail = (challenge) => {
    history.push(`/Detail/${challenge.challengeId}`);
    // console.log(challenge.challengeId)
  };

  const newRecList = props.recchallenges.map((challenge, index) => {


    return (
      // <Grid container key={challenge.challengeId}>

      <Container className={classes.cardGrid}>
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
            <Typography gutterBottom variant="h6" component="h2" align="center"
              style={{ fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D', fontSize: '15px' }}
            >
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
                <Button variant="outlined" size="small" color="primary"
                  onClick={() => {
                    getDetail(challenge);
                  }}>
                  상세보기
              </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="small" color="secondary" onClick={() => { joinChallenge(challenge) }}
                >
                  작심하기
                    </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Container >
      // // </Grid>

    );
  }

  );

  return (
    <div className={classes.carouselMargin} style={{ display: 'flex', justifyContent: 'center' }} >
      {
        newRecList.length >= 4 ?
          <Slider slidesToShow={4} slidesToScroll={4}>
            {newRecList}
          </Slider> :
          <Grid container xs={3} >
            {newRecList}

          </Grid>
      }

    </div >
  );
}


const useStyles = makeStyles((theme) => ({
  carouselMargin: {
    margin: theme.spacing(0, 5, 0, 5),

  }, cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
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
