import React, { useEffect, useState } from 'react';
import IngList from '../MyZaksim/IngList';
import DoneList from '../MyZaksim/DoneList';
import WishList from '../MyZaksim/WishList';
import Calendar from '../MyZaksim/Calendar';
import Footer from '../Fixed/Footer';
import Header from '../Fixed/Header';
import http from '../common/axios/index';
import Padding from '../Fixed/Padding';
import Loading from '../Fixed/Loading';

const MyZaksim = () => {

  const [userId, setUserId] = React.useState(window.localStorage.getItem('userId'));

  let params = {
    userId: userId,
  };

  const [loading, setLoading] = React.useState(true);
  const [ingchallenges, setIng] = React.useState([]);
  const [donechallenges, setDone] = React.useState([]);
  const [wishchallenges, setWish] = React.useState([]);
  const [challengeData, setChallengeData] = React.useState([]);

  useEffect(() => {
    http.get('/challenge/ing', { params }).then((res) => setIng(res.data.object));
    http.get('/challenge/done', { params }).then((res) => setDone(res.data.object));
    http.get('/challenge/wish', { params }).then((res) => setWish(res.data.object));
    http.get('/feed/calander', { params }).then((res) => setChallengeData(res.data.object));
    setLoading(false);
  }, []);

  // console.log(ingchallenges);
  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <div style={{ color: '#3E3D3D' }}>
      <Header></Header>
      <Padding></Padding>
      <Calendar challengeData={challengeData}></Calendar>
      {/* <Badge></Badge> */}
      {ingchallenges.length === 0 ? <div /> : <IngList ingchallenges={ingchallenges}></IngList>}
      {donechallenges.length === 0 ? (
        <div />
      ) : (
          <DoneList donechallenges={donechallenges}></DoneList>
        )}
      {wishchallenges.length === 0 ? (
        <div />
      ) : (
          <WishList wishchallenges={wishchallenges}></WishList>
        )}
      <Footer></Footer>
    </div>
  );
};

export default MyZaksim;
