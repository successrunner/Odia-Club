export type Attachment = {
  id: string;
  url: string;
  name: string;
  created_at: string;
};

export type ServiceCategory = {
  name: string;
  icon_url: string;
};

export type ServiceDetails = {
  title: string;
  images: string[] | null;
  headline: string | null;
  category: ServiceCategory;
};

export type Service = {
  id: string;
  index: number;
  price: number;
  grouped: boolean;
  linked_id?: string | null;
  additional_info: string;
  start_date: string;
  start_time?: string | null;
  end_time?: string | null;
  edited_description: string;
  address?: string | null;
  contact_name?: string | null;
  contact_phone_number?: string | null;
  status?: string;
  service: ServiceDetails;
  attachments?: Attachment[];
};
