import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: '30px 0',
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
    color: '#888',
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      Copyright © MergeTech {new Date().getFullYear()} All Rights Reserved.
    </div>
  );
}
