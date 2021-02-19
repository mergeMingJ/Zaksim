import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import book from '../Image/book.jpg';

export default function CategoryTitle() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.titleContent}>
          <Container maxWidth="md">
            <Typography
              className={classes.darken}
              variant="h4"
              align="center"
              style={{ fontWeight: 'bold', color: 'white' }}
            >
              독 서
            </Typography>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  titleContent: {
    padding: theme.spacing(10, 0, 10),
    backgroundImage: `url(${book})`,
    position: 'relative',
  },
  darken: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: '60px',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
}));
