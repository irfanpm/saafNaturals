import { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import styles from './styles.module.scss';

const VideoIntro = ({ url }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => {
      if (prevPlayVideo) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      return !prevPlayVideo;
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (playVideo) {
        videoRef.current.play();
      }
    }
  }, [url, playVideo]);

  return (
    <div className={styles.container_video} id='video'>
      <video
        ref={videoRef}
        loop
        controls={false}
        muted
        style={{ width: '100%', height: 'auto' }} // Add styles to ensure responsive video
      >
        <source src={url?.metadata?.video?.imgix_url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={cn(styles.video_overlay, 'flex_center')}>
        <button
          className={cn(styles.video_overlay_circle, 'flex_center')}
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill className={styles.video_icon} />
          ) : (
            <BsFillPlayFill className={styles.video_icon} />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoIntro;
