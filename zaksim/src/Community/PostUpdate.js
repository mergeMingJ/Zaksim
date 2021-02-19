import React, { useState, useEffect } from 'react';
import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Header from '../Fixed/Header';
import http from '../common/axios/index';
import Padding from '../Fixed/Padding';

const useStyles = makeStyles({
  formControl: {
    height: '50px',
    minWidth: '120px',
    display: 'inline-block',
  },
  select: {
    height: '50px',
    minWidth: '120px',
    border: '1px solid grey',
    borderRadius: '5px',
  },
  title: {
    width: '630px',
    fontSize: '18px',
    padding: '12px 0',
    border: '1px solid grey',
    borderRadius: '5px',
    display: 'inline-block',
  },
  content: {
    fontSize: '14px',
    margin: 0,
    padding: '5px',
    height: '600px',
    width: '800px',
    border: '1px solid grey',
    display: 'block',
  },
  submit: {
    color: 'white',
    backgroundColor: '#fc9e4f',
    border: '1px',
    borderRadius: '5px',
    display: 'block',
    margin: '10px',
  },
  cancel: {
    color: 'white',
    backgroundColor: '#edd382',
    border: '1px',
    borderRadius: '5px',
    display: 'block',
    margin: '10px',
  },
});

const PostUpdate = (props) => {
  const classes = useStyles();
  const [post, setPost] = useState([]);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const id = props.match.params.id;
  useEffect(async () => {
    setLoading(true);
    const response = await http.get(`/community/info?postId=${id}`);
    setPost(response.data.object);
    setTitle(response.data.object.title);
    setContent(response.data.object.content);
    setCategory(response.data.object.categoryId);
    setLoading(false);
  }, []);

  const updateSave = async () => {
    const updatedPost = await http.put('/community/update', {
      categoryId: category,
      content: content,
      filePath: post.filePath,
      postId: post.postId,
      title: title,
      userId: post.userId,
    });
    return (window.location.href = '/community');
  };

  const onCategoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const onTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onContentHandler = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <Header></Header>
      <Padding></Padding>
      <Container style={{ maxWidth: '800px', marginTop: '30px' }}>
        <Grid container justify="center">
          <div style={{ display: 'block' }}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>카테고리</InputLabel>
              <Select
                className={classes.select}
                value={category}
                onChange={onCategoryHandler}
                label="카테고리"
              >
                <MenuItem value={0}>운동</MenuItem>
                <MenuItem value={1}>공부</MenuItem>
                <MenuItem value={2}>취미</MenuItem>
                <MenuItem value={3}>기타</MenuItem>
              </Select>
            </FormControl>
            <input
              className={classes.title}
              type="text"
              value={title}
              onChange={onTitleHandler}
            ></input>
          </div>
          <textarea
            className={classes.content}
            type="text"
            value={content}
            onChange={onContentHandler}
          ></textarea>
          <Button className={classes.submit} onClick={updateSave}>
            수정하기
          </Button>
          <Button
            className={classes.cancel}
            onClick={() => {
              return (window.location.href = '/community');
            }}
          >
            취소
          </Button>
        </Grid>
      </Container>
    </div>
  );
};

export default PostUpdate;
