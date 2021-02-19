import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import ReactRoundedImage from "react-rounded-image";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { Link } from "react-router-dom";
import http from "../common/axios/index";

export default function Profile() {
  const classes = useStyles();

  const [nickname, setNick] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [profileimgPath, setProfileimgPath] = useState("");

  let params = {
    userId: window.localStorage.getItem("userId"),
  };

  // TODO: user 정보(사진, 닉네임, 메일, 한줄평) 넣어줘야함
  useEffect(() => {
    http.get("/user/info", { params }).then((res) => {
      if (res.data.data === "success") {
        // console.log(res.data.object)
        setNick(res.data.object.nickname);
        setDesc(res.data.object.desc);
        setEmail(res.data.object.email);
        setProfileimgPath(res.data.object.profileimgPath);
      }
    });
  }, []);

  // const MyProfile = "https://img7.yna.co.kr/etc/inner/KR/2020/09/01/AKR20200901064000005_01_i_P2.jpg"
  // // window.localStorage.getItem('profileimgPath')
  // const nickname = window.localStorage.getItem('nickname')
  // const email = window.localStorage.getItem('email')
  // const info = window.localStorage.getItem('desc')
  return (
    <Box className={classes.root}>
      <CardHeader
        title={nickname}
        subheader={email}
        avatar={
          <div className={classes.startPosition}>
            {profileimgPath != "" ? (
              <ReactRoundedImage
                image={profileimgPath}
                roundedSize="0"
                imageWidth="50"
                imageHeight="50"
              />
            ) : (
                <ReactRoundedImage
                  image={"/Image/defaultProfile.png"}
                  roundedSize="0"
                  imageWidth="30"
                  imageHeight="30"
                />
              )}
          </div>
        }
      />
      <div className={classes.centerPosition}>
        {desc === null ? (
          <Link
            to="/mypage"
            style={{ textDecoration: "none", color: "#3E3D3D" }}
          >
            <BorderColorIcon className={classes.iconSize} />
            {nickname} 님의 다짐을 한줄평을 넣어주세요!!
          </Link>
        ) : (
            <Typography className={classes.centerPosition}>{desc}</Typography>
          )}
      </div>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  startPosition: {
    display: "flex",
    justifyContent: "flex-start",
  },

  endPosition: {
    display: "flex",
    justifyContent: "flex-end",
  },
  centerPosition: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    width: 300,
    boxShadow: 0,
    backgroundColor: "#fef0cf",
    color: "#020122",
    fontFamily: 'KOTRA_BOLD-Bold'

  },
  iconSize: {
    width: 12,
    height: 12,
    marginRight: theme.spacing(1),
  },
}));
