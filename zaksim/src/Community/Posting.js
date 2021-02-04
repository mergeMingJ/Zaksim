import React, {useState} from 'react';
import { Button, Container, Grid, Typography, makeStyles, Link, Box, TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FixedItem from '../TotalPage/FixedItem';
import axios from 'axios'

const useStyles = makeStyles({
  titleArea: {
    height: '50px',
  },
  formControl: {
    height: '50px',
    minWidth: '120px',
  },
  select: {
    height: '50px',
    minWidth: '120px',
    border: '1px solid grey',
    borderRadius: '5px',
  },
  title: {
    width: '680px',
    fontSize: '18px',
    padding: '12px 0',
    border: '1px solid grey',
    borderRadius: '5px'
  },
  content: {
    fontSize: '14px',
    margin: 0,
    padding: '5px',
    height: '600px',
    width: '800px',
    border: '1px solid grey',
  },
  submit: {
    color: 'white',
    backgroundColor: '#FF7761',
    border: '1px',
    borderRadius: '5px',
  }
});


function Posting() {
  const classes = useStyles();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const postSave = async () => {
    const post = await axios.post('https://i4b108.p.ssafy.io/community', {
      "categoryId": category,
      "content": content,
      "filePath": "string",
      "postId": 0,
      "regtime": "2021-02-04T19:27:31.681Z",
      "title": title,
      "userId": 0
    });
    console.log(post);
    return window.location.href = '/community'
  }

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
      <FixedItem></FixedItem>
      <Container>
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
        <input className={classes.title} type="text" placeholder="제목을 입력하세요." onChange={onTitleHandler}></input>
        <p><textarea className={classes.content} type="text" placeholder="내용을 입력하세요." onChange={onContentHandler}></textarea></p>
        <Button className={classes.submit} onClick={postSave}>글쓰기</Button>
      </Container>
    </div>
  );
}

export default Posting;