import { React, useState } from "react";
import { makeStyles, Dialog } from "@material-ui/core";
import Rodal from "rodal";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import "rodal/lib/rodal.css";
import ImageUpload from "./ImageUpload";
import http from "../common/axios/index";

export default function ModalFeedForm({ challengeId, open, onClose }) {
  const classes = useStyles();
  const history = useHistory();

  const [content, setContent] = useState('');
  const onContentHandler = (e) => {
    setContent(e.target.value);
  };

  const onCreate = (e) => {
    e.preventDefault();
    let checkfeed = {
      challengeId: challengeId,
      title: '',
      userId: window.localStorage.getItem('userId'),
      content: content,
      imgPath: imgUrl
    };

    http.post('/feed/insert', checkfeed).then((res) => {
      if (res.data.data == 'success') {
        onClose();
        // console.log(res);
      } else {
        alert('인증글 등록에 실패했습니다!');
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

  //////////

  return (
    <div open={open} onClose={onClose}>
      <Rodal customStyles={{ height: "25rem" }} visible={open} onClose={onClose}>
        <div className={classes.title}>
          {window.localStorage.getItem("nickname")} 님의 인증
        </div>

        <form className={classes.form} noValidate>
          <TextField
            className={classes.inputmargin}
            fullWidth
            id="content"
            label="나누고 싶은 마음"
            multiline
            rows={4}
            variant="outlined"
            onChange={onContentHandler}
            autoFocus
          />
          {/* 이미지 업로드 */}
          <input type="file" onChange={onSelectImgPath} />
        </form>
        <Grid container className={classes.buttonPosition} justify="center">
          <Button
            type="submit"
            onClick={onClose}
            size="small"
            variant="outlined"
            color="primary"
            className={classes.buttonStyle}
            onClick={onCreate}
          >
            확인
          </Button>
          <Button
            onClick={onClose}
            size="small"
            variant="outlined"
            color="secondary"
            className={classes.buttonStyle}
          >
            취소
          </Button>
        </Grid>
      </Rodal>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#274555",
    padding: theme.spacing(3, 0, 4),
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  buttonPosition: {
    padding: theme.spacing(4, 0, 2),
  },
  buttonStyle: {
    margin: "0px 10px 0px 10px",
  },
  form: {
    width: "90%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),

  },
  inputmargin: {
    marginBottom: theme.spacing(1),
  },
}));
