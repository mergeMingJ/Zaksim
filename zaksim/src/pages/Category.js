import React from 'react';
import Footer from '../Fixed/Footer';
import Header from '../Fixed/Header';
import CategoryTitle from '../Category/CategoryTitle';
import CategoryBest from '../Category/CategoryBest';
import CategoryList from '../Category/CategoryList';
import TotalCategory from '../Category/TotalCategory';
import HashtagBox from '../Category/HashtagBox';
import Padding from '../Fixed/Padding';

const Category = (props) => {
  const title = props.match.params.title;
  const tag = props.match.params.tag;
  return (
    <div>
      <Header></Header>
      <Padding></Padding>
      <CategoryBest></CategoryBest>
      <CategoryList></CategoryList>
      <TotalCategory title={title} tag={tag}></TotalCategory>
      <Footer></Footer>
    </div>
  );
};

export default Category;
