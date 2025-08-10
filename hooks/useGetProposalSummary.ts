import { useMutation, UseMutationResult } from '@tanstack/react-query';

import getProposalSummary from '@/actions/getProposalSummary';
import { ProposalSummary } from '@/types/summary.type';

export interface UseGetProposalSummaryReturn {
  mutate: ({
    shareCode,
    version,
    draft,
  }: {
    shareCode: string;
    version?: string;
    draft?: boolean;
  }) => Promise<ProposalSummary | undefined>;
  result: ProposalSummary | undefined;
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

export const useGetProposalSummary = (): UseGetProposalSummaryReturn => {
  const mutation: UseMutationResult<
    ProposalSummary | undefined,
    Error,
    {
      shareCode: string;
      version?: string;
      draft?: boolean;
    }
  > = useMutation({
    mutationFn: getProposalSummary,
  });

  return {
    mutate: mutation.mutateAsync,
    result: mutation.data,
    error: mutation.error,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    isLoading: mutation.isPending,
  };
};
