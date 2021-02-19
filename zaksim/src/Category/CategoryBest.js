import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Carousel from 'react-elastic-carousel';
import BestCard from '../Category/BestCard';
import http from '../common/axios/index';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


export default function CategoryBest() {
  const classes = useStyles();
  const history = useHistory();

  const [bestChallenge, setBestChallenge] = useState([]);
  // const [challengeImg, setChallengeImg] = useState()




  useEffect(() => {
    http.get('/challenge/main/best').then((res) => {
      if (res.data.data === 'success') {
        // console.log(res.data.object)
        setBestChallenge(res.data.object);
      }
    });
  }, []);

  const newbestChallenge = bestChallenge
    .map((bestChallenge, index) => {
      const getChallengeId = () => {
        history.push(`/Detail/${bestChallenge.challengeId}`);
        // console.log(bestChallenge.challengeId)
        // setChallengeImg(bestChallenge.imgPath)
      };
      // console.log(bestChallenge.imgPath)
      return (
        <Grid container key={index} xs={3}>
          <Container className={classes.cardGrid}>
            <Card className={classes.card} onClick={getChallengeId}>
              {
                bestChallenge.imgPath != null ?
                  <CardMedia
                    className={classes.cardMedia}
                    image={bestChallenge.imgPath}
                    title="Challenge Image"
                  /> :
                  <CardMedia
                    className={classes.cardMedia}
                    image={"/Image/defaultChallenge.jpeg"}
                    title="Challenge Image"
                  />

              }

              {/* <CardContent style={{ padding: '5px 40px 5px 40px' }}> */}
              <CardContent>
                {/* 챌린지 이름 */}
                <Typography gutterBottom className={classes.title} style={{ fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D' }}
                >
                  {bestChallenge.title}
                </Typography>
                {/* 챌린지 기간 */}
                <Typography gutterBottom className={classes.content}>
                  {bestChallenge.userProgress}% 진행률
                    </Typography>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      );
    });


  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography
            variant="h5"
            align="left"
            color="textPrimary"
            style={{ fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D' }}
            gutterBottom
          >
            Best 진심
          </Typography>
          <div style={{ width: "100%" }}>
            <Grid container >
              {newbestChallenge}
            </Grid>
          </div>
        </Container>
      </main>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  cardMedia: {
    paddingTop: '60%', // 16:9
  },
  contentPadding: {
    paddingBottom: '10px',
  },
  title: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    fontSize: '0.8rem',
    textAlign: 'right',
    color: 'green',
  },

}));
