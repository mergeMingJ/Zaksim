import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Carousel from 'react-elastic-carousel';
import {
  Award,
  Alarm,
  BallBasketball,
  BrandCss3,
  BrandGithub,
  GlassOff,
  Heart,
  Music,
  Puzzle,
} from 'tabler-icons-react';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  styling: {},
}));

export default function Badge() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography
            variant="h5"
            align="left"
            color="textPrimary"
            style={{ fontWeight: 'bold' }}
            gutterBottom
          >
            Merge 님의 뱃지
          </Typography>
          <Carousel className="styling" itemsToShow={8}>
            <Award size={60} strokeWidth={1.5} color={'#a240bf'} />
            <Alarm size={60} strokeWidth={1.5} color={'#a240bf'} />
            <BallBasketball size={60} strokeWidth={1.5} color={'#a240bf'} />
            <BrandCss3 size={60} strokeWidth={1.5} color={'#a240bf'} />
            <BrandGithub size={60} strokeWidth={1.5} color={'#a240bf'} />
            <GlassOff size={60} strokeWidth={1.5} color={'#a240bf'} />
            <Heart size={60} strokeWidth={1.5} color={'#a240bf'} />
            <Music size={60} strokeWidth={1.5} color={'#a240bf'} />
            <Puzzle size={60} strokeWidth={1.5} color={'#a240bf'} />
          </Carousel>
        </Container>
      </main>
    </React.Fragment>
  );
}
