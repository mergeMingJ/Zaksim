import React from 'react';
import IntroLogout from '../MainPage/IntroLogout';
import Category from '../MainPage/Category';
import RecommandCard from '../MainPage/RecommandCard';
import Best from '../MainPage/Best';
import { Box, Container, Typography } from '@material-ui/core';
import FixedItem from '../TotalPage/FixedItem';

const Home = () => {
  return (
    <div>
      <FixedItem></FixedItem>
      <IntroLogout></IntroLogout>
      <Category></Category>
      <Best></Best>
      <RecommandCard></RecommandCard>
    </div>
  );
};

export default Home;
