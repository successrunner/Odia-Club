export type ServicePrice = {
  day: number;
  date: Date;
  services: {
    title: string;
    details?: string;
    category: {
      label: string;
      icon: string;
    };
    pricePerPerson: number;
    totalPassengers: number;
    extraOptions?: {
      label: string;
      unitPrice: number;
      quantity: number;
    }[];
  }[];
};
