import React, { useState } from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import Header from '../Fixed/Header';
import Footer from '../Fixed/Footer';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { ko, enGB } from 'date-fns/locale';
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ChipInput from 'material-ui-chip-input';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import http from '../common/axios/index';
import { useHistory } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import ExtensionIcon from '@material-ui/icons/Extension';
import Padding from '../Fixed/Padding';

export default function ChallengeCreate() {
  const classes = useStyles();
  const history = useHistory();

  const [tabValue, setTabValue] = React.useState('1'); // default: 소개
  const handleTabValueChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const [title, setTitle] = useState('');
  const [mission, setMission] = useState('');
  const [summary, setSummary] = useState('');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [memberCondition, setMemberCondition] = useState('');
  const [guide, setGuide] = useState('');
  const [descExpert, setDescExpert] = useState('');
  const [descInfo, setDescInfo] = useState('');
  const [descRec, setDescRec] = useState('');
  const [descWarn, setDescWarn] = useState('');

  const onTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onMissionHandler = (e) => {
    setMission(e.target.value);
  };
  const onSummaryHandler = (e) => {
    setSummary(e.target.value);
  };
  const onMemberConditionHandler = (e) => {
    setMemberCondition(e.target.value);
  };
  const onGuideHandler = (e) => {
    setGuide(e.target.value);
  };
  const onDescExpertHandler = (e) => {
    setDescExpert(e.target.value);
  };
  const onDescInfoHandler = (e) => {
    setDescInfo(e.target.value);
  };
  const onDescRecHandler = (e) => {
    setDescRec(e.target.value);
  };
  const onDescWarnHandler = (e) => {
    setDescWarn(e.target.value);
  };

  // 최대 인원
  const [maxNumber, setMaxNumber] = useState(10);
  const increaseMaxNumber = () => {
    setMaxNumber(maxNumber + 1);
    // setNumber(prevNumber => prevNumber + 1);
  };
  const decreaseMaxNumber = () => {
    setMaxNumber(maxNumber - 1);
    // setNumber(prevNumber => prevNumber - 1);
  };

  // // 라이브 라디오 그룹
  // const [isLive, setIsLive] = React.useState(1);
  // const onIsLiveHandler = (e) => {
  //   setIsLive(e.target.value);
  //   console.log('isLive: ' + e.target.value);
  // };

  // // 공개여부 라디오 그룹
  // const [isPublic, setPublic] = React.useState(0);
  // const onPublicHandler = (e) => {
  //   setPublic(e.target.value);
  //   console.log('isPublic: ' + e.target.value);
  // };

  // 해시태그
  const [tags, setTags] = React.useState([]);
  const onTagsHandler = (chip) => {
    setTags(chip);
    // console.log('tags: ' + tags);
  };

  const onCreate = (e) => {
    e.preventDefault();
    let challenge = {
      categoryId: 1,
      descExpert: descExpert, //프로젝트 종료 후 기대되는 변화
      descInfo: descInfo, //프로젝트 소개와 개설 이유
      descRec: descRec, //이런 분께 추천해요
      descWarn: descWarn, //인증할 때 주의사항
      endDate: endDate,
      entryPoint: 0,
      guide: guide, //인증방법
      hashtag: tags.toString(),
      imgPath: imgUrl,
      // isLive: isLive,
      // isPublic: isPublic,
      managerId: window.localStorage.getItem('userId'),
      managerNickname: window.localStorage.getItem('nickname'),
      maxUser: maxNumber,
      memberCondition: memberCondition, //멤버조건
      mission: mission,
      nowUser: 1,
      startDate: startDate,
      summary: summary,
      title: title,
    };

    http.post('/challenge/insert', challenge).then((res) => {
      if (res.data.data == 'success') {
        history.push('/Category');
        // console.log(res);
      } else {
        alert('챌린지 등록에 실패했습니다!');
        // console.log(res);
      }
    });
  };

  // 이미지 업로드
  const [imgUrl, setImgurl] = useState("");
  const [previewPhoto, setPreviewPhoto] = useState(null);

  //미리보기
  const onSelectImgPath = (event) => {
    if (!event.target.files) return;

    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      const base64 = fileReader.result;
      if (!base64) return;
      setPreviewPhoto(base64.toString());
    }

    if (file)
      fileReader.readAsDataURL(file);

    // 일단 업로드
    const formData = new FormData();
    formData.append("file", file);
    http
      .post("/file/upload", formData)
      .then((res) => {
        setImgurl(res.data);
      })
      .catch((err) => {
        // console.error(err.response);
      });
  }

  return (
    <div>
      <Header />
      <Padding />
      <React.Fragment>
        <div className={classes.titleContent}>
          <Grid container spacing={10}>
            <Grid item xs={6}>
              <Typography variant="h4" align="right" style={{ fontWeight: 'bold', color: 'white' }}>
                진행할 챌린지를
                <br />
                소개해주세요.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="left" style={{ fontSize: '1.1rem', color: 'white' }}>
                매일 실천할 챌린지를 통해
                <br />
                과정에서 중요하게 생각하는 점이나
                <br />
                이루고 싶은 목표를 알려주세요.
              </Typography>
            </Grid>
          </Grid>
        </div>
        <main>
          <Container className={classes.cardGrid} maxWidth="sm">
            <TabContext value={tabValue}>
              <AppBar elevation={0} position="static">
                <TabList
                  onChange={handleTabValueChange}
                  aria-label="simple tabs example"
                  style={{ backgroundColor: 'white', color: 'black' }}
                  centered
                  className={classes.hide}
                >
                  <Tab label="기본 정보" value="1" />
                  <Tab label="상세 정보" value="2" />
                </TabList>
              </AppBar>
              <TabPanel value="1">
                <div className={classes.subTitle}>1. 챌린지 제목</div>
                <div className={classes.subContent}>
                  <input
                    className={classes.inputBox}
                    type="text"
                    placeholder="예) 매일매일 7,000보 걷기"
                    onChange={onTitleHandler}
                  />
                  0/20자
                </div>
                <div className={classes.subTitle}>2. 챌린지 미션</div>
                <div className={classes.subContent}>
                  * 개설 이후 수정이 불가합니다. 신중하게 입력해주세요.
                  <textarea
                    className={classes.inputBox}
                    type="text"
                    style={{ resize: 'none' }}
                    placeholder="예) 매일 스쿼트 30개"
                    onChange={onMissionHandler}
                  />
                  0/50자
                </div>
                <div className={classes.subTitle}>3. 챌린지 소개</div>
                <div className={classes.subContent}>
                  <textarea
                    className={classes.inputBox}
                    type="text"
                    style={{ resize: 'none' }}
                    placeholder="예) 매일 7천 보 걷기를 통해서 운동 부족을 탈출해 보려고 합니다. 함께 걸어요!"
                    onChange={onSummaryHandler}
                  />
                  0/100자
                </div>
                <div className={classes.subTitle}>4. 멤버 조건</div>
                <div className={classes.subContent}>
                  <input
                    className={classes.inputBox}
                    type="text"
                    placeholder="예) 운동을 좋아하는 사람"
                    onChange={onMemberConditionHandler}
                  />
                  0/20자
                </div>
                <div className={classes.subTitle}>5. 인증 방법</div>
                <div className={classes.subContent}>
                  * 개설 이후 수정이 불가합니다. 신중하게 입력해주세요.
                  <textarea
                    className={classes.inputBox}
                    type="text"
                    style={{ resize: 'none' }}
                    placeholder="예) 매일 독서한 후 마음에 드는 구절 사진으로 찍어 업로드하기"
                    onChange={onGuideHandler}
                  />
                  0/50자
                </div>
                {/* <div className={classes.subTitle}>6. 챌린지 라이브 기능</div>
                <div className={classes.subContent}>
                  <FormControl component="fieldset">
                    <RadioGroup value={isLive} onChange={onIsLiveHandler}>
                      <div>
                        <FormControlLabel value="1" control={<Radio />} label="가능" />
                        <FormControlLabel value="0" control={<Radio />} label="불가능" />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={classes.subTitle}>7. 챌린지 공개 여부</div>
                <div className={classes.subContent}>
                  <FormControl component="fieldset">
                    <RadioGroup value={isPublic} onChange={onPublicHandler}>
                      <div>
                        <FormControlLabel value="0" control={<Radio />} label="공개" />
                        <FormControlLabel value="1" control={<Radio />} label="비공개" />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div> */}
                <div className={classes.subTitle}>6. 챌린지 기간</div>
                <div className={classes.subContent}>
                  <DateRangePicker
                    width="160px"
                    startDate={startDate}
                    endDate={endDate}
                    onStartDateChange={setStartDate}
                    onEndDateChange={setEndDate}
                    minimumDate={new Date()}
                    minimumLength={1}
                    format="yyyy MMM dd"
                    locale={enGB}
                    onChange={onTitleHandler}
                  >
                    {({ startDateInputProps, endDateInputProps, focus }) => (
                      <div className="date-range">
                        <input
                          className={
                            ('input' + (focus === START_DATE ? ' -focused' : ''), classes.dayPicker)
                          }
                          {...startDateInputProps}
                          placeholder="Start date"
                        />
                        <ArrowForwardIosIcon className={classes.dayArrow} />
                        {/* <span className="date-range_arrow" /> */}
                        <input
                          className={
                            ('input' + (focus === END_DATE ? ' -focused' : ''), classes.dayPicker)
                          }
                          {...endDateInputProps}
                          placeholder="End date"
                        />
                      </div>
                    )}
                  </DateRangePicker>
                </div>
                <div className={classes.subTitle}>9. 챌린지 키워드 (1개 이상)</div>
                <div className={classes.subContent}>
                  <ChipInput
                    chip={tags}
                    onChange={(chip) => {
                      onTagsHandler(chip);
                    }}
                    className={classes.hashTag}
                    placeholder="태그를 입력해주세요"
                  />
                </div>
                <div className={classes.subTitle}>10. 대표 이미지 등록</div>
                <div className={classes.subContent}>
                  {/* <Button variant="outlined" color="secondary">
                    첨부파일
                  </Button> */}
                  <input type="file" onChange={onSelectImgPath} />
                </div>
                <div className={classes.subTitle}>11. 몇명의 멤버와 함께 진행하고 싶나요?</div>
                <div className={classes.subContent}>
                  <div>
                    최대 인원
                    <div className={classes.headCount} onChange={onTitleHandler}>
                      <RemoveCircleOutlineIcon
                        onClick={decreaseMaxNumber}
                        className={classes.minusIcon}
                      />
                      &nbsp;&nbsp;&nbsp;
                      {maxNumber}
                      &nbsp;&nbsp;&nbsp;
                      <AddCircleOutlineIcon onClick={increaseMaxNumber} />
                    </div>
                  </div>
                </div>
                <Grid container justify="flex-end">
                  <Button
                    className={classes.next}
                    onClick={(e) => {
                      handleTabValueChange(e, '2');
                    }}
                  >
                    다음
                  </Button>
                </Grid>
              </TabPanel>
              <TabPanel value="2">
                <div className={classes.subTitle}>
                  <ExtensionIcon />
                  &nbsp; 프로젝트 종료 후 기대되는 변화
                </div>
                <div className={classes.subContent}>
                  <textarea
                    className={classes.inputBox}
                    type="text"
                    style={{ resize: 'none' }}
                    placeholder="프로젝트 종료 후 기대되는 변화에 대해 작성해주세요."
                    onChange={onDescExpertHandler}
                  />
                </div>
                <div className={classes.subTitle}>
                  <ExtensionIcon />
                  &nbsp; 프로젝트 소개와 개설 이유
                </div>
                <div className={classes.subContent}>
                  <textarea
                    className={classes.inputBox}
                    type="text"
                    style={{ resize: 'none' }}
                    placeholder="프로젝트 스토리를 작성해주세요."
                    onChange={onDescInfoHandler}
                  />
                </div>
                <div className={classes.subTitle}>
                  <ExtensionIcon />
                  &nbsp; 이런 분께 추천해요
                </div>
                <div className={classes.subContent}>
                  <textarea
                    className={classes.inputBox}
                    type="text"
                    style={{ resize: 'none' }}
                    placeholder="프로젝트를 어떤 사람에게 추천하고 싶은지 작성해주세요."
                    onChange={onDescRecHandler}
                  />
                </div>
                <div className={classes.subTitle}>
                  <ExtensionIcon />
                  &nbsp; 인증할 때 주의사항
                </div>
                <div className={classes.subContent}>
                  <textarea
                    className={classes.inputBox}
                    type="text"
                    style={{ resize: 'none' }}
                    placeholder="프로젝트 인증 시 주의할 사항을 작성해주세요."
                    onChange={onDescWarnHandler}
                  />
                </div>
                <Grid container justify="center">
                  <Button className={classes.submit} onClick={onCreate}>
                    개설하기
                  </Button>
                </Grid>
              </TabPanel>
            </TabContext>
          </Container>
        </main>
      </React.Fragment>
      <Footer />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  hide: {
    display: 'none',
  },
  titleContent: {
    padding: theme.spacing(5, 0, 5),
    backgroundColor: '#ff521b',
    opacity: '0.7',
  },
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
  subTitle: {
    padding: theme.spacing(3, 2, 1),
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#ff521b',
  },
  subContent: {
    padding: theme.spacing(1, 2, 1),
    fontSize: '1rem',
  },
  dayPicker: {
    padding: theme.spacing(1, 2, 1),
    fontSize: '0.9rem',
    width: '150px',
  },
  inputBox: {
    width: '80%',
    fontSize: '1rem',
    padding: '10px',
    margin: '0px 10px 0 0',
    border: '1px solid grey',
    display: 'inline-block',
  },
  headCount: {
    width: '50%',
    fontSize: '1rem',
    padding: '5px',
    margin: '0 0 0 20px',
    border: '1px solid grey',
    display: 'inline-block',
    textAlign: 'center',
  },
  hashTag: {
    width: '90%',
    fontSize: '1rem',
    padding: theme.spacing(0, 0, 0, 2),
    display: 'inline-block',
  },
  submit: {
    color: 'white',
    backgroundColor: '#FF7761',
    border: '1px',
    borderRadius: '5px',
    display: 'block',
    width: '30%',
  },
  next: {
    marginTop: theme.spacing(3),
    color: 'white',
    backgroundColor: '#FF7761',
    border: '1px',
    borderRadius: '5px',
    display: 'block',
  },
  dayArrow: {
    padding: theme.spacing(0, 1, 0, 1),
    alignItems: 'center',
  },
  minusIcon: {
    justify: 'left',
  },
}));
