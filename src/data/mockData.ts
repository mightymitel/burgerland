import { Attraction, PackageCondition, Restaurant, TicketPackage } from "../types";

const familyOnly: PackageCondition = {
  description: "This package is only available to families",
  condition: (options: any) => options?.isFamily,
};

const groupOnly: PackageCondition = {
  description: "This package is only available to groups of 7 or more",
  condition: (options: any) => options?.nAdults && options.nAdults > 7,
};

export const ticketPackages: TicketPackage[] = [
  {
    id: 1,
    name: "Single Day Pass",
    priceAdult: 50,
    priceChild: 30,
    availablePeriod: "perpetual",
    attractions: [],
  },
  {
    id: 2,
    name: "Single Day Family Pass",
    priceAdult: 40,
    priceChild: 20,
    availablePeriod: "perpetual",
    attractions: [],
    conditions: [familyOnly],
  },
  {
    id: 3,
    name: "Group Pass",
    priceAdult: 40,
    priceChild: 30,
    availablePeriod: "perpetual",
    attractions: [],
    conditions: [groupOnly],
  },
];

export const attractions: Attraction[] = [
  {
    id: 1,
    name: "The Patty Peak Plunge",
    imageSrc: "/images/attractions/att1.jpeg",
    description: "A thrilling plunge from the peak of Patty Mountain.",
    type: "attraction",
  },
  {
    id: 2,
    name: "Ketchup Canyon Rapids",
    imageSrc: "/images/attractions/att2.jpeg",
    description: "Navigate the wild rapids of Ketchup Canyon.",
    type: "attraction",
  },
  {
    id: 3,
    name: "The Bun Bounce Zone",
    imageSrc: "/images/attractions/att3.jpeg",
    description: "Bounce around in the fun-filled Bun Zone.",
    type: "attraction",
  },
  {
    id: 4,
    name: "Onion Ring Orbit",
    imageSrc: "/images/attractions/att4.jpeg",
    description: "Spin around in the Onion Ring Orbit.",
    type: "attraction",
  },
  {
    id: 5,
    name: "The Secret Sauce Speedway",
    imageSrc: "/images/attractions/att5.jpeg",
    description: "Race through the Secret Sauce Speedway.",
    type: "attraction",
  },
  {
    id: 6,
    name: "Lettuce Leaf Lagoon",
    imageSrc: "/images/attractions/att6.jpeg",
    description: "Relax in the Lettuce Leaf Lagoon.",
    type: "attraction",
  },
];

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Patty's Place",
    description: "A casual eatery with a fun, playful vibe.",
    imageSrc: "/images/restaurants/rest1.jpeg",
    type: "restaurant",
  },
  {
    id: 2,
    name: "French Fry Factory",
    description: "A quick-service spot specializing in french fries and other sides.",
    imageSrc: "/images/restaurants/rest2.jpeg",
    type: "restaurant",
  },
  {
    id: 3,
    name: "Burger Emporium",
    description: "A Michelin star restaurant offering gourmet burgers.",
    imageSrc: "/images/restaurants/rest3.jpg",
    type: "restaurant",
  },
];
