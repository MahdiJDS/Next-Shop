import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products } from "@/utils/GetAPI";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img?: string;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

let initialState: CartState = { items: [], totalAmount: 0 };

if (typeof window !== "undefined") {
  try {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsed = JSON.parse(storedCart);

      const mergedItems = (Array.isArray(parsed.items) ? parsed.items : []).map((item: any) => {
        const fullProduct = products.find((p) => p.id === item.id);
        return {
          ...item,
          name: fullProduct?.title ?? item.name ?? "Unknown",
          price: fullProduct?.price ?? item.price ?? 0,
          img : fullProduct?.img ?? item.img ?? ""
        };
      });

      initialState = {
        items: mergedItems,
        totalAmount: mergedItems.reduce((sum: any, i: any) => sum + i.price * i.quantity, 0),
      };
    }
  } catch {
    initialState = { items: [], totalAmount: 0 };
  }
}

const saveToLocalStorage = (state: CartState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(state));
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((i) => i.id === action.payload.id);

      // const fullProduct = products.find((p) => p.id === action.payload.id);
      // const price = fullProduct?.price ?? action.payload.price ?? 0;
      // const name = fullProduct?.title ?? action.payload.name ?? "Unknown";
      // const img = fullProduct?.img ?? action.payload.img ?? "";

      if (existingItem) {
        existingItem.quantity += 1;
      } else {

        state.items.push({ ...action.payload, quantity: 1 });

      }

      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      saveToLocalStorage(state);
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      if (!state.items) state.items = [];
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }

      state.totalAmount = state.items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
      saveToLocalStorage(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      if (typeof window !== "undefined") {
        localStorage.removeItem("cart");
      }
    },
  },
});

export const { addToCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
