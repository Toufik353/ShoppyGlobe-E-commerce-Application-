import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
   addItem: (state, action) => {
          const { product, quantity } = action.payload;
    const existingItem = state.cartItems.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        state.cartItems.push({ ...product, quantity });
    }
},

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem && quantity >= 1) {
        existingItem.quantity = quantity;
      }
    },
    removeQuantity: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== id);
    },
  },
});

export const { addItem, updateQuantity, removeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
