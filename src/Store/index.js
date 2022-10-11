import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../Features/Products';
import authReducer from '../Features/Auth'

export default configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer
  }
})