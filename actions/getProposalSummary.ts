import { AxiosError } from 'axios';

import { PROPOSAL_SUMMARY_API_URL } from '@/constants/apis';
import apiManager from '@/helpers/api.manager';
import { ProposalSummary } from '@/types/summary.type';

const getProposalSummary = async ({
  shareCode,
  version,
  draft,
}: {
  shareCode: string;
  version?: string;
  draft?: boolean;
}): Promise<ProposalSummary> => {
  try {
    const response = await apiManager.get(`${PROPOSAL_SUMMARY_API_URL}`, {
      headers: { 'Content-Type': 'application/json' },
      params: {
        share_code: shareCode,
        ...(version && { version }),
        ...(draft && { draft }),
      },
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

export default getProposalSummary;
