import React, { useState } from 'react';
import { makeStyles, Dialog } from '@material-ui/core';
import Rodal from 'rodal';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import http from '../common/axios/index';

import 'rodal/lib/rodal.css';
import { ListItem } from 'material-ui';

export function change_date(published_at) {
  var moment = require('moment');

  const publish_date = moment(published_at).format('YYYY/MM/DD');
  return publish_date;
}

export default function ModalZaksim({ open, onClose, challengeId }) {
  const classes = useStyles();
  const history = useHistory();

  // console.log(window.localStorage.getItem('isLogin'));
  // console.log('userId: ' + window.localStorage.getItem('userId'));

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  let params = {
    challengeId: challengeId,
  };

  React.useEffect(() => {
    http.get('/challenge/info', { params }).then((res) => {
      if (res.data.data === 'success') {
        setTitle(res.data.object.title);
        setSummary(res.data.object.summary);
        setStartDate(change_date(res.data.object.startDate));
        setEndDate(change_date(res.data.object.endDate));
      }
    });
  }, []);

  const onZaksim = (e) => {
    e.preventDefault();
    let zaksim = {
      challengeId: params.challengeId,
      nickname: window.localStorage.getItem('nickname'),
      progress: 0,
      userId: window.localStorage.getItem('userId'),
    };

    http.post('/challenge/member/insert', zaksim).then((res) => {
      if (res.data.data == 'success') {
        // console.log(res);
        // console.log('작심 완료!');
        alert('작심에 성공하였습니다.');
      } else {
        alert('작심에 실패했습니다!');

        // console.log(res);
      }
    });
  };

  return (
    <div open={open} onClose={onClose}>
      <Rodal visible={open} onClose={onClose}>
        <div className={classes.title}>{title}</div>
        <div style={{ fontFamily: 'KOTRA_GOTHIC' }}>{summary}</div>
        <div style={{ fontFamily: 'KOTRA_GOTHIC' }}>
          {startDate} ~ {endDate}
        </div>
        <Grid container className={classes.buttonPosition} justify="center">
          <Button
            onClick={onZaksim}
            size="small"
            variant="outlined"
            color="primary"
            className={classes.buttonStyle}
          >
            확인
          </Button>
          <Button
            onClick={onClose}
            size="small"
            variant="outlined"
            color="secondary"
            className={classes.buttonStyle}
          >
            취소
          </Button>
        </Grid>
      </Rodal>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#274555',
    padding: theme.spacing(3, 0, 4),
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  buttonPosition: {
    padding: theme.spacing(4, 0, 2),

  },
  buttonStyle: {
    margin: '0px 10px 0px 10px',
  }
}));
