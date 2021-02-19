import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Typography, makeStyles, Box, TextField, Container } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import TimeForToday from './TimeForToday';
import Header from '../Fixed/Header';
import Moment from 'react-moment';
import 'moment/locale/ko';
import CommentEdit from './CommentEdit';
import CommentView from './CommentView';
import http from '../common/axios/index';
import Padding from '../Fixed/Padding';
import NickName from './NickName'
import Loading from '../Fixed/Loading'

const useStyles = makeStyles({
  post_title: {
    padding: '10px',
    borderBottom: '1px solid red',
  },
  post_info: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#F9EDE6',
    padding: '15px',
  },
  post_content: {
    padding: '15px',
    border: '1px solid #F9EDE6',
    fontFamily: 'KOTRA_GOTHIC', color: '#3E3D3D'
  },
  comment_input: {
    padding: '10px 15px',
    wordWrap: 'break-word',
    resize: 'none',
    width: '800px',
    height: '39px',
    outline: 'none !important',
  },
  comment_button: {
    backgroundColor: '#FF7761',
    color: 'white',
    height: '56px',
    width: '80px',
    height: '60px',
    verticalAlign: 'top',
  },
  opt: {
    backgroundColor: '#FF7761',
    color: 'white',
    margin: '0 5px',
    textDecoration: 'none',
  },
  edit: {
    textDecoration: 'none',
    color: 'white',
  },
});

const PostDetail = (props) => {
  const classes = useStyles();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(window.localStorage.getItem('userId'));
  const category = ['운동', '공부', '취미', '기타'];

  const onCommentHandler = (e) => {
    setComment(e.target.value);
  };
  const id = props.match.params.id;
  useEffect(async () => {
    const response = await http.get(`/community/info?postId=${id}`);
    setPost(response.data.object);
    const res = await http.get(`/community/comment?postId=${id}`);
    setComments(res.data.object);
    setLoading(false);
  }, []);

  const commentSave = async () => {
    if (comment === '') {
      alert('내용을 입력하세요.');
    } else {
      const newComment = await http.post('/community/comment/insert', {
        commentId: 0,
        content: comment,
        postId: id,
        regtime: '',
        userId: userId,
      });
      return (window.location.replace(`/read/${id}`));
    }
  };

  const deletePost = async () => {
    await http.delete(`/community/delete?postId=${id}`);
    alert('게시물이 삭제되었습니다.');
    return (window.location.href = '/community');
  };

  if (loading)
    return (
      <div>
        <Loading/>
      </div>
    );
  return (
    <div>
      <Header></Header>
      <Padding></Padding>
      <Container maxWidth="md" style={{ marginTop: '30px' }}>
        <div className={classes.post_title}>
          <Typography variant="h5" style={{ fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D' }}>
            <span style={{ color: 'primary' }}>{category[post.categoryId]} | </span>
            <span>{post.title}</span>
          </Typography>
        </div>
        <div className={classes.post_info}>
          <span><NickName id={post.userId} /></span>
          <span>
            <Moment locale="ko" format="YYYY-MM-DD A hh:mm:ss">
              {post.regtime}
            </Moment>
          </span>
        </div>
        <div className={classes.post_content}>
          {post.content.split('\n').map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </div>
        <br />
        <Typography style={{ margin: '10px 0', fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D' }}>
          <CommentIcon style={{ verticalAlign: 'bottom' }} />
          댓글
        </Typography>

        {comments.map((cmt) => (
          <CommentView key={cmt.commentId} cmt={cmt} userId={userId} style={{ margin: '10px 0' }} />
        ))}
        <div style={{ margin: '10px 0' }}>
          <textarea
            className={classes.comment_input}
            placeholder="댓글을 입력하세요"
            onChange={onCommentHandler}
          />
          <Button className={classes.comment_button} onClick={commentSave}>
            댓글 달기
          </Button>
        </div>
        <Grid container direction="row" justify="center" style={{ margin: '10px 0' }}>
          <Grid item>
            <Button
              onClick={() => {
                props.history.goBack();
              }}
              className={classes.opt}
            >
              목록으로
            </Button>
          </Grid>
          {
            post.userId == userId
              ?
              <Grid item>
                <Button className={classes.opt}>
                  <Link to={`/update/${id}`} className={classes.edit}>
                    수정하기
                </Link>
                </Button>
                <Button className={classes.opt} onClick={deletePost}>
                  삭제하기
              </Button>
              </Grid>
              : null
          }
        </Grid>
      </Container>
    </div>
  );
};

export default PostDetail;
