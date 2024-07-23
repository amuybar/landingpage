'use client'

import React, { useState } from 'react';
import styles from './BookFlightPage.module.css';


interface FlightFormData {
  departure: string;
  arrival: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
}

const BookFlightPage: React.FC = () => {
  const [formData, setFormData] = useState<FlightFormData>({
    departure: '',
    arrival: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
  });
  const [showSummary, setShowSummary] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSummary(true);
  };

  return (
    <div className={styles.container}>
      <h1>Book Your Flight</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="departure">Departure Location:</label>
          <input
            type="text"
            id="departure"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="arrival">Arrival Location:</label>
          <input
            type="text"
            id="arrival"
            name="arrival"
            value={formData.arrival}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="departureDate">Departure Date:</label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="returnDate">Return Date:</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="passengers">Number of Passengers:</label>
          <select
            id="passengers"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>Find Flights</button>
      </form>
      {showSummary && (
        <div className={styles.summary}>
          <h2>Flight Summary</h2>
          <p><strong>Departure:</strong> {formData.departure}</p>
          <p><strong>Arrival:</strong> {formData.arrival}</p>
          <p><strong>Departure Date:</strong> {formData.departureDate}</p>
          <p><strong>Return Date:</strong> {formData.returnDate}</p>
          <p><strong>Passengers:</strong> {formData.passengers}</p>
          <button className={styles.confirmButton} onClick={() => alert('Flight booked!')}>Confirm Booking</button>
        </div>
      )}
    </div>
  );
};

export default BookFlightPage;
