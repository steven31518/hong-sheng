import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: [],
  reducers: {
    createMessage(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    deleteMessage(state, action) {
      //delete all element in array
      state.splice(0, state.length);
    },
  },
});

export default messageSlice.reducer;
export const { createMessage, deleteMessage } = messageSlice.actions;
