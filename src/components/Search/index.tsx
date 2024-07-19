'use client'

import React, { useState } from 'react';
import styles from './Filter.module.css';

const Filter = () => {
  const [activeTab, setActiveTab] = useState('ROUND TRIP');
  const [destination, setDestination] = useState('');
  const [from, setFrom] = useState('');
  const [date, setDate] = useState('');
  const [cabin, setCabin] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', { activeTab, destination, from, date, cabin });
    // Add your form submission logic here
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.tripType}>
        {['ROUND TRIP', 'ONE WAY', 'MULTI CITY'].map((type) => (
          <button
            key={type}
            className={activeTab === type ? styles.active : ''}
            onClick={() => setActiveTab(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.filterFields}>
        <div className={styles.field}>
          <label htmlFor="destination">WHERE?</label>
          <input
            id="destination"
            type="text"
            placeholder="Your Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="from">FROM</label>
          <input
            id="from"
            type="text"
            placeholder="Departure Airport"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="date">DATE</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="cabin">CABIN</label>
          <select
            id="cabin"
            value={cabin}
            onChange={(e) => setCabin(e.target.value)}
          >
            <option value="">Select Cabin</option>
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>&#x2192;</button>
      </form>
      <div className={styles.extraOptions}>
        <button>Check-in</button>
        <button>Flight Status</button>
        <button>Baggage Info</button>
      </div>
    </div>
  );
};

export default Filter;