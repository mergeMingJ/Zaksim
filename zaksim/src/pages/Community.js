import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import PostList from '../Community/PostList';
import Header from '../Fixed/Header';
import Padding from '../Fixed/Padding';

const Community = () => {
  return (
    <div>
      <Header></Header>
      <Padding></Padding>
      <PostList></PostList>
    </div>
  );
};

export default Community;
