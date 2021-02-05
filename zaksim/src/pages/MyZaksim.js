import React from 'react';
import IngList from '../MyZaksim/IngList';
import DoneList from '../MyZaksim/DoneList';
import WishList from '../MyZaksim/WishList';
import Calendar from '../MyZaksim/Calendar';
import Badge from '../MyZaksim/Badge';
import FixedItem from '../TotalPage/FixedItem';
import Footer from '../Fixed/Footer';

const MyZaksim = () => {
  return (
    <div>
      <FixedItem></FixedItem>
      <Calendar></Calendar>
      <Badge></Badge>
      <IngList></IngList>
      <DoneList></DoneList>
      <WishList></WishList>
      <Footer></Footer>
    </div>
  );
};

export default MyZaksim;
