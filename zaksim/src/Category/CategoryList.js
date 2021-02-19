import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function CategoryList() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* <Typography
            variant="h5"
            align="left"
            color="textPrimary"
            style={{ fontWeight: 'bold' }}
            gutterBottom
          >
            리스트 출력하기
          </Typography> */}

          <Button
            onClick={function handleClick() {
              history.push('/ChallengeCreate');
            }}
            variant="outlined"
            style={{ fontFamily: 'KOTRA_BOLD-Bold', color: '#ff521b', }}
          >
            챌린지 생성
          </Button>
        </Container>
      </main>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'flex-end'
  },
  styling: {},
}));
