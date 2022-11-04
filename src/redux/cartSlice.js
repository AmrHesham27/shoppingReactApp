import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsCount: 0,
    items: {},
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      let product = action.payload;

      if (!state.items[product.id]) {
        state.itemsCount++;
        state.items[product["id"]] = product;
        state.total += product["price"];
      }
    },
    removeProduct: (state, action) => {
      let productId = action.payload;

      if (state.items[productId]) {
        state.itemsCount = state.itemsCount - state.items[productId]["qty"];
        delete state.items[productId];
        state.total -=
          state.items[productId]["qty"] * state.items[productId]["price"];
      }
    },
    decreaseProductQty: (state, action) => {
      let productId = action.payload;

      if (state.items[productId].qty === 1) {
        delete state.items[productId];
      } else {
        state.items[productId].qty--;
      }
      state.itemsCount--;
      state.total -= state["items"][productId]["price"];
    },
    increaseProductQty: (state, action) => {
      let productId = action.payload;

      state.items[productId].qty++;
      state.itemsCount++;
      state.total += state["items"][productId]["price"];
    },
    setCart: (state, action) => {
      state.itemsCount = action.payload["itemsCount"];
      state.items = action.payload["items"];
      state.total = action.payload["total"];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
