import React, {useState, useEffect} from 'react';
import { Button, Container, Grid, Link, Typography, makeStyles, Box, TextField } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import { Block } from '@material-ui/icons';
import axios from 'axios'

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
    padding: '10px 15px',
    width: '600px',
    height: '100px',
  },
  comment_button: {
    backgroundColor: '#FF7761',
    color: 'white',
    height: '56px',
    width: '100px',
  },
  opt: {
    backgroundColor: '#FF7761',
    color: 'white',
    margin: '0 5px',
  }
});


const PostDetail = (props) => {
  const classes = useStyles();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const onCommentHandler = (e) => {
    setComment(e.target.value);
    console.log(comment);
  };
  const id = props.match.params.id
  useEffect( async() => {
    setLoading(true);
    const response = await axios.get(`https://i4b108.p.ssafy.io/community/info/${id}`);
    setPost(response.data.object);
    setLoading(false);
    const res = await axios.get(`https://i4b108.p.ssafy.io/community/comment/${id}`);
    setComments(res.data.object)

  }, []);

  const commentSave = async () => {
    const cmt = await axios.post('https://i4b108.p.ssafy.io/community/comment', {
      "commentId": 0,
      "content": comment,
      "postId": id,
      "regtime": "2021-02-04T19:27:31.694Z",
      "userId": 0
    });
  }

  const deletePost = async () =>{
    await axios.delete(`https://i4b108.p.ssafy.io/community/${id}`)
    alert('게시물이 삭제되었습니다.')
    return window.location.href = '/community'
  };

  return (
    <div>
      <div className={classes.post_title}>
        <Typography variant="h5">
          <span>{post.category} </span>
          <span>{post.title}</span>
        </Typography>
      </div>
      <div className={classes.post_info}>
        <span>{post.userId}</span><span>{post.regtime}</span>
      </div>
      <div className={classes.post_content}>
        <Typography>{post.content}</Typography>
      </div>
      <Typography style={{margin:'10px 0'}}><CommentIcon></CommentIcon>댓글</Typography>
     
      { comments.map(comment => (
        <div key={comment.commentId}>
          <div className={classes.comment_info}>
            <span>{comment.userId}</span>
            <span>{comment.regtime}</span>
          </div>
          <div className={classes.comment_content}>
            <Typography>{comment.content}</Typography>
          </div>
        </div>
      ))};
      <Box style={{height: '100px'}}>
        <TextField className={classes.comment_content} id="outlined-basic" variant="outlined" placeholder="댓글을 입력하세요" onChange={onCommentHandler}/>
        <Button className={classes.comment_button} onClick={commentSave}>댓글 달기</Button>
      </Box>
      <Button onClick={() => {props.history.goBack()}} className={classes.opt}>목록으로</Button>
      <Button className={classes.opt}>수정하기</Button>
      <Button className={classes.opt} onClick={deletePost}>삭제하기</Button>
    </div>
  );
}

export default PostDetail;