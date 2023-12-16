import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  speaker: [],
};

export const speakerSlice = createSlice({
  name: "speaker",
  initialState,
  reducers: {
    addSpeaker: (state, action) => {
      state.speaker = [...state.speaker, action.payload];
    },
    removeSpeaker: (state, action) => {
      state.speaker = state.speaker.filter(
        (speaker) => speaker.name !== action.payload
      );
    },
  },
});

export const { addSpeaker, removeSpeaker } = speakerSlice.actions;

export default speakerSlice.reducer;
