import { useMutation, UseMutationResult } from '@tanstack/react-query';

import getItineraryDetails from '@/actions/getItineraryDetails';
import { Itinerary } from '@/types/itinerary.type';

export interface UseGetItineraryDetailsReturn {
  mutate: (itineraryId: string) => Promise<Itinerary | undefined>;
  result: Itinerary | undefined;
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

export const useGetItineraryDetails = (): UseGetItineraryDetailsReturn => {
  const mutation: UseMutationResult<Itinerary | undefined, Error, string> =
    useMutation({
      mutationFn: getItineraryDetails,
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
