"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  getCartSubtotal,
  getTotalItems,
  isCartItem,
  type CartItem,
  type CartProduct,
} from "@/lib/cart";

const CART_STORAGE_KEY = "prostore-cart";

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  isHydrated: boolean;
  addItem: (product: CartProduct, quantity?: number) => void;
  setItemQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) {
        const parsed: unknown = JSON.parse(storedCart);
        if (Array.isArray(parsed)) {
          const validItems = parsed.filter(isCartItem);
          if (validItems.length !== parsed.length) {
            console.warn("Some invalid items were ignored while loading the saved cart.");
          }
          setItems(validItems);
        } else {
          console.warn("The saved cart has an invalid format and was ignored.");
        }
      }
    } catch (error) {
      console.error("Unable to load the saved cart from localStorage.", error);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Unable to save the cart to localStorage.", error);
    }
  }, [items, isHydrated]);

  const addItem = useCallback((product: CartProduct, quantity = 1) => {
    const amount = Math.floor(quantity);
    if (!Number.isFinite(amount) || amount < 1) return;

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, product, quantity: item.quantity + amount }
            : item
        );
      }
      return [...currentItems, { product, quantity: amount }];
    });
  }, []);

  const setItemQuantity = useCallback((productId: string, quantity: number) => {
    const amount = Math.floor(quantity);
    if (!Number.isFinite(amount) || amount < 1) return;

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId ? { ...item, quantity: amount } : item
      )
    );
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId)
    );
  }, []);

  const value = useMemo(
    () => ({
      items,
      totalItems: getTotalItems(items),
      subtotal: getCartSubtotal(items),
      isHydrated,
      addItem,
      setItemQuantity,
      removeItem,
    }),
    [items, isHydrated, addItem, setItemQuantity, removeItem]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error("useCart must be used within a CartProvider.");
  }
  return cart;
}
