import { useMutation, UseMutationResult } from '@tanstack/react-query';

import getBranding from '@/actions/getBranding';
import { Branding } from '@/types/branding.type';

export interface UseGetBrandingReturn {
  mutate: (shareCode: string) => Promise<Branding | undefined>;
  result: Branding | undefined;
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

export const useGetBranding = (): UseGetBrandingReturn => {
  const mutation: UseMutationResult<Branding | undefined, Error, string> =
    useMutation({
      mutationFn: getBranding,
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
