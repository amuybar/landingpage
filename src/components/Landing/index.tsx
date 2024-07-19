'use client'

import { useRef, useEffect } from 'react';
import styles from './Landing.module.css';
import dynamic from 'next/dynamic';

const FlightSearch = dynamic(() => import('../Search'));

export default function Landing() {
  const videoRef = useRef<HTMLVideoElement>(null);


  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.1; 
    }
  }, []);
  return (
    <div className={styles.main}>
      <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className={styles.video}
    >
        <source src="/asset/e6e9a818-29af-4b30-bd91-4d9931a05394.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.container}>
        <div className={styles.contentSection}>
          <h1 className={styles.title}>Welcome to KQAirline!</h1>
          <h2 className={styles.description}>
            Experience the best in air travel with KQAirline.
          </h2>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Book Ticket</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
        </div>
      </div>
      <FlightSearch />
    </div>
  );
}
