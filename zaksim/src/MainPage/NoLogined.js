import React from 'react';
import Category from './Category';
import IntroVideo from './IntroVideo'
import Best from './Best';
import Recent from './Recent';
import Header from '../Fixed/Header'
import Footer from '../Fixed/Footer'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


export default function NoLogined() {

  // 애니메이션
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div>
      <IntroVideo />
      <Category />
      <Best />
      <Recent />

    </div>
  );
}