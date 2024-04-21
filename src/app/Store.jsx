import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import productReducer from "../features/products/productSlice";
import contactReducer from "../features/contacts/contactSlice";
import brandReducer from "../features/brand/brandSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    contact: contactReducer,
    brand: brandReducer,
  },
});

