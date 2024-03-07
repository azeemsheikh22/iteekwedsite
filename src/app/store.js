// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "../features/Cartslice";

// export const store = configureStore({
//   reducer: {
//     carts: cartSlice, 
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage ya session storage ka istemal karne ke liye

import cartSlice from "../features/Cartslice";

// Redux persist ka configuration
const persistConfig = {
  key: "root",
  storage,
};

// Persisted reducer banana
const persistedReducer = persistReducer(persistConfig, cartSlice);

// Redux store configure karna
export const store = configureStore({
  reducer: {
    carts: persistedReducer, // Persisted reducer ka istemal karna
  },
});

// Persisted store banana
export const persistor = persistStore(store);
