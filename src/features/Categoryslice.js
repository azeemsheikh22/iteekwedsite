import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const categorydata = createAsyncThunk("cartdata", async () => {
    const response = await fetch("https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/enabled");
    const result = await response.json(); // await the JSON parsing
    return result;
})

const initialState = {
    categories: [],
    loading: false,
    error: null,
}

const categoryslice = createSlice({
    name: "categorydata",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(categorydata.pending, (state) => {
                state.loading = true;
            })
            .addCase(categorydata.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(categorydata.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // assuming you want to capture the error message
            });
    }
});

export const {} = categoryslice.actions; // Export any reducers you define
export default categoryslice.reducer;