import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import moment from "moment";
import http from "../common/axios/index";
import { MovieSharp } from "@material-ui/icons";
import { ListItem } from "material-ui";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
  },
  calendar: {
    padding: theme.spacing(1),
    textAlign: "center",
    marginBottom: theme.spacing(1),
    height: "100%",
  },
  buttonSize: {
    width: "130px",
  },
}));

const Appointment = ({ children, style, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: "#fc9e4f",
      borderRadius: "8px",
    }}
  >
    {children}
  </Appointments.Appointment>
);

const currentDate = moment().format("YYYY-MM-DD");
const regDate = window.localStorage.getItem("regtime");

export default function Calendar(challengeData) {
  const classes = useStyles();
  const datas = [];
  if (challengeData.challengeData != null) {
    challengeData.challengeData.forEach((element) => {
      var date = element.regtime.substring(0, 10);
      datas.push({
        title: element.title,
        startDate: date + " 09:00",
        endDate: date + " 20:00",
      });
    });
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}>
          <Paper className={classes.calendar}>
            <Scheduler data={datas}>
              <ViewState defaultCurrentDate={currentDate} height={660} />
              <MonthView />
              <Toolbar />
              <DateNavigator />
              <TodayButton />
              <Appointments appointmentComponent={Appointment} />
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
                style={{
                  fontFamily: 'KOTRA_BOLD-Bold'
                }}
              >
                작심 365 Days
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
                style={{
                  fontFamily: 'KOTRA_BOLD-Bold'
                }}
              >
                {window.localStorage.getItem("nickname")}님 작심{" "}
                {moment(currentDate).diff(moment(regDate), "days") + 2}
                일차 입니다.
              </Typography>
              <br />
              {/* <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button
                      className={classes.buttonSize}
                      variant="contained"
                      color="primary"
                    >
                      나의 뱃지
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      className={classes.buttonSize}
                      variant="outlined"
                      color="primary"
                    >
                      나의 진심
                    </Button>
                  </Grid>
                </Grid>
              </div> */}
            </Container>
          </div>{" "}
        </Grid>
      </Grid>
    </div>
  );
}
