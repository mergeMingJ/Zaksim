import React from 'react';
import FixedItem from '../TotalPage/FixedItem';
import Footer from '../Fixed/Footer';
import ChallengeTitle from '../Detail/ChallengeTitle';
import ChallengeTab from '../Detail/ChallengeTab';

const Detail = () => {
  return (
    <div>
      <FixedItem></FixedItem>
      <ChallengeTitle></ChallengeTitle>
      <ChallengeTab></ChallengeTab>
      <Footer></Footer>
    </div>
  );
};

export default Detail;
