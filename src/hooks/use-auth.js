import { create } from "zustand";

export const useAuth = create((set) => ({
  data: {},
  isLoggedIn: false,
  onLogin: (token) => set({ isLoggedIn: true, data: { token } }),
  onLogout: () => set({ isLoggedIn: false, data: {} }),
}));
