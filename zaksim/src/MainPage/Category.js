import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  categoryImage:{
    display: 'inline-block',
    width: '50%',
    borderRadius: 10,
    margin: 10,
    boxShadow: '1px 1px 1px gray'
  },
  categoryName: {
    display: 'inline-block',
    verticalAlign: 'center'
  }
})


function Category() {
  const classes = useStyles();
  const cards = [1,2,3,4];
  return (
    <Box style={{padding:'50px'}}>
      <Container>
        <Grid container>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Grid container justify="center" align="center">
                  <Grid item className={classes.categoryImage}>
                    <img width="100%" height="100%" src="https://pds.joins.com/news/component/newsis/201708/20/NISI20170816_0000031278_web.jpg" alt="메롱"></img>
                  </Grid>
                  <Grid item className={classes.categoryName}>
                    <Typography variant="h6">100일 스터디</Typography>
                    <Typography variant="h6">58명 참여 중</Typography>
                  </Grid>
                </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}


export default Category;