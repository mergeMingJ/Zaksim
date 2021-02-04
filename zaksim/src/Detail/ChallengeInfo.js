import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  contentGrid: {
    paddingTop: theme.spacing(2),
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
    backgroundColor: '#ff7761',
    color: 'white',
  },
  subTitle: {
    padding: theme.spacing(2, 2, 2),
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  subContent: {
    padding: theme.spacing(1, 2, 1),
    fontSize: '1rem',
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
}));

var windowObjectReference = null; // global variable

var windowFeatures = 'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes';

const openFFPromotionPopup = () => {
  if (windowObjectReference == null || windowObjectReference.closed) {
    windowObjectReference = window.open('/Live', 'OnAir', 'resizable,scrollbars,status');
  } else {
    windowObjectReference.focus();
  }
};

export default function ChallengeInfo() {
  const classes = useStyles();

  const [value, setValue] = React.useState('value');
  const getHashTagValue = (value) => {
    if (value != null) {
      return (
        <Button variant="outlined" className={classes.hashTag}>
          #{value}
        </Button>
      );
    } else {
      return null;
    }
  };

  return (
    <Container maxWidth="md" className={classes.contentGrid}>
      <div className={classes.summaryContent}>
        <Typography className={classes.blur} style={{ color: 'black', fontWeight: 'bold' }}>
          안녕하세요. 100일동안 물마시기 습관 기르기에 함께 도전합시다 ^^
          <br />
          건강한 삶을 살기 위해 500mL 물마시기에 도전합니다!
        </Typography>
      </div>
      <div className={classes.contentGrid}>
        <div className={classes.tableBackGround}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className={classes.tableHeader}>인증미션</TableCell>
                <TableCell align="left">매일 500mL 이상 물을 마시고 날짜가 찍히도록 인증</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>인증방법</TableCell>
                <TableCell align="left">
                  매일 500mL 이상 물마시기 인증(날짜가 찍히도록) 텀블러, 컵, 페트병, 보온병 모두
                  모두 좋아요~ 오늘 마실 물 또는 다 마신 병을 자유롭게 인증해주세요!(커피,음료,술 X)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>인증시간</TableCell>
                <TableCell align="left">매일 00:00 ~ 다음날 00:00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>모집인원</TableCell>
                <TableCell align="left">최소 1명 - 최대 50명</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>멤버조건</TableCell>
                <TableCell align="left">물 마시는 생활습관을 기르고 싶으신 모든 분들!</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>해시태그</TableCell>
                <TableCell align="left">
                  <div className={classes.hashTag}>{getHashTagValue('건강')}</div>
                  <div className={classes.hashTag}>{getHashTagValue('습관')}</div>
                  <div className={classes.hashTag}>{getHashTagValue('다이어트')}</div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div align="center">
          <Button className={classes.button} variant="contained" startIcon={<AddBoxIcon />}>
            작심하기
          </Button>
          <Button className={classes.button} variant="contained" startIcon={<DoneOutlineIcon />}>
            인증하기
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            startIcon={<DoneOutlineIcon />}
            href="/Live"
            target="OnAir"
            onclick="openFFPromotionPopup(); return false;"
            title="This link will create a new window or will re-use an already opened one"
          >
            라이브
          </Button>
        </div>
      </div>
      <div className={classes.contentGrid}>
        <div className={classes.subTitle}>
          <ExtensionIcon />
          &nbsp; 프로젝트 소개와 개설 이유
        </div>
        <div className={classes.subContent}>
          저처럼 평소 물 잘 안드시고 커피, 탄산음료 많이 드시는 분 또 계실까요?
          <br />
          <br />
          이런것들은 몸에 수분 흡수되는 것을 되는 걸 억제시킨대요 ‍♀️
          <br />
          <br />
          저도 점점 건강이 안좋아지는 걸 느끼면서 운동도 많이 해봤는데 기본부터 지키려구요
          <br />
          아프면 병원비가 더 아깝잖아요 ..?
          <br />
          <br />
          작심을 통해 100일동안 500ml 이상 물 마시기를 같이 실천해요
          <br />
          <br />물 마시기 습관이 적응되면 점차 물 마시는 양을 늘리면서 나중엔 하루 2L마시기가
          가능해지도록 화이팅!
        </div>
      </div>
      <div className={classes.contentGrid}>
        <div className={classes.subTitle}>
          <ExtensionIcon />
          &nbsp; 이런 분께 추천해요
        </div>
        <div className={classes.subContent}>
          - 평소 물을 자주 안마시는 분들
          <br />
          - 매일 물 마시는 습관을 가지고 싶은 분<br />- 매일 물 2L 이상 마시는게 힘든 분
        </div>
      </div>
      <div className={classes.contentGrid}>
        <div className={classes.subTitle}>
          <ExtensionIcon />
          &nbsp; 프로젝트 종료 후 기대되는 변화
        </div>
        <div className={classes.subContent}>
          - 매일 물 마시는 습관이 형성되어요
          <br />
          - 피부가 맑아지고 몸이 건강해져요
          <br />- 짜증이 줄고 이너피스 ~
        </div>
      </div>
      <div className={classes.contentGrid}>
        <div className={classes.subTitle}>
          <ExtensionIcon />
          &nbsp; 인증할 때 주의사항
        </div>
        <div className={classes.subContent}>물 마시기 전 사진을 찍어 인증해주세요!!</div>
      </div>
    </Container>
  );
}
