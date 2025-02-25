import React from 'react';
import { attractions, restaurants } from '../data/mockData';
import { ParkNodeCard } from './ParkNodeCard';

export const ExploreSection: React.FC = () => {
  return (
    <section 
      className="container mx-auto px-4 py-8" 
      aria-label="Park Attractions and Dining"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <section className="flex-1" aria-labelledby="attractions-heading">
          <h2 id="attractions-heading" className="text-2xl font-bold mb-4">
            Attractions
          </h2>
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            role="list"
            aria-label="List of park attractions"
          >
            {attractions.map((attraction) => (
              <div key={attraction.id} role="listitem">
                <ParkNodeCard
                  node={attraction}
                  onClick={(node) => console.log('Clicked:', node.name)}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="flex-1" aria-labelledby="dining-heading">
          <h2 id="dining-heading" className="text-2xl font-bold mb-4">
            Dining
          </h2>
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            role="list"
            aria-label="List of park restaurants"
          >
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} role="listitem">
                <ParkNodeCard
                  node={restaurant}
                  onClick={(node) => console.log('Clicked:', node.name)}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
