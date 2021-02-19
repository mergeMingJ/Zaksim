import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Container from '@material-ui/core/Container';
import ChallengeInfo from '../Detail/ChallengeInfo';
import ChallengeFeed from '../Detail/ChallengeFeed';
import ChallengeRanking from '../Detail/ChallengeRanking';
export default function ChallengeTab({ challengeId }) {
  const classes = useStyles();
  const [value, setValue] = React.useState('1'); // default: 소개


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <TabContext value={value}>
          <AppBar elevation={0} position="static" >
            <TabList
              onChange={handleChange}
              aria-label="simple tabs example"
              style={{ backgroundColor: 'white', color: '#ff521b' }}
              centered
            >
              <Tab label="소개" value="1" style={{ fontFamily: 'KOTRA_BOLD-Bold' }} />
              <Tab label="인증후기" value="2" style={{ fontFamily: 'KOTRA_BOLD-Bold' }} />
              <Tab label="랭킹" value="3" style={{ fontFamily: 'KOTRA_BOLD-Bold' }} />
            </TabList>
          </AppBar>
          <TabPanel value="1">
            <ChallengeInfo challengeId={challengeId}></ChallengeInfo>
          </TabPanel>
          <TabPanel value="2">
            <ChallengeFeed challengeId={challengeId}></ChallengeFeed>
          </TabPanel>
          <TabPanel value="3">
            <ChallengeRanking challengeId={challengeId}></ChallengeRanking>
          </TabPanel>
        </TabContext>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
