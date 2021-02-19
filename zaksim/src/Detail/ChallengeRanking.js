import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import SmallProfile from '../Fixed/SmallProfile';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import http from '../common/axios/index';



export default function BasicTable({ challengeId }) {
  const classes = useStyles();
  const [rankInfoList, setRankInfoList] = React.useState([])

  let params = {
    challengeId: challengeId
  };

  useEffect(() => {
    http.get('/challenge/member', { params }).then((res) => {
      if (res.data.data === 'success') {
        setRankInfoList(res.data.object)
      }
    });
  }, [])

  const newrankInfoList = rankInfoList.sort((a, b) => b.progress - a.progress).map((user, index) => {
    return (

      <TableRow key={index}>
        <TableCell align="center" width="15%" style={{ fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D' }}>{index + 1}</TableCell>
        <TableCell justify="center" className={classes.profile} width="25%">
          <SmallProfile userId={user.userId} />
        </TableCell>
        <TableCell align="center" width="60%">
          <Progress percent={user.progress} status="default" theme={{ default: { color: "#ff521b" } }} />
        </TableCell>
      </TableRow>

    );
  })


  return (
    <Container maxWidth="md" className={classes.contentGrid}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.header} width="15%">
                랭킹
              </TableCell>
              <TableCell className={classes.header} width="25%">
                참여자
              </TableCell>
              <TableCell className={classes.header} width="60%">
                인증률&nbsp;(%)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newrankInfoList}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  contentGrid: {
    paddingBottom: theme.spacing(2),
  },
  header: {
    fontFamily: 'KOTRA_BOLD-Bold',
    textAlign: 'center',
  },
  profile: {
    paddingLeft: theme.spacing(4)
  },

  listyle: {
    width: '100%',
  },
}));
