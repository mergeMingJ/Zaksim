import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import FixedItem from '../TotalPage/FixedItem';
import PostList from '../Community/PostList'

const Community = () => {
  return (
    <div>
      <FixedItem></FixedItem>
      <PostList></PostList>
    </div>
  );
};

export default Community;