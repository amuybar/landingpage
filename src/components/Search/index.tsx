
import styles from './FlightSearch.module.css';

export default function FlightSearch() {
  return (
    <div className={styles.searchContainer}>
      
      <div className={styles.searchBox}>
        <div className={styles.inputGroup}>
          <select className={styles.input}>
            <option>Return</option>
            <option>One way</option>
            <option>Multi-city</option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Where from?" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Where to?" className={styles.input} />
        </div>
        <button className={styles.searchButton}>Search flights</button>
      </div>
    </div>
  );
}
