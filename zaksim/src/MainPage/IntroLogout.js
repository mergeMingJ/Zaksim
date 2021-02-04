import { Button, Container, Grid, Typography, withStyles, makeStyles } from '@material-ui/core';

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FF7761 30%, #fdc23e 90%)',
    borderRadius: 30,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '20px 0',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
})(Button);

const useStyles = makeStyles({
  introVideo: {
    width: '100%',
    borderRadius: 10,
  }
})

function IntroLogout() {
  const intro = useStyles();
  return (
    <div className="IntroLogout" style={{backgroundColor: '#edeceb'}}>
      <Container>
        <Grid container alignItems="center">
          <Grid container xs={4} direction="column" style={{ padding: 40 }}>
            <Typography variant="h3">지금이<br></br>작심할 때</Typography>
            <Typography variant="h4">작심은 여러분의 도전을 응원합니다.</Typography>
            <StyledButton>지금 작심하기</StyledButton>
          </Grid>
          <Grid xs={8}>
            <img className={intro.introVideo} src="https://www.exercise.co.uk/wp/wp-content/uploads/2019/04/Compound-Exercise-Workout.jpg"></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default IntroLogout;