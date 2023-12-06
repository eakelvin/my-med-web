import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  medicines: [],
};

const medSlice = createSlice({
  name: 'medicine',
  initialState,
  reducers: {
    setMed: (state, action) => {
      state.medicines.push(action.payload);
    },
    removeMed: (state, action) => {
      state.medicines = state.medicines.filter(medicine => medicine !== action.payload);
    },
  },
});

export const { setMed, removeMed } = medSlice.actions;

export default medSlice.reducer;
