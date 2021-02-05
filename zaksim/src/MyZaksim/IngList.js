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
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
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

export default function IngList() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        {/* <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Zaksim 365 Days
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Welcome to Zaksim. Zaksim with us!!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    What is Jaksim
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Way to Jaksim
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div> */}
        {/* End hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography
            variant="h5"
            align="left"
            color="textPrimary"
            style={{ fontWeight: 'bold' }}
            gutterBottom
          >
            {' '}
            Merge 님의 진심
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
                      하루에 물 1리터 마시기
                    </Typography>
                    {/* 챌린지 기간 */}
                    <Typography gutterBottom align="center">
                      21/01/26 ~ 21/02/25 (N일)
                    </Typography>
                    {/* 챌린지 전체 기간 */}
                    <Progress percent={77} />
                    {/* 챌린지 인증률 */}
                    <Progress percent={56} />
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
                          인증하기
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
