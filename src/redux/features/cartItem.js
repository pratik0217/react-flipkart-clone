import { createSlice } from "@reduxjs/toolkit";

export const cartItemSlice = createSlice({
    name: "counterCart",
    initialState: {
        value: 0
    },

    reducers: {
        add: (state) => {
            state.value += 1;
        },
        remove: (state) => {
            if (state.value == 0) return;
            state.value -= 1;
        }
    }
});

export const { add, remove } = cartItemSlice.actions;
export default cartItemSlice.reducer;