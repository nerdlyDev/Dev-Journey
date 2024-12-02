import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../featuresSlices/todo/todoSlice";

const store = configureStore({
  reducer: todoReducer,
});

export default store;
