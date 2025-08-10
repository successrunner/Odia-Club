import { AxiosError } from 'axios';

import { BRANDING_API_URL } from '@/constants/apis';
// import { SAMPLE_BRANDING } from '@/constants/mock/branding';
import apiManager from '@/helpers/api.manager';
import { Branding } from '@/types/branding.type';

const getBranding = async (shareCode: string): Promise<Branding> => {
  try {
    const response = await apiManager.get(`${BRANDING_API_URL}`, {
      headers: { 'Content-Type': 'application/json' },
      params: { share_code: shareCode },
    });

    if (response.status !== 200) {
      const error = response as unknown as AxiosError;
      return Promise.reject(error.response?.data);
    }

    return Promise.resolve(response.data);
    // return Promise.resolve(SAMPLE_BRANDING);
  } catch (e) {
    return Promise.reject(e);
  }
};

export default getBranding;
