import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'
import userReducer from './UserSlice'
const rootReducer = {
    carts: cartReducer,
    users: userReducer
}

export const store = configureStore({
    reducer: rootReducer,
  });
  