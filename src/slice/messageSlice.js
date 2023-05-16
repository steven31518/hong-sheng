import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: [],
  reducers: {
    createMessage(state, action) {
      console.log("createMessage", action.payload);
    },
    deleteMessage(state, action) {
      //delete all element in array
      state.splice(0, state.length);
    },
  },
});

//這裡建立的方法，可以被其他元件使用。
//自訂名稱，async function名稱，參數
export const createAsyncMessage = createAsyncThunk(
  "message/createAsyncMessage",
  async function (payload, { dispatch, requestId }) {
    //console.log("createAsyncMessage : ", payload);
    dispatch(messageSlice.actions.createMessage({ ...payload, id: requestId }));
  }
);
export default messageSlice.reducer;
export const { createMessage, deleteMessage } = messageSlice.actions;
