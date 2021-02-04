import React from 'react';
import LiveVideo from '../Live/LiveVideo';
import NewWindow from 'react-new-window';

const Live = () => {
  return (
    <NewWindow>
      <h1> New window?</h1>
      <LiveVideo></LiveVideo>
    </NewWindow>
  );
};

export default Live;
