import React from 'react';
import { makeStyles, Dialog } from '@material-ui/core';
import Rodal from 'rodal';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SmallProfile from '../Fixed/SmallProfile';
import water from '../Image/water.jpg';
import HeartToggle from '../Detail/HeartToggle';
import { Typography } from '@material-ui/core';

import 'rodal/lib/rodal.css';


export function change_date(published_at) {
  var moment = require('moment');

  const publish_date = moment(published_at).format('YYYY / MM / DD');
  return publish_date;
}

export default function ModalFeedDetail({ open, onClose, feedInfo }) {
  const classes = useStyles();
  const history = useHistory();

  // 하트 토글
  const [selected, setSelected] = React.useState(false);

  const toggleState = () => {
    setSelected(!selected);
    console.log(selected);
  };

  return (
    <div open={open} onClose={onClose}>
      <Rodal height="500" visible={open} onClose={onClose} >
        <Grid container className={classes.buttonPosition} justify="center">
          <Grid item xs={12} className={classes.left}>
            <SmallProfile userId={feedInfo.userId} />
          </Grid>
          {/* <Grid item xs={4} className={classes.right}>
            <HeartToggle selected={selected} onClick={toggleState} />
          </Grid> */}
          <div className={classes.card}>
            <div className={classes.reviewImage} title="Review Image"
              style={{ backgroundImage: `url(${feedInfo.imgPath})`, }}
            >
              <Typography className={classes.darken}>{change_date(feedInfo.regtime)}</Typography>
            </div>
            <br />
            <div style={{ marginBottom: '10px' }}>
              {feedInfo.content}
            </div>
          </div>
          {/* <div>댓글 구현하기</div> */}
          {/* <Button
            onClick={onClose}
            fullWidth
            size="small"
            variant="contained"
            color="primary"
            className={classes.buttonStyle}
          >
            닫기
          </Button> */}
        </Grid>
      </Rodal>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#274555',
    padding: theme.spacing(3, 0, 0),
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  buttonPosition: {
    padding: theme.spacing(4, 0, 2),
  },
  buttonStyle: {
    margin: '0px 10px 0px 10px',
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  inputmargin: {
    marginBottom: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  reviewImage: {
    textAlign: 'center',
    paddingBottom: '100%', // 정방형 만드는 방법
    backgroundImage: `url(${water})`,
    backgroundSize: 'cover',
    width: '300px',
    height: '300px',
    position: 'relative',
  },
  darken: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: '3px 0px 0px',
    position: 'absolute',
    width: '100%',
    height: '2rem',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    color: 'white',
    fontSize: '1.1rem',
  },
  left: {
    padding: theme.spacing(0, 0, 1, 5),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  right: {
    float: 'right',
  },
}));
