import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Slices/productSlice'
import wishlistReducer from './Slices/wishlistSlice'
import cartReducer from './Slices/cartSlice'

 const productStore=configureStore({
    reducer:{
        productReducer,
        wishlistReducer,
        cartReducer
    }
})

export default productStore