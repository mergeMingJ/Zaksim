import React from 'react';
import Footer from '../Fixed/Footer';
import Header from '../Fixed/Header';
import FullScreen from '../MainPage/FullScreen';

export default function Home() {
  // const [isLogin, setIsLogin] = React.useState(0);

  const isLogin = window.localStorage.getItem('isLogin');
  return (
    <div>
      <Header />
      <FullScreen />
      <Footer />
    </div>
  );
}
