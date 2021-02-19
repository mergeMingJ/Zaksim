import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ExtensionIcon from '@material-ui/icons/Extension';
import { useHistory } from 'react-router-dom';
import ModalZaksim from '../Detail/ModalZaksim';
import ModalFeedForm from '../Detail/ModalFeedForm';
import SmallProfile from '../Fixed/SmallProfile';
import FullHeart from '@material-ui/icons/Favorite';

import http from '../common/axios/index';
import 'moment/locale/ko';
import { Link } from 'react-router-dom'

// format 만들어주기
export function change_date(published_at) {
  var moment = require('moment');

  const publish_date = moment(published_at).format('MM월 DD일');
  return publish_date;
}

var windowObjectReference = null; // global variable

var windowFeatures = 'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes';

export default function ChallengeInfo({ challengeId }) {
  const classes = useStyles();
  const history = useHistory();

  const [mission, setMission] = React.useState('');
  const [summary, setSummary] = React.useState('');
  const [guide, setGuide] = React.useState('');
  const [maxUser, setMaxUser] = React.useState('');
  const [memberCondition, setMemberCondition] = React.useState('');
  const [hashtag, setHashtag] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [descInfo, setDescInfo] = React.useState('');
  const [descRec, setDescRec] = React.useState('');
  const [descExpert, setDescExpert] = React.useState('');
  const [descWarn, setDescWarn] = React.useState('');
  const [managerId, setManagerId] = React.useState('');

  let params = {
    challengeId: challengeId,
  };

  useEffect(() => {
    http.get('/challenge/info', { params }).then((res) => {
      if (res.data.data === 'success') {
        setMission(res.data.object.mission);
        setSummary(res.data.object.summary);
        setMaxUser(res.data.object.maxUser);
        setHashtag(res.data.object.hashtag);
        setStartDate(change_date(res.data.object.startDate));
        setEndDate(change_date(res.data.object.endDate));
        setManagerId(res.data.object.managerId);
      }
    });

    http.get('/challenge/detail/info', { params }).then((res) => {
      if (res.data.data === 'success') {
        setGuide(res.data.object.guide);
        setMemberCondition(res.data.object.memberCondition);
        setDescInfo(res.data.object.descInfo);
        setDescRec(res.data.object.descRec);
        setDescExpert(res.data.object.descExpert);
        setDescWarn(res.data.object.descWarn);
      }
    });

  }, []);
  // console.log(params)

  const openFFPromotionPopup = () => {
    if (windowObjectReference == null || windowObjectReference.closed) {
      windowObjectReference = window.open('/Live', 'OnAir', windowFeatures);
    } else {
      windowObjectReference.focus();
    }
  };

  const getHashTagValue = (value) => {
    if (value != null) {
      return (
        <div>
          {value.split(',').map((tag) => {
            return (
              <span>
                <Button variant="outlined" className={classes.hashTag}>
                  <Link to={`/Category/ /${tag}`} className={classes.hashTagLink}>#{tag}</Link>
                </Button>
              </span>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  };

  // 작심 체크 모달 열었다. 닫았다.
  const [modalZaksimOpen, setModalZaksimOpen] = React.useState(false);
  const handleClickModalZaksimOpen = () => {
    setModalZaksimOpen(true);
  };
  const handleClickModalZaksimClose = () => {
    setModalZaksimOpen(false);
  };

  // 인증 모달 열었다. 닫았다.
  const [modalFeedFormOpen, setModalFeedFormOpen] = React.useState(false);
  const handleClickModalFeedFormOpen = () => {
    setModalFeedFormOpen(true);
  };
  const handleClickModalFeedFormClose = () => {
    setModalFeedFormOpen(false);
  };


  // TODO: 찜하기 => network error
  const likeChallenge = () => {
    let params = {
      challengeId: challengeId,
      userId: window.localStorage.getItem("userId")
    }
    http
      .post("/user/heart", params)
      .then((res) => {
        if (res.data.data === "success") {
          alert("찜 했습니다.");
        } else {
          alert("찜을 할수 없네요ㅠㅠ");
        }
      })
      .catch((err) => {
        // console.log(err)
      })

  };

  return (
    <Container maxWidth="md" className={classes.contentGrid}>
      <div className={classes.summaryContent}>
        <div className={classes.cardManager}>
          <SmallProfile userId={managerId} />
        </div>
        <Typography
          className={classes.blur}
          style={{ color: '#3E3D3D', fontFamily: 'KOTRA_BOLD-Bold', fontSize: '25px' }}
        >
          {summary}
        </Typography>
        <br />
      </div>
      <div className={classes.contentGrid}>
        <div className={classes.tableBackGround}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className={classes.tableHeader}>인증미션</TableCell>
                <TableCell align="left">{mission}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>인증방법</TableCell>
                <TableCell align="left">{guide}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>인증기간</TableCell>
                <TableCell align="left">
                  {startDate} ~ {endDate}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>모집인원</TableCell>
                <TableCell align="left">최소 1명 - 최대 {maxUser}명</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>멤버조건</TableCell>
                <TableCell align="left">{memberCondition}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>해시태그</TableCell>
                <TableCell align="left">
                  <div className={classes.hashTag}>{getHashTagValue(hashtag)}</div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div align="center">
          <ModalZaksim open={modalZaksimOpen} onClose={handleClickModalZaksimClose} challengeId={challengeId} />
          <ModalFeedForm challengeId={challengeId} open={modalFeedFormOpen} onClose={handleClickModalFeedFormClose} />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            startIcon={<AddBoxIcon />}
            modalopen={modalZaksimOpen}
            onClick={() => {
              handleClickModalZaksimOpen();
            }}


          >
            작심하기
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            startIcon={<DoneOutlineIcon />}
            modalopen={modalFeedFormOpen}
            onClick={() => {
              handleClickModalFeedFormOpen();
            }}
          >
            인증하기
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            startIcon={<FullHeart />}
            onClick={() => {
              likeChallenge()
            }}
            title="This link will create a new window or will re-use an already opened one"
          >
            찜하기
          </Button>

          {/* 라이브 */}
          {/* <Button
            className={classes.button}
            variant="contained"
            color="primary"
            startIcon={<DoneOutlineIcon />}
            onClick={() => {
              openFFPromotionPopup();
              return false;
            }}
            title="This link will create a new window or will re-use an already opened one"
          >
            라이브
          </Button> */}
        </div>
        <hr />
      </div>

      <div className={classes.contentGrid}>
        <div className={classes.subTitle}>
          <ExtensionIcon />
          &nbsp; 프로젝트 소개와 개설 이유
        </div>
        <div className={classes.subContent}>
          {descInfo.split('\n').map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </div>
      </div>
      <div className={classes.contentGrid}>
        <div className={classes.subTitle}>
          <ExtensionIcon />
          &nbsp; 이런 분께 추천해요
        </div>
        <div className={classes.subContent}>
          {descRec.split('\n').map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </div>
      </div>
      <div className={classes.contentGrid}>
        <div className={classes.subTitle}>
          <ExtensionIcon />
          &nbsp; 프로젝트 종료 후 기대되는 변화
        </div>
        <div className={classes.subContent}>
          {descExpert.split('\n').map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </div>
      </div>
      <div className={classes.contentGrid}>
        <div className={classes.subTitle}>
          <ExtensionIcon />
          &nbsp; 인증할 때 주의사항
        </div>
        <div className={classes.subContent}>
          {descWarn.split('\n').map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  contentGrid: {
    paddingBottom: theme.spacing(2),
  },
  tableHeader: {
    width: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  summaryContent: {
    padding: '12px 24px 12px',
    backgroundColor: 'rgba(253,194,62,0.55)',
  },
  blur: {
    textAlign: 'center',
  },
  tableBackGround: {
    backgroundColor: 'rgba(253,194,62,0.25)',
  },
  button: {
    margin: '16px 5px 0px 5px',
    width: '180px',
    height: '45px',
    fontWeight: 'bold',
    fontSize: '1.2em',
    backgroundColor: '#ff521b',
    color: 'white',
    fontFamily: 'KOTRA_BOLD-Bold'
  },
  subTitle: {
    padding: theme.spacing(2, 2, 2),
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#3E3D3D'
  },
  subContent: {
    padding: theme.spacing(1, 2, 1),
    fontSize: '1rem',
    fontFamily: 'KOTRA_GOTHIC'
  },
  hashTag: {
    color: '#274555',
    borderWidth: '3px',
    borderColor: '#274555',
    padding: '1px 4px 1px',
    margin: '-1px 3px -1px 0px',
    display: 'inline-block',
    fontSize: '0.9rem',
    borderRadius: '2em',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  hashTagLink: {
    textDecoration: 'none',
    color: '#274555'
  },
  // TODO: 매니저 크기 줄이고 보더 넣기
  cardManager: {
    border: '2px solid #fc9e4f',
    borderRadius: 12,
    width: '15%',
    display: 'flex',
    justifyContent: 'center',
    // color: '#3E3D3D',
    // width: '12%',
    // display: 'flex',
    // justifyContent: 'center',
    // padding: '2px',
  },
}));
