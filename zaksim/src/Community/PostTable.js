import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Pagination from '@material-ui/lab/Pagination';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import http from '../common/axios/index';
import TimeForToday from './TimeForToday';
import NickName from './NickName';

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: '900px',
    minWidth: '650px',
    margin: 'auto',
  },
  page: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '900px',
    padding: '0'
  },
  write: {
    textDecoration: 'none',
    color: 'black',
    marginLeft: 'auto',
    marginTop: '10px',
  },
  title: {
    textDecoration: 'none',
    color: 'black',
  },
});

export default function PostTable() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const category = ['운동', '공부', '취미', '기타'];
  useEffect(async () => {
    const response = await http.get('/community');
    setPosts(response.data.object);
    setLoading(false);
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const getNickname = (id) => {
    const userInfo = http.get(`/user/info?userId=${id}`);
    return '띠용'
  }

  return (
    <div>
      <TableContainer className={classes.tableContainer}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D' }} > 카테고리</TableCell>
              <TableCell align="left" style={{ fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D' }}>제목</TableCell>
              <TableCell align="right" style={{ fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D' }}>작성자</TableCell>
              <TableCell align="right" style={{ fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D' }}>작성일</TableCell>
              <TableCell align="right" style={{ fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D' }}>조회수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPosts(posts).map(post => (
              <TableRow>
              <TableCell style={{ width: '100px' }}>{category[post.categoryId]}</TableCell>
              <TableCell align="left"><Link to={`/read/${post.postId}`} className={classes.title}>{post.title}</Link></TableCell>
              <TableCell align="right"><NickName id={post.userId}></NickName></TableCell>
              <TableCell align="right"><TimeForToday value={post.regtime}></TimeForToday></TableCell>
              <TableCell align="right">{post.view}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Container className={classes.page}>
        <Pagination
          className={classes.write}
          page={currentPage}
          count={parseInt(posts.length / postsPerPage) + 1}
          onChange={handleChange}
        ></Pagination>
        <Link className={classes.write} to={`/write`}>
          <CreateIcon></CreateIcon>글쓰기
        </Link>
      </Container>
    </div>
  );
}
