import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    info: {},
}

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        openPopup: (state, action) => {
            state.isOpen = true;
        },

        closePopup: (state, action) => {
            state.isOpen = false;
        },

        displayDetails: (state, { payload }) => {
            state.info = payload
        }
    }
})

export const { openPopup, closePopup, displayDetails } = popupSlice.actions;
export default popupSlice.reducer;
