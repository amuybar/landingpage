'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    const { id, name, value, rating, navigationType } = metric;
    
    console.log(`Metric: ${name}`);
    console.log(`ID: ${id}`);
    console.log(`Value: ${value}`);
    console.log(`Rating: ${rating}`);
    console.log(`Navigation Type: ${navigationType}`);
    console.log('-------------------');
  });

  return null;
}