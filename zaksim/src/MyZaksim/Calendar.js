import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, MonthView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
  },
  calendar: {
    padding: theme.spacing(1),
    textAlign: 'center',
    marginBottom: theme.spacing(1),
    height: '100%',
  },
  buttonSize: {
    width: '130px',
  },
}));

const currentDate = '2018-07-17';
const appointments = [
  {
    title: '책과 함께하는 일상, 북앤힐링',
    startDate: new Date(2018, 6, 23, 9, 30),
    endDate: new Date(2018, 6, 23, 11, 30),
  },
  {
    title: '영어 산문 매일 읽기',
    startDate: new Date(2018, 6, 24, 10, 0),
    endDate: new Date(2018, 6, 24, 11, 0),
  },
  {
    title: '하루 20분 운동 루틴',
    startDate: new Date(2018, 6, 24, 12, 0),
    endDate: new Date(2018, 6, 24, 13, 35),
  },
  {
    title: '스페인어 2문장 암기하기',
    startDate: new Date(2018, 6, 24, 14, 30),
    endDate: new Date(2018, 6, 24, 15, 45),
  },
  {
    title: '나만의 강점 발견',
    startDate: new Date(2018, 6, 25, 9, 45),
    endDate: new Date(2018, 6, 25, 11, 15),
  },
  {
    title: '매일 10분 코딩하여 웹퍼블리셔되기',
    startDate: new Date(2018, 6, 18, 12, 35),
    startDate: new Date(2018, 6, 25, 12, 0),
    endDate: new Date(2018, 6, 25, 14, 0),
  },
  {
    title: '매일매일 버킷리스트 쓰기',
    startDate: new Date(2018, 6, 25, 15, 15),
    endDate: new Date(2018, 6, 25, 16, 30),
  },
  {
    title: '100일 셀프케어',
    startDate: new Date(2018, 6, 26, 11, 0),
    endDate: new Date(2018, 6, 26, 13, 30),
  },
  {
    title: '장르 불문 매일 책 3장 읽기',
    startDate: new Date(2018, 6, 26, 14, 0),
    endDate: new Date(2018, 6, 26, 15, 30),
  },
  {
    title: '하루 7시간 공부하기',
    startDate: new Date(2018, 6, 27, 10, 0),
    endDate: new Date(2018, 6, 27, 11, 30),
  },
  {
    title: '행복일기 100일동안 부탁해',
    startDate: new Date(2018, 6, 27, 14, 30),
    endDate: new Date(2018, 6, 27, 16, 0),
  },
  {
    title: '책과 함께하는 일상, 북앤힐링',
    startDate: new Date(2018, 6, 16, 9, 30),
    endDate: new Date(2018, 6, 16, 15, 30),
  },
  {
    title: '나만의 강점 발견',
    startDate: new Date(2018, 6, 17, 15, 45),
    endDate: new Date(2018, 6, 18, 12, 15),
  },
  {
    title: '매일 10분 코딩하여 웹퍼블리셔되기',
    startDate: new Date(2018, 6, 18, 12, 35),
    endDate: new Date(2018, 6, 18, 14, 15),
  },
  {
    title: '매일매일 버킷리스트 쓰기',
    startDate: new Date(2018, 6, 19, 15, 15),
    endDate: new Date(2018, 6, 20, 20, 30),
  },
  {
    title: '100일 셀프케어',
    startDate: new Date(2018, 6, 20, 20, 0),
    endDate: new Date(2018, 6, 20, 13, 30),
  },
  {
    title: '하루 20분 운동 루틴',
    startDate: new Date(2018, 6, 20, 14, 10),
    endDate: new Date(2018, 6, 20, 15, 30),
  },
];

export default function Calendar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}>
          <Paper className={classes.calendar}>
            <Scheduler data={appointments}>
              <ViewState currentDate={currentDate} />
              <MonthView />
              <Appointments />
            </Scheduler>
          </Paper>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          item
          xs={12}
          sm={8}
          md={5}
          elevation={6}
          square
        >
          <div>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Zaksim 365 Days
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Merge님 작심 N일차 입니다.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button className={classes.buttonSize} variant="contained" color="primary">
                      나의 뱃지
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button className={classes.buttonSize} variant="outlined" color="primary">
                      나의 진심
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>{' '}
        </Grid>
      </Grid>
    </div>
  );
}
