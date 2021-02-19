import React, {useState, useEffect} from 'react';
import http from '../common/axios/index'
import { Button, makeStyles, IconButton, Grid } from '@material-ui/core';
import TimeForToday from './TimeForToday'
import CommentEdit from './CommentEdit';
import NickName from './NickName';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    comment_info: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#F9EDE6',
      padding: '0 15px'
    },
    comment_content: {
      padding: '15px',
      wordWrap: 'break-word',
    },
  });

const CommentView = ({cmt, userId}) =>{
    const classes = useStyles();

    const deleteComment = async () =>{
        await http.delete(`/community/comment/delete?commentId=${cmt.commentId}`)
        alert('댓글이 삭제되었습니다.')
        return window.location.replace(`/read/${cmt.postId}`)
    };
    const [editing, setEditing] = useState(false)
    const toggleEdit = () => {
        setEditing(!editing);
    }
    if (editing) return (<CommentEdit cmt={cmt}></CommentEdit>)
    return (
        <div>
            <div className={classes.comment_info}>
                <Grid container>
                    <Grid item xs={9}>
                        <p><NickName id={cmt.userId}/></p>
                    </Grid>
                    <Grid item xs={1}>
                        <p><TimeForToday value={cmt.regtime}></TimeForToday></p>
                    </Grid>
                    <Grid item xs={2}>
                        {
                            cmt.userId == userId
                            ? 
                            <div>
                                <IconButton onClick={deleteComment} style={{float:'right'}}><DeleteIcon/></IconButton>
                                <IconButton onClick={toggleEdit} style={{float:'right'}}><EditIcon/></IconButton>
                            </div>
                            : null
                        }
                    </Grid>
                </Grid>
            </div>
            <div className={classes.comment_content}>
                {
                cmt.content.split('\n').map(line => {
                    return (<span>{line}<br/></span>);
                })
                }
            </div>
        </div>
    )
};

export default CommentView;