import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SearchBar from './SearchBar';
import Sorted from './Sorted';
import HashtagBox from './HashtagBox';
import TotalChallenge from './TotalChallenge';
import http from '../common/axios/index';


const TotalCategory = ({ title, tag }) => {
  const classes = useStyles();
  const [sorting, setSorting] = useState('최신순');
  const [hashtag, setHashtag] = useState(Object);
  const [keyword, setKeyword] = useState('');
  const [challengeList, setChallengeList] = useState([]);

  const handleHashtag = (res) => {
    setHashtag(res);
    handleSearch(sorting, res, keyword);
  }

  const handleSorting = (res) => {
    setSorting(res)
    handleSearch(res, hashtag, keyword)
  }

  const handleKeyword = (res) => {
    setKeyword(res);
  }

  const handleSearch = (s, h, k) => {
    const searchTags = Object.entries(h).filter(([t, c]) => {
      return c
    })
    const valueTags = searchTags.map(t => t[0])
    const textTags = valueTags.join(',');

    http.get(`/challenge/search?hashtag=${textTags}&sort=${s}&title=${k}`).then((res) => {
      setChallengeList(res.data.object);
    })
      .catch((err) => {
        setChallengeList([]);
        // console.log(err);
      })

  }

  useEffect(() => {
    if (title === undefined && tag === undefined) {
      http.get(`/challenge/search?hashtag=&sort=${sorting}&title=`).then((res) => {
        if (res.data.data === 'success') {
          setChallengeList(res.data.object)
        }
      })
    } else if (tag === undefined) {
      http.get(`/challenge/search?hashtag=&sort=${sorting}&title=${title}`).then((res) => {
        if (res.data.data === 'success') {
          setChallengeList(res.data.object)
        }
      })
      setKeyword(title);
    } else {
      http.get(`/challenge/search?hashtag=${tag}&sort=${sorting}&title=${keyword}`).then((res) => {
        if (res.data.data === 'success') {
          setChallengeList(res.data.object)
          setHashtag(tag);
        }
      })
    }

  }, [])

  return (
    <Container maxWidth="md" align="center" style={{ marginBottom: '50px' }}>
      <Paper className={classes.paper} >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <SearchBar
              className={classes.margin}
              handleKeyword={handleKeyword}
              handleSearch={handleSearch}
              sorting={sorting}
              hashtag={hashtag}
              title={title}
            />
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={3} className={classes.start}>
              <Sorted handleSorting={handleSorting} />
              <HashtagBox handleHashtag={handleHashtag} tag={tag} />
            </Grid>
            <Grid item xs={9}>
              <TotalChallenge challengeList={challengeList} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>


  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: 'center',
    // paddingBottom: '10%',
    backgroundColor: '#fcfcf7'
  },
  start: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    // marginLeft: theme.spacing(2)
  },
  margin: {
    marginTop: theme.spacing(10)
  },


}));

export default TotalCategory
