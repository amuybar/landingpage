import Image from 'next/image';
import styles from './Landing.module.css';
import dynamic from 'next/dynamic';

const FlightSearch = dynamic(() => import('../Search'));

export default function Landing() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/plane.jpg"
              alt="Plane Landing"
              width={300}
              height={250}
              className={styles.animatedImage}
              loading="lazy" 
            />
          </div>
        </div>
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
