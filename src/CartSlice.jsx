import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
  console.log("Dispatched addItem action:", action.payload);
  const { name, image, cost } = action.payload;
  
  // Remove the '$' and convert cost to a number
  const numericCost = parseFloat(cost.replace("$", ""));

  const existingItem = state.items.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity++;
    console.log("Updated quantity for:", name, "New quantity:", existingItem.quantity);
  } else {
    state.items.push({ name, image, cost: numericCost, quantity: 1 });
    console.log("Added new item:", name);
  }
},

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    }
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
