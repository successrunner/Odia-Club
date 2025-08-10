import { create } from 'zustand';

import { Itinerary } from '@/types/itinerary.type';

type State = {
  itinerary: Itinerary | null;
  setItinerary: (itinerary: Itinerary) => void;
};

export const useItineraryStore = create<State>((set) => ({
  itinerary: null,
  setItinerary: (itinerary) => set({ itinerary }),
}));
