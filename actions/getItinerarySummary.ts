import { AxiosError } from 'axios';

import { ITINERARY_SUMMARY_API_URL } from '@/constants/apis';
// import { SAMPLE_ITINERARY_SUMMARY } from '@/constants/mock/summaries';
import apiManager from '@/helpers/api.manager';
import { ItinerarySummary } from '@/types/summary.type';

const getItinerarySummary = async (
  shareCode: string
): Promise<ItinerarySummary> => {
  try {
    const response = await apiManager.get(`${ITINERARY_SUMMARY_API_URL}`, {
      headers: { 'Content-Type': 'application/json' },
      params: { share_code: shareCode },
    });

    if (response.status !== 200) {
      const error = response as unknown as AxiosError;
      return Promise.reject(error.response?.data);
    }

    return Promise.resolve(response.data);
    // return Promise.resolve(SAMPLE_ITINERARY_SUMMARY);
  } catch (e) {
    return Promise.reject(e);
  }
};

export default getItinerarySummary;
