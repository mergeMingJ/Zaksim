import React, { useEffect, useState } from 'react';
import Category from './Category';
import IntroLogin from './IntroLogin';
import RecommandCard from './RecommandCard';
import Best from './Best';
import http from '../common/axios/index'


export default function Logined() {

  const [messageData, setMessageData] = useState([]);


  useEffect(() => {
    let userId = window.localStorage.getItem('userId');
    let params = {
      userId: window.localStorage.getItem("userId"),
    };

    http.get('/user/notice', { params }).then((res) => {
      if (res.data.data == 'success') {
        // console.log(res.data)
        setMessageData(res.data.object);
      }
    })
  }, []);
  // console.log(messageData)

  {
    messageData.length !== 0 ? window.localStorage.setItem('alarm', messageData.length)
      : window.localStorage.getItem('alarm')
  }


  return (
    <div>
      <IntroLogin />
      <Category />
      <RecommandCard />
      <Best />
    </div>
  );
}
