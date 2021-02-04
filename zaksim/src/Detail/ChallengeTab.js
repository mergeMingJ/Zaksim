import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Container from '@material-ui/core/Container';
import WishList from '../MyZaksim/WishList';
import DoneList from '../MyZaksim/DoneList';
import ChallengeInfo from '../Detail/ChallengeInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ChallengeTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1'); // default: 소개

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <TabContext value={value}>
          <AppBar position="static">
            <TabList
              onChange={handleChange}
              aria-label="simple tabs example"
              //TODO 탭바 그림자 지우기
              style={{ backgroundColor: 'white', color: 'black' }}
              centered
            >
              <Tab label="소개" value="1" />
              <Tab label="인증후기" value="2" />
              <Tab label="랭킹" value="3" />
            </TabList>
          </AppBar>
          <TabPanel value="1">
            <ChallengeInfo></ChallengeInfo>
          </TabPanel>
          <TabPanel value="2">
            <WishList></WishList>
          </TabPanel>
          <TabPanel value="3">
            <DoneList></DoneList>
          </TabPanel>
        </TabContext>
      </Container>
    </div>
  );
}
