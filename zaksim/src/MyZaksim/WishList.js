import React from "react";
import { useHistory } from 'react-router-dom';

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "react-sweet-progress/lib/style.css";
import moment from "moment";
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import http from "../common/axios/index";





export default function WishList(props) {
  const classes = useStyles();
  const history = useHistory();

  const [showState, setShowState] = React.useState(false);
  const changeShow = () => {
    setShowState(!showState)
  }

  const colorTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#ff521b",
      },
    },
    typography: {
      fontFamily: 'KOTRA_GOTHIC',
      color: '#3E3D3D',
    }
  });
  const [myTheme, setMyTheme] = React.useState(colorTheme);


  const getDetail = (challenge) => {
    history.push(`/Detail/${challenge.challengeId}`);
    // console.log(challenge.challengeId)
  };

  const joinChallenge = (challenge) => {
    let params = {
      challengeId: challenge.challengeId,
      userId: window.localStorage.getItem('userId'),
    }
    http
      .post("/challenge/member/insert", params)
      .then((res) => {
        if (res.data.data === "success") {
          alert("작심을 시작하였습니다.");
          http.delete("/user/heart", { params }).then((res) => {
            if (res.data.data === "success") {
              window.location.replace("/MyZaksim");
            }
          })

        } else {
          alert(res.data.message);
        }
      });

  }

  return (
    <ThemeProvider theme={myTheme}>
      <React.Fragment>
        <CssBaseline />
        <main>
          <Container className={classes.cardGrid} maxWidth="md">
            <Typography
              variant="h5"
              align="left"
              color="textPrimary"
              gutterBottom
              style={{ fontFamily: 'KOTRA_BOLD-Bold' }}
            >
              {" "}
              {window.localStorage.getItem("nickname")} 님의 찜
              <IconButton onClick={() => { changeShow() }} color="inherit">
                <ArrowDownwardIcon style={{ fontSize: 'large' }} onClick={() => { changeShow() }} />
              </IconButton>
            </Typography>
            {
              showState === true ?
                <Grid container spacing={4}>
                  {props.wishchallenges.map((challenge) => (
                    <Grid item key={challenge.challengeId} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        {
                          challenge.imgPath != null ?
                            <CardMedia
                              className={classes.cardMedia}
                              image={challenge.imgPath}
                              title="Image title"
                            /> :
                            <CardMedia
                              className={classes.cardMedia}
                              image={"/Image/defaultChallenge.jpeg"}
                              title="Image title"
                            />
                        }
                        <CardContent className={classes.cardContent}>
                          {/* 챌린지 이름 */}
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="h2"
                            align="center"
                            style={{ fontFamily: 'KOTRA_BOLD-Bold' }}
                          >
                            {challenge.title}
                          </Typography>
                          {/* 챌린지 기간 */}
                          <Typography gutterBottom align="center">
                            {moment(challenge.startDate).format("YY/MM/DD")} ~{" "}
                            {moment(challenge.endDate).format("YY/MM/DD")} (
                      {moment(challenge.endDate).diff(
                              moment(challenge.startDate),
                              "days"
                            )}
                      일)
                    </Typography>
                        </CardContent>
                        <CardActions>
                          <Grid container spacing={2} justify="center">
                            <Grid item>
                              <Button
                                variant="outlined"
                                size="small"
                                color="primary"
                                className={classes.margin}
                                onClick={() => { getDetail(challenge) }}
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
                                onClick={() => { joinChallenge(challenge) }}

                              >
                                작심하기
                        </Button>
                            </Grid>
                          </Grid>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                :
                <div></div>
            }
          </Container>
        </main>
      </React.Fragment>
    </ThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));