import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ReactRoundedImage from 'react-rounded-image';

import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import 'rodal/lib/rodal.css';
import http from '../common/axios/index';
import Avatar from '@material-ui/core/Avatar';
import Loading from '../Fixed/Loading';

function Info(props) {
  const classes = useStyles();
  const history = useHistory();

  // 기본 컬러 바꾸기
  const colorTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#fc9e4f',
      },
    },
  });
  const [myTheme, setMyTheme] = useState(colorTheme);

  const [nickname, setNick] = useState('');
  const [desc, setDesc] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [profileimgPath, setProfileimgPath] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [descError, setDescError] = useState(false);
  const [nickError, setNickError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleNicknameChange = (event) => {
    // event.preventDefault();
    setNickError(event.target.value > 5);
    setNick(event.target.value);
  };
  const handleDescChange = (event) => {
    // event.preventDefault();
    setDescError(event.target.value > 20);
    setDesc(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePasswordCheckChange = (event) => {
    setPasswordError(event.target.value !== password);
    setPasswordCheck(event.target.value);
  };

  let params = {
    userId: window.localStorage.getItem('userId'),
  };
  const email = window.localStorage.getItem('email');

  useEffect(() => {
    http.get('/user/info', { params }).then((res) => {
      if (res.data.data === 'success') {
        console.log(res.data.object);
        setNick(res.data.object.nickname);
        setDesc(res.data.object.desc);
        setProfileimgPath(res.data.object.profileimgPath);
      }
      setLoading(false);
    });
  }, []);

  const updateDesc = async (e) => {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (desc == null || desc.length > 20) {
      return setDescError(true);
    }

    if (nickname == null || nickname.length > 5) {
      return setNickError(true);
    }

    let params = {
      desc: desc,
      email: email,
      nickname: nickname,
      password: password,
      profileimgPath: imgUrl,
      userId: window.localStorage.getItem("userId"),
    };
    http.put("/user/update", params).then((res) => {
      if (res.data.data === "success") {
        window.localStorage.setItem("nickname", nickname);
        window.localStorage.setItem("desc", desc);
        window.localStorage.setItem("profileimgPath", profileimgPath);
        alert("수정 되었습니다.");
        window.location.replace("/mypage");
      } else {
        alert("수정을 실패했습니다.");
      }
    });
  };

  const deleteUser = () => {
    http.delete('/user/delete', { params }).then((res) => {
      if (res.data.data === 'success') {
        window.localStorage.clear();
        history.push('/');
      }
    });
  };

  // 이미지 업로드
  const [pictures, setPictures] = useState([]);
  const [imgUrl, setImgurl] = useState('');
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const [currentPhotofile, setCurrentPhotofile] = useState(null);

  //미리보기
  const onSelectProfilePhoto = (event) => {
    if (!event.target.files) return;

    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      const base64 = fileReader.result;
      if (!base64) return;
      setPreviewPhoto(base64.toString());
    };

    if (file) fileReader.readAsDataURL(file);

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
        console.error(err.response);
      });
  }

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  else
    return (
      <ThemeProvider theme={myTheme}>
        <div>
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid container xs={4} className={classes.center}>
              <div>
                <h1>개인정보</h1>
                <form className={classes.form} noValidate>
                  {/* 이미지 업로드 */}
                  <Grid item xs={4}>
                    {profileimgPath != "" ? (
                      <ReactRoundedImage
                        style={{ zIndex: "1" }}
                        image={previewPhoto || profileimgPath}
                        roundedSize="0"
                        imageWidth="300"
                        imageHeight="300"
                      />
                    ) : (
                        <ReactRoundedImage
                          image={"/Image/defaultProfile.png"}
                          roundedSize="0"
                          imageWidth="300"
                          imageHeight="300"
                        />
                      )}
                  </Grid>
                  <br />
                  <input type="file" onChange={onSelectProfilePhoto} />
                </form>
              </div>
            </Grid>

            <Grid container xs={8}>
              <div className={classes.paper}>
                <form className={classes.form} noValidate autoComplete="off">
                  {/* 닉네임 */}
                  <div>
                    <Grid container>
                      <Grid container md={12}>
                        <Grid
                          container
                          xs={false}
                          md={3}
                          alignItems="center"
                          className={classes.laeblCenter}
                        >
                          <label style={{ fontSize: 15 }}>닉네임</label>
                        </Grid>
                        <Grid container item xs={12} md={8}>
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="nickname"
                            value={nickname}
                            name="nickname"
                            autoFocus
                            onChange={handleNicknameChange}
                          />
                          {nickError && (
                            <div
                              style={{
                                color: '#ff7761',
                                display: 'flex',
                                justifyContent: 'flex-end',
                              }}
                            >
                              5자 이내로 표현해주세요!
                            </div>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>

                  {/* 이메일 */}
                  <div>
                    <Grid item>
                      <Grid container>
                        <Grid
                          container
                          item
                          xs={false}
                          md={3}
                          alignItems="center"
                          className={classes.laeblCenter}
                        >
                          <label style={{ fontSize: 15 }}>이메일</label>
                        </Grid>
                        <Grid container item xs={12} md={8}>
                          <TextField
                            variant="outlined"
                            margin="normal"
                            disabled
                            fullWidth
                            id="email"
                            value={email}
                            name="email"
                            autoComplete="email"
                            autoFocus
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>

                  <Divider />

                  {/* 한줄 소개 */}
                  <div>
                    <Grid item>
                      <Grid container>
                        <Grid
                          container
                          item
                          xs={false}
                          md={3}
                          alignItems="center"
                          className={classes.laeblCenter}
                        >
                          <label style={{ fontSize: 15 }}>한줄소개</label>
                        </Grid>
                        <Grid container item xs={12} md={8}>
                          {desc === null ? (
                            <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="desc"
                              label="자기을 표현해주세요!"
                              value={desc}
                              name="desc"
                              onChange={handleDescChange}
                              autoFocus
                            />
                          ) : (
                              <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="desc"
                                value={desc}
                                name="desc"
                                onChange={handleDescChange}
                                autoFocus
                              />
                            )}
                          {descError && (
                            <div
                              style={{
                                color: '#ff7761',
                                display: 'flex',
                                justifyContent: 'flex-end',
                              }}
                            >
                              20자 이내로 표현해주세요!
                            </div>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                  <Divider />

                  {/* 새 비밀번호 */}
                  <div>
                    <Grid item>
                      <Grid container>
                        <Grid
                          container
                          item
                          xs={false}
                          md={3}
                          alignItems="center"
                          className={classes.laeblCenter}
                        >
                          <label style={{ fontSize: 15 }}>새 비밀번호</label>
                        </Grid>
                        <Grid container item xs={12} md={8}>
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="password"
                            id="password"
                            defaultValue={password}
                            label="새 비밀번호"
                            name="password"
                            onChange={handlePasswordChange}
                            autoFocus
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                  {/* 비밀번호 확인 */}
                  <div>
                    <Grid item>
                      <Grid container>
                        <Grid
                          container
                          item
                          xs={false}
                          md={3}
                          alignItems="center"
                          className={classes.laeblCenter}
                        >
                          <label style={{ fontSize: 15 }}>비밀번호 확인</label>
                        </Grid>
                        <Grid container item xs={12} md={8}>
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="passwordCheck"
                            label="비밀번호 확인"
                            type="password"
                            defaultValue={passwordCheck}
                            name="passwordCheck"
                            onChange={handlePasswordCheckChange}
                            autoFocus
                          />
                          {passwordError && (
                            <div
                              style={{
                                color: '#ff7761',
                                display: 'flex',
                                justifyContent: 'flex-end',
                              }}
                            >
                              비밀번호가 일치하지 않습니다.
                            </div>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>

                  <hr />
                  {/* Button */}
                  {/* TODO: 버튼 색깔 바꾸기 */}
                  <div>
                    <Grid item>
                      <Grid container justify="flex-end">
                        <Grid container item xs={4} md={4} justify="center" />
                        <Grid container item xs={2} md={2} className={classes.buttonMargin}>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                          >
                            취소
                          </Button>
                        </Grid>

                        <Grid container item xs={3} md={3} className={classes.buttonMargin}>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={updateDesc}
                          >
                            저장
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  paper: {
    // margin: theme.spacing(0, 10, 8, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '100%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    // width: '40%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontWeight: 'bold',
    fontSize: '1.2em',
    backgroundColor: '#ff521b',
    color: 'white',
    fontFamily: 'KOTRA_BOLD-Bold',
  },
  rowStyle: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '2%',
    fontSize: '14px',
  },
  laeblCenter: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
  },
  buttonMargin: {
    margin: theme.spacing(0, 3, 0, 0),
  },
  buttonPosition: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  center: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default Info;
