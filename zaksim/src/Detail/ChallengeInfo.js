import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

const useStyles = makeStyles((theme) => ({
  contentGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  tableHeader: {
    width: 100,
    fontWeight: "bold",
    textAlign: "center",
  },
  summaryContent: {
    padding: theme.spacing(1, 3, 1),
    backgroundColor: "#fdc23e",
    fontSize: "1rem",
    fontWeight: "bold",
    textAlign: "center",
  },
  opacityBlack: {
    backgroundColor: "#ff7761",
    opacity: 0.5,
  },
  button: {
    width: "180px",
    height: "45px",
    fontWeight: "bold",
    fontSize: "1.2em",
    backgroundColor: "#ff7761",
    color: "white",
    marginTop: theme.spacing(2),
  },
}));

var windowObjectReference = null; // global variable

var windowFeatures =
  "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

const openFFPromotionPopup = () => {
  if (windowObjectReference == null || windowObjectReference.closed) {
    /* if the pointer to the window object in memory does not exist
     or if such pointer exists but the window was closed */

    windowObjectReference = window.open(
      "/Live",
      "OnAir",
      "resizable,scrollbars,status"
    );
    /* then create it. The new window will be created and
       will be brought on top of any other window. */
  } else {
    windowObjectReference.focus();
    /* else the window reference must exist and the window
       is not closed; therefore, we can bring it back on top of any other
       window with the focus() method. There would be no need to re-create
       the window or to reload the referenced resource. */
  }
};

export default function ChallengeInfo() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.contentGrid}>
      <div className={classes.summaryContent}>
        안녕하세요. 100일동안 물마시기 습관 기르기에 함께 도전합시다 ^^ 건강한
        삶을 살기 위해 500mL 물마시기에 도전합니다!
      </div>
      <div className={classes.contentGrid}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableHeader}>인증미션</TableCell>
              <TableCell align="left">
                매일 500mL 이상 물을 마시고 날짜가 찍히도록 인증
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableHeader}>인증방법</TableCell>
              <TableCell align="left">
                매일 500mL 이상 물마시기 인증(날짜가 찍히도록) 텀블러, 컵,
                페트병, 보온병 모두 모두 좋아요~ 오늘 마실 물 또는 다 마신 병을
                자유롭게 인증해주세요!(커피,음료,술 X)
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
              <TableCell align="left">
                물 마시는 생활습관을 기르고 싶으신 모든 분들!
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableHeader}>해시태그</TableCell>
              <TableCell align="left">
                물 마시는 생활습관을 기르고 싶으신 모든 분들!
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div align="center">
          <Button
            className={classes.button}
            variant="contained"
            startIcon={<AddBoxIcon />}
          >
            작심하기
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            startIcon={<DoneOutlineIcon />}
          >
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
        <hr />
      </div>
    </Container>
  );
}
