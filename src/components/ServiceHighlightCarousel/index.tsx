'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './serviceHighlights.module.css';

interface ServiceHighlight {
  title: string;
  description: string;
  imageUrl: string;
}

const serviceHighlights: ServiceHighlight[] = [
  {
    title: "New look, new planes",
    description: "Who's excited for more overhead bin space, better entertainment options, bluetooth at every seat and updated United Clubs? Because we sure are.",
    imageUrl: "/images/Default_A_commercial_airliner_viewed_from_directly_above_soari_2.jpg",
  },
  {
    title: "Our Mobile App",
    description: "Manage your bookings, check-in, and access your boarding passes with our user-friendly mobile app.",
    imageUrl: "/images/Default_A_commercial_airliner_viewed_from_directly_above_soari_2.jpg",
  },
  {
    title: "Top Destinations",
    description: "Discover top destinations for your next adventure, carefully curated for your travel pleasure.",
    imageUrl: "/images/Default_A_commercial_airliner_viewed_from_directly_above_soari_2.jpg",
  },
  {
    title: "Holiday Packages",
    description: "Explore our exclusive holiday packages and get the best deals for your family vacations.",
    imageUrl: "/images/Default_A_commercial_airliner_viewed_from_directly_above_soari_2.jpg",
  },
  {
    title: "Summer Bunnies",
    description: "Enjoy special summer discounts and offers designed to make your holidays even more enjoyable.",
    imageUrl: "/images/Default_A_commercial_airliner_viewed_from_directly_above_soari_2.jpg",
  },
  {
    title: "Bonfires",
    description: "Join us for special bonfire events at select destinations and create unforgettable memories.",
    imageUrl: "/images/Default_A_commercial_airliner_viewed_from_directly_above_soari_2.jpg",
  },
  // Add more service highlights here
];

const ServiceHighlightCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === serviceHighlights.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? serviceHighlights.length - 1 : prevIndex - 1
    );
  };

  const currentHighlight = serviceHighlights[currentIndex];

  return (
    <div className={styles.container}>
      <div className={styles.highlightCard}>
        <div className={styles.content}>
          <h2 className={styles.title}>{currentHighlight.title}</h2>
          <p className={styles.description}>{currentHighlight.description}</p>
          <button className={styles.button}>
            Learn more
          </button>
        </div>
        <div className={styles.image}>
          <Image
            src={currentHighlight.imageUrl}
            alt={currentHighlight.title}
            width={500}
            height={300}
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>
      <div className={styles.controls}>
        <button
          onClick={goToPrevious}
          className={styles.controlButton}
        >
          &lt;
        </button>
        <span className={styles.index}>
          {currentIndex + 1} / {serviceHighlights.length}
        </span>
        <button
          onClick={goToNext}
          className={styles.controlButton}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ServiceHighlightCarousel;
