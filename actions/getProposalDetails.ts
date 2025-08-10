import { AxiosError } from 'axios';

import { PROPOSAL_DETAILS_API_URL } from '@/constants/apis';
import apiManager from '@/helpers/api.manager';
import { Proposal } from '@/types/proposal.type';

const getProposalDetails = async (proposalId: string): Promise<Proposal> => {
  try {
    const response = await apiManager.get(`${PROPOSAL_DETAILS_API_URL}`, {
      headers: { 'Content-Type': 'application/json' },
      params: { proposal_id: proposalId },
    });

    if (response.status !== 200) {
      const error = response as unknown as AxiosError;
      return Promise.reject(error.response?.data);
    }

    return Promise.resolve(response.data);
  } catch (e) {
    return Promise.reject(e);
  }
};

export default getProposalDetails;
