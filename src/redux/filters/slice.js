import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filterReduser = slice.reducer;
export const { changeFilter } = slice.actions;
