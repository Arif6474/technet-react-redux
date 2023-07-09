/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
}
const initialState: ICart = {
  products: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const exisProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (exisProduct) {
        exisProduct.quantity = exisProduct.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOne: (state, action: PayloadAction<IProduct>) => {
      const exisProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (exisProduct && exisProduct.quantity! > 1) {
        exisProduct.quantity = exisProduct.quantity! - 1;
      } 
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});
export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
