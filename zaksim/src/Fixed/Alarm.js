import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatIcon from '@material-ui/icons/Chat';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import LinesEllipsis from 'react-lines-ellipsis';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';
import http from '../common/axios/index';
import Loading from '../Fixed/Loading';

export default function Alarm({ onClose }) {
  const classes = useStyles();
  const theme = useTheme();

  const [messageData, setMessageData] = useState([]);
  const [loading, setLoading] = useState(true);

  let params = {
    userId: window.localStorage.getItem('userId'),
  };

  //TODO: DB에서 지우는거 구현
  // const clearMessage = () => {
  //   setMessageData([]);
  //   window.localStorage.setItem('alarm', 0);
  // };

  useEffect(() => {
    let userId = window.localStorage.getItem('userId');
    http
      .get('/user/notice', { params })
      .then((res) => {
        if (res.data.data == 'success') {
          setMessageData(res.data.object.sort((a, b) => b.noticeId - a.noticeId));
          window.localStorage.setItem('alarm', messageData.length);
        }
      })
      .then(setLoading(false));
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  else
    return (
      <div>
        {messageData.map((message) => (
          <form className={classes.root}>
            <Card className={classes.radius}>
              <li key={message.noticeId} className={classes.listyle}>
                <Box className={classes.position}>
                  {message.fromUserId === 2 ? (
                    <ThumbUpIcon className={classes.IconSize} />
                  ) : (
                      <GroupAddIcon className={classes.IconSize} />
                    )}
                  {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {message.fromUserId}
                  </Typography> */}

                  {/* <Grid container justify="flex-end">
                    <CloseIcon className={classes.end} />
                  </Grid> */}
                </Box>

                <CardContent>
                  <Typography
                    className={classes.alarmFont}
                    maxLine="2"
                    ellipsis="..."
                    basedOn="letters"
                  >
                    {message.content}
                  </Typography>
                </CardContent>
              </li>
            </Card>
          </form>
        ))}

        {/* TODO: Clear 누르면 메세지 다 사라지기 */}
        {messageData.length !== 0 ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={onClose}>닫기</Button>
          </div>
        ) : (
            <div>
              <Typography style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                {' '}
              메시지가 없습니다.
            </Typography>
            </div>
          )}
      </div>
    );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%', // Fix IE 11 issue.
    margin: theme.spacing(2, 0),
  },
  radius: {
    display: 'flex',
    justifyContent: 'center',
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    margin: theme.spacing(0, 3),
  },
  listyle: {
    width: '100%',
    marginRight: theme.spacing(1),
  },
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 14,
    marginLeft: theme.spacing(1),
  },
  position: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: theme.spacing(1, 0, 0, 1),
  },
  alarmFont: {
    fontSize: '0.9rem',
    textAlign: 'left',
    // align: 'left'
  },
  end: {
    // display: 'flex',
    // justifyContent: 'flex-end',
    width: 12,
    height: 12,
  },
  IconSize: {
    width: 20,
    height: 20,
  },
  long: {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));
