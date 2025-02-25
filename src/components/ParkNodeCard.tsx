import React from 'react';
import { ParkNode } from '../types';

interface ParkNodeCardProps {
  node: ParkNode;
  onClick?: (node: ParkNode) => void;
  className?: string;
}

export const ParkNodeCard: React.FC<ParkNodeCardProps> = ({
  node,
  onClick,
  className = '',
}) => {
  const typeColors = {
    attraction: 'bg-blue-100 text-blue-800',
    restaurant: 'bg-green-100 text-green-800',
    other: 'bg-gray-100 text-gray-800',
  };

  return (
    <div
      className={`overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md ${className}`}
      onClick={() => onClick?.(node)}
      role="button"
      tabIndex={0}
    >
      <div className="aspect-video relative">
        <img
          src={node.imageSrc}
          alt={node.name}
          className="h-full w-full object-cover"
        />
        <span
          className={`absolute top-2 right-2 rounded-full px-3 py-1 text-xs font-medium ${
            typeColors[node.type]
          }`}
        >
          {node.type.charAt(0).toUpperCase() + node.type.slice(1)}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{node.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{node.description}</p>
      </div>
    </div>
  );
};
