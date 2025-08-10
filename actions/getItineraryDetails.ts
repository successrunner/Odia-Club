import { AxiosError } from 'axios';

import { ITINERARY_DETAILS_API_URL } from '@/constants/apis';
// import { SAMPLE_ITINERARY_DETAILS } from '@/constants/mock/details';
import apiManager from '@/helpers/api.manager';
import { Itinerary } from '@/types/itinerary.type';

const getItineraryDetails = async (itineraryId: string): Promise<Itinerary> => {
  try {
    const response = await apiManager.get(`${ITINERARY_DETAILS_API_URL}`, {
      headers: { 'Content-Type': 'application/json' },
      params: { itinerary_id: itineraryId },
    });

    if (response.status !== 200) {
      const error = response as unknown as AxiosError;
      return Promise.reject(error.response?.data);
    }

    return Promise.resolve(response.data);
    // return Promise.resolve(SAMPLE_ITINERARY_DETAILS);
  } catch (e) {
    return Promise.reject(e);
  }
};

export default getItineraryDetails;
