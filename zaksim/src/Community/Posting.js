import React from 'react';
import { Button, Container, Grid, Typography, makeStyles, Link, Box, TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FixedItem from '../TotalPage/FixedItem';

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
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
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
            onChange={handleChange}
            label="카테고리"
          >
            <MenuItem value={10}>운동</MenuItem>
            <MenuItem value={20}>공부</MenuItem>
            <MenuItem value={30}>취미</MenuItem>
            <MenuItem value={30}>기타</MenuItem>
          </Select>
        </FormControl>
        <input className={classes.title} type="text" placeholder="제목을 입력하세요."></input>
        <p><textarea className={classes.content} type="text" placeholder="내용을 입력하세요."></textarea></p>
        <Button className={classes.submit}>글쓰기</Button>
      </Container>
    </div>
  );
}

export default Posting;