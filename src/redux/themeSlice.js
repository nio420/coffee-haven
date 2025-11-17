import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode);
    },
    loadTheme: (state) => {
      const saved = localStorage.getItem("darkMode");
      state.darkMode = saved === "true";
    },
  },
});

export const { toggleTheme, loadTheme } = themeSlice.actions;
export default themeSlice.reducer;
