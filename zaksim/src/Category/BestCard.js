import React from 'react';
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
import 'react-sweet-progress/lib/style.css';

export default function BestCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Challenge Image"
            />
            <CardContent style={{ padding: '5px 20px 5px 20px' }}>
              {/* 챌린지 이름 */}
              <Typography gutterBottom className={classes.title}>
                영어 팝송 한 곡 해석
              </Typography>
              {/* 챌린지 기간 */}
              <Typography gutterBottom className={classes.content}>
                55% 인증률
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </main>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    // paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
    padding: theme.spacing(1, 1, 1, 1),
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
