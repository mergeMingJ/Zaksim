import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';


export default function IntroVideo() {
  const classes = useStyles();

  const [isPlaying, setIsPlaying] = useState(true);
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    })
  }, [])

  return (
    <div className={classes.margin} onClick={() => { setIsPlaying(!isPlaying) }}>
      <ReactPlayer
        url='/introvideo.mp4'
        loop
        muted
        playing={isPlaying}
        className={classes.size}
        width='100%'
        height={width > 900 ? height - 150 : '100%'}
      />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  margin: {
    backgroundColor: "black"
  }
}));

