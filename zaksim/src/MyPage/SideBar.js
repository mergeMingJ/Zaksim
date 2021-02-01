import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";



function SideBar({onSelectMode}) {
  const selectInfo = () => {
    onSelectMode('Info');
  };
  const selectQuit = () => {
    onSelectMode('Quit');
  };
  return (
    <div>
      <ListItem 
        button
        onClick={selectInfo}
        >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="나의 정보" />
      </ListItem>
      <ListItem 
        button
        onClick={selectQuit}
      >
        <ListItemIcon>
          <SentimentVeryDissatisfiedIcon />
        </ListItemIcon>
        <ListItemText primary="회원 탈퇴" />
      </ListItem>
      <Link to='/' style={{textDecoration: 'none', color: "black"}}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="메인페이지로 가기" />
        </ListItem>
      </Link>

    </div>
  );

}

export default SideBar;
