import React from 'react';
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

function createData(num, title, writer, date, count) {
  return { num, title, writer, date, count };
}

const rows = [
  createData(10, '운동|운동방법 공유합니다.', '도니보리', '2021-01-31', 21),
  createData(9, '운동|운동방법 공유합니다.', '도니보리', '2021-01-31', 21),
  createData(8, '운동|운동방법 공유합니다.', '도니보리', '2021-01-31', 21),
  createData(7, '운동|운동방법 공유합니다.', '도니보리', '2021-01-31', 21),
  createData(6, '운동|운동방법 공유합니다.', '도니보리', '2021-01-31', 21),
  createData(5, '운동|운동방법 공유합니다.', '도니보리', '2021-01-31', 21),
];


export default function PostTable() {
  const classes = useStyles();
  var boards = Object()
  axios.get('https://i4b108.p.ssafy.io/community')
    .then(function(res) {
      // console.log(res.data.object[0])
      boards = res.data.object[0]
      console.log(boards.title)
    })
    .catch(function(error) {
      console.log(error)
    })

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
            {rows.map((row) => (
              <TableRow key={row.num}>
                <TableCell component="th" scope="row">
                  {row.num}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.writer}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Container className={classes.page}>
        <Pagination className={classes.write} count={5}></Pagination>
        <Link className={classes.write} to={`/write`}><CreateIcon></CreateIcon>글쓰기</Link>
      </Container>
      
    </div>
  );
}
