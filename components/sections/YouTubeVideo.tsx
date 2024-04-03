import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery';
import React from 'react';
import YouTube from 'react-youtube';
import Wrapper from '../layout/Wrapper';
import stls from '@/styles/components/sections/YouTubeVideo.module.sass'
import { IconClock } from '../icons';

const YouTubeVideo = ({ videoId }) => {

  const isMobileLayout = useBetterMediaQuery( '(max-width: 480px)')
  const isTabletLayout = useBetterMediaQuery( '(min-width: 481px) and (max-width: 768px)')

  const onError = (error) => {
    console.error('YouTube Player Error:', error);
  };

  const opts = {
    height: isTabletLayout ? '350' : isMobileLayout ? '210' : '550',
    width: '100%',
    borderRadius: '20px'
  };

  return (
    <section>
    <Wrapper>
      <h1 className={stls.title}>Знакомство с институтом</h1>
      <div className={stls.time}>
        <IconClock colorCode='#DADADA' />
        <p>Длительность 2 минуты</p>
      </div>
      
    <YouTube
      videoId={videoId}
      onError={onError}
      opts={opts}
    />
    </Wrapper>
    </section>
  );
};

export default YouTubeVideo;