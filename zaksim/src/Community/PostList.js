import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PostTable from './PostTable';
import PostDetail from './PostDetail';
import Posting from './Posting';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
}));

export default function PostList() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered style={{backgroundColor:'white', color:'black'}}>
          <Tab label="전체" {...a11yProps(0)} />
          <Tab label="운동" {...a11yProps(1)} />
          <Tab label="공부" {...a11yProps(2)} />
          <Tab label="취미" {...a11yProps(3)} />
          <Tab label="기타" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        전체 리스트
        <PostTable></PostTable>
      </TabPanel>
      <TabPanel value={value} index={1}>
        운동 리스트
      </TabPanel>
      <TabPanel value={value} index={2}>
        공부 리스트
      </TabPanel>
      <TabPanel value={value} index={3}>
        취미 리스트
      </TabPanel>
      <TabPanel value={value} index={4}>
        기타 리스트
      </TabPanel>
    </div>
  );
}
