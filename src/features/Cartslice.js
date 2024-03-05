import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const productsdata = createAsyncThunk("cartdata", async () => {
    const response = await fetch("https://iteekapi.doctorsforhealth.co.uk/api/v1/products/e-commerce/products");
    const result = await response.json(); // await the JSON parsing
    return result;
})



const initialState = {
    products: [],
    category: [],
    cart: [],
    filters: [],
    cartmessage: "",
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
            let find = state.cart.findIndex((item) => item._id === action.payload._id);
            if (find >= 0) {
                console.log(state.cart)
                state.cart = state.cart.map((item) => {
                    if (item._id === action.payload._id) {
                        return { ...item, qty: item.qty + 1,price2: item.price2 += item.sell_price};
                    }
                    return item;
                });
                state.totalprice += action.payload.sell_price;

            } else {
                state.cart.push(action.payload);
                console.log(state.cart)
                state.totalQuantity += 1;
                state.cartmessage += "Added to cart";
                state.totalprice += action.payload.sell_price;
                console.log("hello")
            }
        },

        increaseqty: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item._id === action.payload.id) {
                    return { ...item, qty: item.qty + 1,price2: item.price2 += item.sell_price};
                }
                return item;
            });
            state.totalprice += action.payload.Rs;
        },

        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item._id === action.payload.id) {
                return { ...item, qty: item.qty - 1,price2: item.price2 -= item.sell_price };
              }
              return item;
            });
            state.totalprice -= action.payload.Rs;
          },

        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    console.log("carttotal", cartTotal);
                    console.log("cartitem", cartItem);
                    const { sell_price, quantity } = cartItem;
                    console.log(sell_price, quantity);
                    const itemTotal = sell_price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },

        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item._id !== action.payload._id);
            state.totalQuantity -= 1;
            console.log(state.cart)
            state.totalprice -= action.payload.price2;
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
            })


    }
});

export const { addtocart, removeItem, getCartTotal, increaseqty ,decreaseItemQuantity} = cartSlice.actions; // Export any reducers you define
export default cartSlice.reducer;
