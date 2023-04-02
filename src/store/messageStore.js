import { createContext, useReducer } from "react";

export const MessageContext = createContext({});
export const initialState = {};
export const messageReducer = (state, action) => {
  switch (action.type) {
    case "POST_MESSAGE":
      return {
        type: "success", // success, info, warning, danger
        title: "成功 reducer",
        text: "這是一段成功的訊息",
      };
    case "CLEAR_MESSAGE":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
