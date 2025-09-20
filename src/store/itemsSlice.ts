import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import productListings from "./products.json"; // todo: load from DB
import Material from "@/types/Material";

const initialState: Material[] = productListings as Material[];

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setAll: (_state, action: PayloadAction<Material[]>) => action.payload,
    addItem: (state, action: PayloadAction<Material>) => {
      state.push(action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const it = state.find((x) => x.id === action.payload.id);
      if (it) it.current = action.payload.quantity;
    },
  },
});

export const { setAll, addItem, updateQuantity } = itemsSlice.actions;
export default itemsSlice.reducer;
