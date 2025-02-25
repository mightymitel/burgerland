import { PackageCondition, TicketPackage } from "../types";

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

export const attractions = {
  standard: [
    { id: 1, name: "The Great Burger Museum", price: 10 },
    { id: 2, name: "French Fry Falls", price: 10 },
    { id: 3, name: "Cheese Castle", price: 15 },
    { id: 4, name: "Pickle Playground", price: 5 },
    { id: 5, name: "Lettuce Lagoon", price: 12 },
    { id: 6, name: "Tomato Tower", price: 8 },
    { id: 7, name: "Onion Orbit", price: 10 },
    { id: 8, name: "Bacon Bridge", price: 20 },
  ],
};
