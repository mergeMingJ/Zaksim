import React from 'react';
import { Box, Button, Container, Grid, Typography, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


const useStyles = makeStyles({
  root: {
    width: 200,
    minWidth: 275,
    borderRadius: 10
  },
  cardImage: {
    position: 'relative',
  },
  cardName: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    color: 'white',
    textShadow: '2px 2px 2px black',
    fontWeight: 'bold'
  },
  cardManager: {
    border: '1px solid red',
    borderRadius: 30,
    color: 'red',
    padding: 10,
    width: 50
  }
});


export default function Recent() {
  const classes = useStyles();
  const cards = [1, 2, 3, 4];

  return (
    <Box style={{ padding: '50px' }}>
      <Container>
        <Typography variant="h4" style={{ margin: '10px 0', fontWeight: 'bold' }}>나를 바꾸는 습관</Typography>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Card className={classes.root} variant="outlined">
                <CardContent style={{ padding: 0 }}>
                  <div className={classes.cardImage}>
                    <img width="100%" src="https://health.chosun.com/site/data/img_dir/2017/11/02/2017110202085_0.jpg" alt="메롱"></img>
                    <Typography variant="h5" className={classes.cardName}>최근추천입니다.</Typography>
                  </div>
                </CardContent>
                <CardActions style={{ padding: '0 20px' }}>
                  <Typography className={classes.cardManager}>매니저</Typography>
                  <Typography>도니</Typography>
                  <Typography>3/33명</Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}