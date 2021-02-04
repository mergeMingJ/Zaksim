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
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
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

const cards = [1, 2, 3];

export default function DoneList() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
            Merge 님의 완심
          </Typography>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    {/* 챌린지 이름 */}
                    <Typography gutterBottom variant="h6" component="h2" align="center">
                      명상으로 마음의 숲 가꾸기
                    </Typography>
                    {/* 챌린지 기간 */}
                    <Typography gutterBottom align="center">
                      20/11/03 ~ 20/12/31 (N일)
                    </Typography>
                    {/* 챌린지 인증률 */}
                    <Progress percent={97} />
                  </CardContent>
                  <CardActions>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Button
                          variant="outlined"
                          size="small"
                          color="primary"
                          className={classes.margin}
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
                        >
                          랭킹보기
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
