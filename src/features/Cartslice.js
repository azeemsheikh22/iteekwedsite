import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const productsdata = createAsyncThunk("cartdata", async () => {
    const response = await fetch("https://iteekapi.doctorsforhealth.co.uk/api/v1/products/similar/products");
    const result = await response.json(); // await the JSON parsing
    return result;
})

const initialState = {
    products: [],
    cart: [],
    totalQuantity: 0,
    totalprice: 0,
    loading: false,
    error: null,
}

const cartSlice = createSlice({
    name: "cartdata",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            let find = state.cart.findIndex((item) => item.display_name === action.payload.display_name);
            if (find >= 0) {
                // state.cart[find].quantity += 1;
                console.log("hello")
            } else {
                state.cart.push(action.payload);
                console.log(find)
                state.totalQuantity += 1;
                console.log("hello")

            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.name !== action.payload);
            state.totalQuantity -= 1;

          },
     
    },
    extraReducers: builder => {
        builder
            .addCase(productsdata.pending, (state) => {
                state.loading = true;
            })
            .addCase(productsdata.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(productsdata.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // assuming you want to capture the error message
            });
    }
});

export const { addtocart,removeItem } = cartSlice.actions; // Export any reducers you define
export default cartSlice.reducer;
