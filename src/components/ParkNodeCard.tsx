import React from 'react';
import Image from 'next/image';
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

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.(node);
    }
  };

  return (
    <div
      className={`overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      onClick={() => onClick?.(node)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`${node.name} - ${node.type}`}
    >
      <div className="aspect-video relative">
        <Image
          src={node.imageSrc}
          alt=""
          layout='fill'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
          aria-hidden="true"
        />
        <span
          className={`absolute top-2 right-2 rounded-full px-3 py-1 text-xs font-medium ${
            typeColors[node.type]
          }`}
          role="badge"
        >
          {node.type.charAt(0).toUpperCase() + node.type.slice(1)}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{node.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2" aria-label={node.description}>
          {node.description}
        </p>
      </div>
    </div>
  );
};
