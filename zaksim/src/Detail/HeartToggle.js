import React from 'react';
import { makeStyles } from '@material-ui/core';
import EmptyHeart from '@material-ui/icons/FavoriteBorder';
import FullHeart from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

export default function HeartToggle({ selected }) {
  const classes = useStyles();

  return (
    <IconButton selected={selected} onClick={!selected}>
      {selected === true ? <FullHeart /> : <EmptyHeart />}
    </IconButton>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {},
}));
