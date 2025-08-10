import { create } from 'zustand';

import { Proposal } from '@/types/proposal.type';

type State = {
  proposal: Proposal | null;
  setProposal: (proposal: Proposal) => void;
};

export const useProposalStore = create<State>((set) => ({
  proposal: null,
  setProposal: (proposal) => set({ proposal }),
}));
