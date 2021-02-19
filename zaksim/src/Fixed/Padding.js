import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Padding = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}></div>
    </div>
  );
};

export default Padding;

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(17),
  },
}));
