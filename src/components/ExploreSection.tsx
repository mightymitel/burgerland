import React from 'react';
import { attractions, restaurants } from '../data/mockData';
import { ParkNodeCard } from './ParkNodeCard';

export const ExploreSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Attractions Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {attractions.map((attraction) => (
              <ParkNodeCard
                key={attraction.id}
                node={attraction}
                onClick={(node) => console.log('Clicked:', node.name)}
              />
            ))}
          </div>
        </div>

        {/* Restaurants Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Dining</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {restaurants.map((restaurant) => (
              <ParkNodeCard
                key={restaurant.id}
                node={restaurant}
                onClick={(node) => console.log('Clicked:', node.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
