import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: [],
  reducers: {
    createMessage(state, action) {
      if (action.payload.success) {
        state.push({
          id: action.payload.id,
          type: "success",
          title: "成功",
          text: action.payload.message,
        });
      } else {
        state.push({
          id: action.payload.id,
          type: "danger",
          title: "失敗",
          text: Array.isArray(action.payload?.message)
            ? action.payload?.message.join("、")
            : action.payload?.message,
        });
      }
    },
    // Array.isArray(error?.response?.data?.message)
    //     ? error?.response?.data?.message.join("、")
    //     : error?.response?.data?.message,
    deleteMessage(state, action) {
      //delete all element in array
      console.log("deleteMessage", action.payload);
      const index = state.findIndex((msg) => msg.id === action.payload);
      state.splice(index, 1);
    },
  },
});

//這裡建立的方法，可以被其他元件使用。
//createAsyncThunk(自訂名稱,async function)
export const createAsyncMessage = createAsyncThunk(
  "message/createAsyncMessage",
  async function (payload, { dispatch, requestId }) {
    // console.log("createAsyncMessage : ", payload);
    dispatch(messageSlice.actions.createMessage({ ...payload, id: requestId }));

    setTimeout(() => {
      dispatch(messageSlice.actions.deleteMessage(requestId));
    }, 3000);
  }
);
export default messageSlice.reducer;
export const { createMessage, deleteMessage } = messageSlice.actions;
