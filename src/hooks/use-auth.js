import { create } from "zustand";

export const useAuth = create((set) => ({
  data: {},
  getName: () =>
    `${localStorage.getItem("firstName")} ${localStorage.getItem("lastName")}`,
  isLoggedIn: localStorage.getItem("token") !== null,
  onLogin: (token, firstName, lastName) => {
    localStorage.setItem("token", token);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    set({ isLoggedIn: true, data: { token, firstName, lastName } });
  },
  onLogout: () => {
    localStorage.removeItem("token");
    set({ isLoggedIn: false, data: {} });
  },
}));
