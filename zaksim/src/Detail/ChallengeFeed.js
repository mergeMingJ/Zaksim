import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { width } from '@material-ui/system';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import water from '../Image/water.jpg';
import ModalFeedDetail from '../Detail/ModalFeedDetail';
import ReactRoundedImage from "react-rounded-image";
import http from '../common/axios/index';

export default function ChallengeFeed({ challengeId }) {
  const classes = useStyles();
  const history = useHistory();

  const [feedInfo, setFeedInfo] = useState('')

  // 인증피드 모달 열었다. 닫았다.
  const [modalFeedDetailOpen, setModalFeedDetailOpen] = React.useState(false);
  const handleClickModalFeedDetailOpen = (feed) => {
    setModalFeedDetailOpen(true);
    setFeedInfo(feed)
  };
  const handleClickModalFeedDetailClose = () => {
    setModalFeedDetailOpen(false);
  };

  const [feedList, setFeedList] = useState([]);
  let params = {
    challengeId: challengeId,
    // challengeId: 1,
  };

  useEffect(() => {
    http.get('/feed', { params }).then((res) => {
      if (res.data.data === 'success') {
        setFeedList(res.data.object)
      }
    });
  }, []);


  return (
    <Container maxWidth="md" align="center">
      <Grid container spacing={2}>
        <ModalFeedDetail open={modalFeedDetailOpen} onClose={handleClickModalFeedDetailClose} feedInfo={feedInfo} />
        {
          feedList.length !== 0 ?

            feedList.sort((a, b) => b.regtime - a.regtime).map((feed) => (
              <Grid item xs={4}>
                <Card
                  style={{ backgroundImage: `url(${feed.imgPath})`, }}
                  // backgroundImage={feed.imgPath}
                  className={classes.card}
                  modalopen={modalFeedDetailOpen}
                  onClick={() => {
                    handleClickModalFeedDetailOpen(feed);
                  }}
                >
                  <div className={classes.paper} title={feed.title} />
                </Card>
              </Grid>

            ))

            :
            <div style={{ fontSize: '20px' }}>
              인증글이 없습니다.
          </div>
        }

      </Grid >
    </Container >
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: 'center',
    paddingBottom: '100%', // 정방형 만드는 방법
  },
  card: {
    borderRadius: '0.5em',
    overflow: 'hidden',
    transition: 'all ease 0.2s',
    position: 'relative',
    // backgroundImage: `url(${water})`,
    backgroundSize: 'cover',

    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow:
        '0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)',
    },
  },
}));
