import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import productReducer from './slices/productSlice';
import loaderReducer from './slices/loaderSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        loader: loaderReducer,
    },
});

export default store;
