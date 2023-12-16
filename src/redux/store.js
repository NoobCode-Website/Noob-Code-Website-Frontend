import { configureStore } from "@reduxjs/toolkit";
import speaker from "./slices/speaker";

export const store = configureStore({
  reducer: {
    speaker: speaker,
  },
});
