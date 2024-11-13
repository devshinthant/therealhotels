import { create } from "zustand"

interface NavState {
  opened: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export const useNavStore = create<NavState>()((set) => ({
  opened: false,
  open: () => set((state) => ({ ...state, opened: true })),
  close: () => set((state) => ({ ...state, opened: false })),
  toggle: () => set((state) => ({ ...state, opened: !state.opened })),
}))
