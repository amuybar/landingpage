'use client'

import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from './Explore.module.css';

// Type for destination
type Destination = {
  lat: number;
  lng: number;
};

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 0,
  lng: 0
};

const Explore: React.FC = () => {
  const [origin, setOrigin] = useState<string>('');
  const [tripType, setTripType] = useState<string>('Roundtrip');
  const [dates, setDates] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [error, setError] = useState<string>('');

  const handleSearch = async () => {
    setError('');
    try {
      // In a real application, you would call an API here
      // This is a mock implementation
      const response: Destination[] = await mockSearchAPI(origin, tripType, dates, maxPrice);
      if (response.length === 0) {
        setError('Sorry, no results have been found. Please enter a different origin location or expand your search area.');
      } else {
        setDestinations(response);
      }
    } catch (err) {
      setError('An error occurred while searching. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore destinations</h1>
      <p className={styles.subtitle}>Not sure where to go? Use our interactive map to find flights to great destinations.</p>
      
      {error && <div className={styles.error}>{error}</div>}
      
      <div className={styles.filter}>
        <input
          type="text"
          placeholder="Flying from"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className={styles.input}
        />
        <select 
          value={tripType} 
          onChange={(e) => setTripType(e.target.value)}
          className={styles.select}
        >
          <option value="Roundtrip">Roundtrip</option>
          <option value="One-way">One-way</option>
        </select>
        <input
          type="text"
          placeholder="Flexible dates"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className={styles.input}
        />
        <button onClick={handleSearch} className={styles.button}>Search</button>
      </div>

      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={2}
        >
          {destinations.map((dest, index) => (
            <Marker key={index} position={{ lat: dest.lat, lng: dest.lng }} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

// Mock API function
const mockSearchAPI = (origin: string, tripType: string, dates: string, maxPrice: number): Promise<Destination[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulating API response
      const mockDestinations: Destination[] = [
        { lat: 48.8566, lng: 2.3522 }, // Paris
        { lat: 40.7128, lng: -74.0060 }, // New York
        { lat: 35.6762, lng: 139.6503 }, // Tokyo
      ];
      resolve(mockDestinations);
    }, 1000);
  });
};

export default Explore;
