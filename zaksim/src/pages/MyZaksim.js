import React from 'react';
import IngList from '../MyZaksim/IngList';
import DoneList from '../MyZaksim/DoneList';
import WishList from '../MyZaksim/WishList';
import Calendar from '../MyZaksim/Calendar';
import Footer from '../Fixed/Footer';

const MyZaksim = () => {
  return (
    <div>
      <h2>나의 작심</h2>
      <Calendar></Calendar>
      <IngList></IngList>
      <DoneList></DoneList>
      <WishList></WishList>
      <Footer></Footer>
    </div>
  );
};

export default MyZaksim;
