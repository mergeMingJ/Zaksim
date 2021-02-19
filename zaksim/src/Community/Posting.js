import React, { useState } from 'react';
import {
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
  Link,
  Box,
  TextField,
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import Header from '../Fixed/Header';
import Footer from '../Fixed/Footer';
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
    fontFamily: 'KOTRA_GOTHIC'
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

function Posting() {
  const classes = useStyles();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState(window.localStorage.getItem('userId'));
  const postSave = async () => {
    const post = await http.post('/community/insert', {
      categoryId: category,
      content: content,
      filePath: 'string',
      postId: 0,
      regtime: '2021-02-04T19:27:31.681Z',
      title: title,
      userId: userId,
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
              placeholder="제목을 입력하세요."
              onChange={onTitleHandler}
            ></input>
          </div>
          <textarea
            className={classes.content}
            type="text"
            placeholder="내용을 입력하세요."
            onChange={onContentHandler}
          ></textarea>
          <Button className={classes.submit} onClick={postSave} style={{ fontFamily: 'KOTRA_GOTHIC' }}>
            글쓰기
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
      <Footer></Footer>
    </div>
  );
}

export default Posting;
