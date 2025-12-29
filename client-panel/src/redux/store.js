import { configureStore } from "@reduxjs/toolkit";
import solarReducer from "./slices/solarSlice";

export const store = configureStore({
  reducer: {
    solar: solarReducer,
  }
});
