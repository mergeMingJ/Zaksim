import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactRoundedImage from "react-rounded-image";
import Typography from "@material-ui/core/Typography";
import http from "../common/axios/index";
export default function SmallProfile({ profileopen, onClick, userId }) {
  const classes = useStyles();



  const [nickname, setNick] = useState("");
  const [profileimgPath, setProfileimgPath] = useState("");

  let params = {
    userId: Number(userId),
  };

  useEffect(() => {
    http.get("/user/info", { params }).then((res) => {
      if (res.data.data === "success") {
        // console.log(res.data)
        setNick(res.data.object.nickname);
        setProfileimgPath(res.data.object.profileimgPath);
      }
    });
  }, [userId]);

  return (
    <div onClick={onClick} className={classes.root}>
      <div className={classes.end}>
        {profileimgPath != "" ? (
          <ReactRoundedImage
            image={window.location.origin + profileimgPath}
            roundedSize="0"
            imageWidth="30"
            imageHeight="30"
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
      <Typography style={{ fontFamily: 'KOTRA_BOLD-Bold', color: '#3E3D3D', fontSize: '15px' }}
      >{nickname}</Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  end: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100",
    // margin: theme.spacing(0, 1, 0, 0),
  },
}));
