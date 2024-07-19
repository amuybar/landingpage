import React from 'react';
import styles from './DestinationPage.module.css';
import Link from 'next/link';

const DestinationPage = () => {
  return (
    <div className={styles.container}>
      <TopBar/>
      <SearchBar />
      <div className={styles.dashboardGrid}>
        <AirlinesList />
        <AirportsList />
        <AircraftTypesList />
      </div>
    </div>
  );
};

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <Link href='/' className={styles.backButton}>← Back</Link>
      <div className={styles.pathIndicator}>Home / Destinations </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Departure airport" />
      <input type="text" placeholder="All destinations" />
      <input type="date" placeholder="Date from" />
      <input type="date" placeholder="Date to" />
      <button className={styles.searchButton}>Search »</button>
    </div>
  );
};

const AirlinesList = () => {
  const airlines = [
    { name: 'American Airlines', flights: 179194, logo: '🇺🇸' },
    { name: 'Delta Air Lines', flights: 123776, logo: '🔺' },
    { name: 'United Airlines', flights: 123385, logo: '🌐' },
    { name: 'Ryanair', flights: 105184, logo: '✈️' },
    { name: 'Southwest Airlines', flights: 100720, logo: '❤️' },
  ];

  return (
    <div className={styles.listContainer}>
      <h2>Biggest airlines</h2>
      <p>Based on number of departures next month</p>
      <ul>
        {airlines.map((airline, index) => (
          <li key={index}>
            <span className={styles.logo}>{airline.logo}</span>
            <div>
              <strong>{airline.name}</strong>
              <span>{airline.flights} flights scheduled next month</span>
            </div>
          </li>
        ))}
      </ul>
      <a href="#">See the full top 100 list →</a>
    </div>
  );
};

const AirportsList = () => {
  const airports = [
    { name: 'Dallas Fort Worth (DFW)', flights: 994 },
    { name: 'Chicago Ohare (ORD)', flights: 896 },
    { name: 'The William B Hartsfield Atlanta (ATL)', flights: 892 },
    { name: 'Denver (DEN)', flights: 787 },
    { name: 'Charlotte Douglas (CLT)', flights: 737 },
  ];

  return (
    <div className={styles.listContainer}>
      <h2>Busiest airports</h2>
      <p>By scheduled departures today</p>
      <ul>
        {airports.map((airport, index) => (
          <li key={index}>
            <span className={styles.rank}>{index + 1}</span>
            <div>
              <strong>{airport.name}</strong>
              <span>{airport.flights} flights departing today</span>
            </div>
          </li>
        ))}
      </ul>
      <a href="#">See the full top 100 list →</a>
    </div>
  );
};

const AircraftTypesList = () => {
  const aircraftTypes = [
    { name: 'Airbus A31X/32X', flights: 1149677 },
    { name: 'Boeing 737', flights: 869471 },
    { name: 'Embraer 19X/17X', flights: 204344 },
    { name: 'ATR 72/42', flights: 135355 },
    { name: 'Bombardier CRJ / Challenger', flights: 105494 },
  ];

  return (
    <div className={styles.listContainer}>
      <h2>Top aircraft types</h2>
      <p>The most common aircrafts in our database</p>
      <ul>
        {aircraftTypes.map((aircraft, index) => (
          <li key={index}>
            <span className={styles.rank}>{index + 1}</span>
            <div>
              <strong>{aircraft.name}</strong>
              <span>{aircraft.flights} flights with this aircraft type next month</span>
            </div>
          </li>
        ))}
      </ul>
      <a href="#">See the full top 100 list →</a>
    </div>
  );
};

export default DestinationPage;