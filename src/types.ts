export interface IMenuItem {
  text: string;
  url: string;
}

export type ParkNode = {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  type: "attraction" | "restaurant" | "other";
};

export type Attraction = ParkNode & { type: "attraction" };
export type Restaurant = ParkNode & { type: "restaurant" };

export type PackageCondition = {
  description?: string;
  condition: (options: UserOptions) => boolean;
};

export type TicketPackage = {
  id: number;
  name: string;
  priceAdult: number;
  priceChild: number;
  availablePeriod: { start: string; end: string } | "perpetual";
  attractions?: Attraction[] | null;
  conditions?: PackageCondition[] | null;
};

export type Reservation = {
  id: number;
  date: string;
  quantity: number;
  location: ParkNode;
};

export type UserOptions = {
  nAdults?: number;
  nChildren?: number;
  date?: string;
  ticketPackage?: TicketPackage;
  reservations?: Reservation[];
  bookmarks?: ParkNode[];
  isFamily?: boolean;
};
