import React, { useEffect } from 'react';
import Footer from '../Fixed/Footer';
import ChallengeTitle from '../Detail/ChallengeTitle';
import ChallengeTab from '../Detail/ChallengeTab';
import Header from '../Fixed/Header';
import Padding from '../Fixed/Padding';

const Detail = ({ match }) => {
  // console.log(match.params)

  const [challengeId, setChallengeId] = React.useState(match.params.id);

  useEffect(() => {
    const getChallengeId = () => {
      setChallengeId(match.params.id);
    };
  }, []);

  return (
    <div>
      <Header></Header>
      <Padding></Padding>
      <ChallengeTitle challengeId={challengeId}></ChallengeTitle>
      <ChallengeTab challengeId={challengeId}></ChallengeTab>
      <Footer></Footer>
    </div>
  );
};

export default Detail;
