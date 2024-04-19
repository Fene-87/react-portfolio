import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "../redux/popupSlice";

export const store = configureStore({
    reducer: {
        popup: popupReducer
    }
})