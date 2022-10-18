import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  api1: {},
  api2: {},
  api3: {},
  api4: {},
  api5: {},
  api6: {},
  api7: {},
  api8: {},
  api9: {},
  api10: {},
  loader: false,
};

export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setAPI1Data: (state, action) => {
      state.api1 = action.payload;
    },
    setAPI2Data: (state, action) => {
      state.api2 = action.payload;
    },
    setAPI3Data: (state, action) => {
      state.api3 = action.payload;
    },
    setAPI4Data: (state, action) => {
      state.api4 = action.payload;
    },
    setAPI5Data: (state, action) => {
      state.api5 = action.payload;
    },
    setAPI6Data: (state, action) => {
      state.api6 = action.payload;
    },
    setAPI7Data: (state, action) => {
      state.api7 = action.payload;
    },
    setAPI8Data: (state, action) => {
      state.api8 = action.payload;
    },
    setAPI9Data: (state, action) => {
      state.api9 = action.payload;
    },
    setAPI10Data: (state, action) => {
      state.api10 = action.payload;
    },
  },
});

// Actions - used to set global state
export const {
  setLoader,
  setAPI1Data,
  setAPI2Data,
  setAPI3Data,
  setAPI4Data,
  setAPI5Data,
  setAPI6Data,
  setAPI7Data,
  setAPI8Data,
  setAPI9Data,
  setAPI10Data,
} = stockSlice.actions;

// Selectors - used to fetch global state
export const selectAPI1Data = (state) => state.stock.api1;
export const selectAPI2Data = (state) => state.stock.api2;
export const selectAPI3Data = (state) => state.stock.api3;
export const selectAPI4Data = (state) => state.stock.api4;
export const selectAPI5Data = (state) => state.stock.api5;
export const selectAPI6Data = (state) => state.stock.api6;
export const selectAPI7Data = (state) => state.stock.api7;
export const selectAPI8Data = (state) => state.stock.api8;
export const selectAPI9Data = (state) => state.stock.api9;
export const selectAPI10Data = (state) => state.stock.api10;
export const selectLoader = (state) => state.stock.loader;

export default stockSlice.reducer;
