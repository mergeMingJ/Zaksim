import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import BestCard from '../Category/BestCard';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import http from '../common/axios/index';

export default function CategoryBest({ challengeList }) {
  const classes = useStyles();
  const history = useHistory();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const getChallengeId = (challenge) => {
    history.push(`/Detail/${challenge.challengeId}`);
  };

  // 하트 토글

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container>
            {currentPosts(challengeList).map((challenge) => (
              <Grid item xs={4}>
                <Container className={classes.cardGrid}>
                  <Card className={classes.card} onClick={() => { getChallengeId(challenge) }}>

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

                    <CardContent>
                      {/* 챌린지 이름 */}
                      <Typography gutterBottom className={classes.title} style={{ fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D' }}>
                        {challenge.title}
                      </Typography>
                      {/* 챌린지 기간 */}
                      <Typography gutterBottom className={classes.content}>
                        {challenge.userProgress}% 진행률
                      </Typography>
                    </CardContent>
                  </Card>
                </Container>
              </Grid>
            ))}
          </Grid>
          <Grid container direction="row" justify="center">
            <Pagination
              page={currentPage}
              count={parseInt(challengeList.length / postsPerPage) + 1}
              onChange={handleChange}
            ></Pagination>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    // paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
    padding: theme.spacing(0, 2, 2, 0),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
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
