import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import http from '../common/axios/index'
import Checkbox from '@material-ui/core/Checkbox';

export default function HashtagBox({ tag, handleHashtag }) {
  const classes = useStyles();
  const [hashtags, setHashtags] = useState(Object);


  useEffect(async () => {
    const res = await http.get('/challenge/hashtag');
    const arr = res.data.object.map(t => [t, false]);
    const obj = Object.fromEntries(arr);
    setHashtags(obj);
    if (tag != undefined) {
      setHashtags({ ...obj, [tag]: true });
    }
  }, []);



  const handleChange = (event) => {
    setHashtags({ ...hashtags, [event.target.name]: event.target.checked });  // checkbox
    handleHashtag({ ...hashtags, [event.target.name]: event.target.checked })
  };

  const { } = hashtags;

  const colorTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#ff521b',
      },
    },
    typography: {
      fontFamily: 'KOTRA_GOTHIC',
      color: '#3E3D3D',
      fontSize: '25px'
    }
  });
  const [myTheme, setMyTheme] = useState(colorTheme);

  return (
    <ThemeProvider theme={myTheme}>
      <Container maxWidth="md" align="center" style={{ marginBottom: '30px' }}>
        <Paper className={classes.paper}>
          <FormControl component="fieldset" className={classes.margin}>
            <FormLabel component="legend"></FormLabel>
            <FormGroup>
              {Object.entries(hashtags).map(([t, c]) => (
                <FormControlLabel
                  control={<Checkbox checked={c} onChange={handleChange} name={t} />}
                  label={t}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Paper>

      </Container >

    </ThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: theme.spacing(2),
  },

  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    borderRadius: '12px',
    boxShadow: 1,
    backgroundColor: 'rgba(253,194,62,0.1)',
    overflowY: 'scroll',
  },
  margin: {
    margin: theme.spacing(2, 0),
    height: '230px',
  },
}));