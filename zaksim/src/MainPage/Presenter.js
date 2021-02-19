import React, { useEffect, useState } from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import { makeStyles } from "@material-ui/core/styles";
import ReactRoundedImage from "react-rounded-image";
import { Alien, AlignCenter } from "tabler-icons-react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";


export default function Presenter() {
  const classes = useStyles();

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());


  const colorTheme = createMuiTheme({
    typography: {
      fontFamily: "WandohopeB"
    }
  });
  const [myTheme, setMyTheme] = React.useState(colorTheme);


  return (
    <ThemeProvider theme={myTheme}>

      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "3em" }}>
              <div style={{ textAlign: "left" }}>
                머지텍은
              <br />
                <span className={classes.underline}>
                  서로 다른 5명의 개성
              </span>을 <br />
              Merge합니다
            </div>
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "2.5em" }}>
              머지텍이 만든 목표 관리 서비스
          </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <img src="/Image/logo.png" />
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "3em" }}>구성원 소개</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <div className={classes.member}>
            <span style={{ fontSize: "2em" }}>
              <Animator animation={MoveIn(-1000, 0)}>
                <div style={{ display: "inline-block" }}>
                  <ReactRoundedImage
                    image={"/Image/aboutcm.png"}
                    roundedSize="0"
                    imageWidth="100"
                    imageHeight="100"
                  />
                </div>
                <div style={{ display: "inline-block" }}>
                  노천명(BE) CTO GP천명
              </div>
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>
                <div style={{ display: "inline-block" }}>
                  백민주(FE) CEO 머지민주
              </div>
                <div style={{ display: "inline-block" }}>
                  <ReactRoundedImage
                    image={"/Image/aboutmj.png"}
                    roundedSize="0"
                    imageWidth="100"
                    imageHeight="100"
                  />
                </div>
              </Animator>
              <Animator animation={MoveIn(-1000, 0)}>
                <div style={{ display: "inline-block" }}>
                  <ReactRoundedImage
                    image={"/Image/aboutsd.png"}
                    roundedSize="0"
                    imageWidth="100"
                    imageHeight="100"
                  />
                </div>
                <div style={{ display: "inline-block" }}>
                  김상돈(FE) 개발자 낭만상돈
              </div>
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>
                <div style={{ display: "inline-block" }}>
                  김예슬(FE) 개발자 예스예슬
              </div>
                <div style={{ display: "inline-block" }}>
                  <ReactRoundedImage
                    image={"/Image/aboutys.png"}
                    roundedSize="0"
                    imageWidth="100"
                    imageHeight="100"
                  />
                </div>
              </Animator>
              <Animator animation={MoveIn(-1000, 0)}>
                {" "}
                <div style={{ display: "inline-block" }}>
                  <ReactRoundedImage
                    image={"/Image/aboutsb.png"}
                    roundedSize="0"
                    imageWidth="100"
                    imageHeight="100"
                  />
                </div>
                <div style={{ display: "inline-block" }}>
                  박수빈(BE) 개발자 물콩수빈
              </div>
              </Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={5}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "3em" }}>모두 함께 작심해요 !</span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </ThemeProvider>

  );
}

const useStyles = makeStyles((theme) => ({
  underline: {
    background: "linear-gradient(180deg,rgba(255,255,255,0) 50%, #FFD0AE 50%)",
  },
  member: {
    margin: "150px",
    display: 'flex',
    justifyContent: 'center'
  },

}));
