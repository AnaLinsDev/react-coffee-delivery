// CartContext.tsx
import { createContext, useReducer, useContext, type ReactNode } from "react";

interface CartItem {
  id: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "UPDATE_ITEM"; payload: CartItem }
  | { type: "CLEAR_CART" };

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "UPDATE_ITEM": {
      const { id, quantity } = action.payload;

      // 🧹 Remove item if quantity is 0
      if (quantity === 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== id),
        };
      }

      // 🧩 Check if item already exists
      const existingItem = state.items.find((item) => item.id === id);

      // 🆕 If it doesn't exist, add it to the list
      if (!existingItem) {
        return {
          ...state,
          items: [...state.items, { id, quantity }],
        };
      }

      // 🔁 Otherwise, update its quantity
      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );

      return {
        ...state,
        items: updatedItems,
      };
    }

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}

const CartContext = createContext<
  | {
      state: CartState;
      dispatch: React.Dispatch<CartAction>;
    }
  | undefined
>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de CartProvider");
  }
  return context;
}
