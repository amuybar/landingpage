import React from 'react';
import styles from './Links.module.css';

type Link = {
  title: string;
  summary: string;
  url: string;
};

const links: Link[] = [
  { title: 'How to Navigate Airports Efficiently', summary: 'Learn tips and tricks for quickly and smoothly getting through airports.', url: 'https://example.com/navigate-airports' },
  { title: 'Best Airlines for Comfort and Service', summary: 'A comprehensive review of the best airlines offering top-notch comfort and service.', url: 'https://example.com/best-airlines' },
  { title: 'Understanding Airline Loyalty Programs', summary: 'Maximize your travel benefits by understanding how airline loyalty programs work.', url: 'https://example.com/loyalty-programs' },
  { title: 'Packing Tips for Air Travel', summary: 'Essential packing tips to ensure you have a hassle-free travel experience.', url: 'https://example.com/packing-tips' },
  { title: 'What to Expect During a Layover', summary: 'Make the most out of your layover with these useful tips and activities.', url: 'https://example.com/layover-tips' },
];

export default function Links() {
  return (
    <div className={styles.Links}>
    <h2>Useful Links</h2>
      <div className={styles.links_item}>
          {links.map((link, index) => (
            <a key={index} href={link.url} className={styles.card} target="_blank" rel="noopener noreferrer">
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{link.title}</h2>
                <p className={styles.cardSummary}>{link.summary}</p>
              </div>
              <div className={styles.arrow}>→</div>
            </a>
          ))}
      </div>
    </div>
  );
}
