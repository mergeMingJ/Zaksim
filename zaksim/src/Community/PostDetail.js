import React from 'react';
import { Button, Container, Grid, Typography, makeStyles, Box, TextField } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import { Block } from '@material-ui/icons';

const useStyles = makeStyles({
  post_title: {
    padding: '10px'
  },
  post_info: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#F9EDE6',
    padding: '10px'
  },
  post_content: {
    padding: '10px',
    border: '1px solid #F9EDE6'
  },
  comment_info: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#F9EDE6',
    padding: '10px'
  },
  comment_content: {
    padding: '10px'
  },
  comment_textarea: {
    padding: '10px 15px',
    display: 'inline-block',
    width: '100%'
  },
  comment_button: {
    backgroundColor: '#FF7761',
    color: 'white',
    height: '100%',
    width: '110px',
    display: 'block',
    float: 'right',
  }
});


function PostDetail() {
  const classes = useStyles();
  const dummy = {
    name: '도니보리',
    category: '운동',
    title: '운동 방법 공유드립니다.',
    created: '1일 전',
    content: "초보자(헬린이) 운동 루틴, 프리웨이트 추천드립니다. 저는 개인적으로 프리웨이트를 많이 선호하는 편이지만 헬린이(운동경력 1년 미만)이라면 프리웨이트는 사실 쉽지 않습니다. 매번 기구사용법만 배우다가 프리웨이트를 하게 되면 중심도 안 잡힐 뿐 아니라 무게도 더 증가하는 것 같아서 해당 부위에 집중하기가 힘이 듭니다. 그래서 1년 미만의 헬린이분들이라면 프리웨이트 보다는 기구로 운동을 많이 하는데, 일단 고립이 확실하게 되어 있는 상태이니 집중만 한다면 자극을 느끼기도 쉬울 것이고, 운동을 하기가 한결 수월 하기 때문일 것입니다.",
    comment: '좋은 정보 감사합니다.'
  }
  return (
    <div>
      <div className={classes.post_title}>
        <Typography variant="h5">
          <span>{dummy.category} </span>
          <span>{dummy.title}</span>
        </Typography>
      </div>
      <div className={classes.post_info}>
        <span>{dummy.name}</span><span>{dummy.created}</span>
      </div>
      <div className={classes.post_content}>
        <Typography>{dummy.content}</Typography>
      </div>
      <Typography style={{margin:'10px 0'}}><CommentIcon></CommentIcon>댓글</Typography>
      <div className={classes.comment_info}>
        <span>{dummy.name}</span>
        <span>{dummy.created}</span>
      </div>
      <div className={classes.comment_content}>
        <Typography>{dummy.comment}</Typography>
      </div>
      <Box style={{height: '100px'}}>
        <TextField className={classes.comment_textarea} id="outlined-basic" variant="outlined" placeholder="댓글을 입력하세요"/>
        <Button className={classes.comment_button}>댓글 달기</Button>
      </Box>
    </div>
  );
}

export default PostDetail;