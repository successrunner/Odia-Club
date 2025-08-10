import { useMutation, UseMutationResult } from '@tanstack/react-query';

import getItinerarySummary from '@/actions/getItinerarySummary';
import { ItinerarySummary } from '@/types/summary.type';

export interface UseGetItinerarySummaryReturn {
  mutate: (shareCode: string) => Promise<ItinerarySummary | undefined>;
  result: ItinerarySummary | undefined;
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

export const useGetItinerarySummary = (): UseGetItinerarySummaryReturn => {
  const mutation: UseMutationResult<
    ItinerarySummary | undefined,
    Error,
    string
  > = useMutation({
    mutationFn: getItinerarySummary,
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
