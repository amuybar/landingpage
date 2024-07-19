'use client'

import React, { useState } from 'react';
import styles from './CarrierPage.module.css';
import Link from 'next/link';

// Define types for the aircraft data
interface Aircraft {
  id: number;
  passengers: number;
  name: string;
  subtitle: string;
  icon: string;
}

// Define props for AircraftCard
interface AircraftCardProps {
  passengers: number;
  name: string;
  subtitle: string;
  icon: string;
}

// Define props for MoreButton
interface MoreButtonProps {
  onClick: () => void;
}

// Define the CarrierPage component
const CarrierPage: React.FC = () => {
  const [aircrafts, setAircrafts] = useState<Aircraft[]>([
    { id: 1, passengers: 13, name: 'Bombardier', subtitle: 'Global 6000', icon: '✈️' },
    { id: 2, passengers: 180, name: 'Airbus', subtitle: 'A320', icon: '🛩️' },
    { id: 3, passengers: 366, name: 'Boeing', subtitle: '777-300ER', icon: '🛫' },
    { id: 4, passengers: 8, name: 'Cessna', subtitle: 'Citation XLS', icon: '🛪' },
    { id: 5, passengers: 100, name: 'Embraer', subtitle: 'E175', icon: '🛬' },
    { id: 6, passengers: 44, name: 'ATR', subtitle: '42-600', icon: '✈️' },
  ]);

  const loadMore = () => {
    // In a real application, this would fetch more data from an API
    console.log('Loading more aircraft...');
  };

  return (
    <div className={styles.container}>
      <TopBar />
      <SearchSection />
      <AircraftGrid aircrafts={aircrafts} />
      <MoreButton onClick={loadMore} />
    </div>
  );
};

// Define the TopBar component
const TopBar: React.FC = () => {
  return (
    <div className={styles.topBar}>
      <Link href='/' className={styles.backButton}>← Back</Link>
      <div className={styles.pathIndicator}>Home / Carriers</div>
    </div>
  );
};

// Define the SearchSection component
const SearchSection: React.FC = () => {
  return (
    <div className={styles.searchSection}>
      <input type="text" placeholder="Search aircraft..." />
      <button className={styles.searchButton}>Search</button>
    </div>
  );
};

// Define the AircraftGrid component
const AircraftGrid: React.FC<{ aircrafts: Aircraft[] }> = ({ aircrafts }) => {
  return (
    <div className={styles.aircraftGrid}>
      {aircrafts.map((aircraft) => (
        <AircraftCard key={aircraft.id} {...aircraft} />
      ))}
    </div>
  );
};

// Define the AircraftCard component
const AircraftCard: React.FC<AircraftCardProps> = ({ passengers, name, subtitle, icon }) => {
  return (
    <div className={styles.aircraftCard}>
      <div className={styles.passengerCount}>{passengers}</div>
      <div className={styles.aircraftIcon}>{icon}</div>
      <div className={styles.aircraftInfo}>
        <h3>{name}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

// Define the MoreButton component
const MoreButton: React.FC<MoreButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.moreButton} onClick={onClick}>
      Load More
    </button>
  );
};

export default CarrierPage;
