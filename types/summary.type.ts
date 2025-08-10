export type TravelAgent = {
  first_name: string;
  last_name: string;
  agency: string;
  logo_file_id: string;
  logo_image_url: string;
};

export type DaySummary = {
  day_date: string;
  day_summary: string;
};

export type ProposalSummary = {
  id: string;
  title: string;
  from_date: string;
  to_date: string;
  day_summaries: DaySummary[];
  overall_summary: string;
  guest_count: number;
  travellers?: string[];
  travel_agent: TravelAgent;
  price_per_person?: number;
  cover_image_url: string;
  created_at: string;
  updated_at: string;
};

export type ItinerarySummary = {
  itinerary_id: string;
  title: string;
  from_date: string;
  to_date: string;
  day_summaries: DaySummary[];
  overall_summary: string;
  guest_count: number;
  travellers?: string[];
  travel_agent: TravelAgent;
  price_per_person?: number;
  cover_image_url: string;
  created_at: string;
  updated_at: string;
};
