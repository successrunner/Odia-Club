import { useMutation, UseMutationResult } from '@tanstack/react-query';

import getProposalDetails from '@/actions/getProposalDetails';
import { Proposal } from '@/types/proposal.type';

export interface UseGetProposalDetailsReturn {
  mutate: (proposalId: string) => Promise<Proposal | undefined>;
  result: Proposal | undefined;
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

export const useGetProposalDetails = (): UseGetProposalDetailsReturn => {
  const mutation: UseMutationResult<Proposal | undefined, Error, string> =
    useMutation({
      mutationFn: getProposalDetails,
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
