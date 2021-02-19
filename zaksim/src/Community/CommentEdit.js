import React, {useState, useEffect} from 'react';
import http from '../common/axios/index'
import { Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
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
  });


const CommentEdit = ({cmt}) =>{
    const classes = useStyles();
    const [comment, setComment] = useState(cmt.content);

    const onCommentHandler = (e) => {
        setComment(e.target.value);
    };

    const commentUpdate = async () => {
        if (comment === '') {
            alert('내용을 입력하세요.') 
        }
        else {
            const newComment = await http.put('/community/comment/update', {
            commentId: cmt.commentId,
            content: comment,
            postId: cmt.postId,
            regtime: '',
            userId: cmt.userId,
            });
            return window.location.replace(`/read/${cmt.postId}`);
        }
    };
    
    return (
        <div>
            <div style={{margin:'20px 0'}}>
                <textarea className={classes.comment_input} value={comment} onChange={onCommentHandler}/>
                <Button className={classes.comment_button} onClick={commentUpdate}>댓글 수정</Button>
            </div>
        </div>
    )
};

export default CommentEdit;