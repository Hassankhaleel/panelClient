import { createSlice } from "@reduxjs/toolkit";

const PRICE_25 = 149;
const PRICE_20 = 129;
const GST_RATE = 0.10;

const initialState = {
  panels25: 10,
  panels20: 0,
};

const solarSlice = createSlice({
  name: "solar",
  initialState,
  reducers: {
    increment25: (state) => { state.panels25 += 1 },
    decrement25: (state) => { if (state.panels25 > 0) state.panels25 -= 1 },

    increment20: (state) => { state.panels20 += 1 },
    decrement20: (state) => { if (state.panels20 > 0) state.panels20 -= 1 },
  }
});

export const { increment25, decrement25, increment20, decrement20 } = solarSlice.actions;
export default solarSlice.reducer;

export const selectSolarPricing = (state) => {
  const p25 = state.solar.panels25;
  const p20 = state.solar.panels20;

  const total25 = p25 * PRICE_25;
  const total20 = p20 * PRICE_20;
  const subtotal = total25 + total20;
  const gst = subtotal * GST_RATE;
  const total = subtotal;
  const payToday = subtotal * GST_RATE;
  const remaining = total - payToday;

  return { p25, p20, subtotal, gst, total, payToday, remaining };
};
