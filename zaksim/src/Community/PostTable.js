import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/lab/Pagination';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import axios from 'axios'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  page: {
    display: 'flex',
    justifyContent: "center"
  },
  write: {
    marginLeft: 'auto',
  }
});

export default function PostTable() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect( async() => {
    setLoading(true);
    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // pagination 테스트 用
    const response = await axios.get('https://i4b108.p.ssafy.io/community');
    setPosts(response.data.object);
    setLoading(false);
  }, []);
  
  console.log(posts);

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
  
  return (
    <div>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell align="right">제목</TableCell>
              <TableCell align="right">작성자</TableCell>
              <TableCell align="right">작성일</TableCell>
              <TableCell align="right">조회수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              loading &&
              <div> loading... </div>
            }
            { currentPosts(posts).map(post => (
              <TableRow key={post.postId}>               
                <TableCell component="th" scope="post">
                  {post.postId}
                </TableCell>
                <TableCell align="right"><Link to={`/read/${post.postId}`}>{post.title}</Link></TableCell>
                <TableCell align="right">{post.userId}</TableCell>
                <TableCell align="right">{post.regtime}</TableCell>
                <TableCell align="right">{post.postId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  
      
      <Container className={classes.page}>
        <Pagination 
          className={classes.write}
          page={currentPage}
          count={parseInt(posts.length/postsPerPage)+1}
          onChange={handleChange}
        ></Pagination>
        <Link className={classes.write} to={`/write`}><CreateIcon></CreateIcon>글쓰기</Link>
      </Container>
      
    </div>
  );
}
