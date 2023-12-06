import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  medicines: localStorage.getItem('medicines') 
        ? 
  JSON.parse(localStorage.getItem('medicines')) 
        : 
  []
};

const medSlice = createSlice({
  name: 'medicine',
  initialState,
  reducers: {
    setMed: (state, action) => {
      state.medicines = action.payload
      localStorage.setItem('medicines', JSON.stringify(action.payload))
      // state.medicines.push(action.payload);
    },
    removeMed: (state, action) => {
      state.medicines = null
      localStorage.removeItem('medicines')
      // const { id } = action.payload
      // state.medicines = state.medicines.filter(medicine => medicine !== id);
    },
  },
});

export const { setMed, removeMed } = medSlice.actions;

export default medSlice.reducer;
