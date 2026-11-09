export type CartProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string | null;
};

export type CartItem = {
  product: CartProduct;
  quantity: number;
};

export function isCartItem(value: unknown): value is CartItem {
  if (!value || typeof value !== "object") return false;

  const item = value as Record<string, unknown>;
  if (!item.product || typeof item.product !== "object") return false;

  const product = item.product as Record<string, unknown>;
  return (
    typeof product.id === "string" &&
    typeof product.name === "string" &&
    typeof product.price === "number" &&
    Number.isFinite(product.price) &&
    product.price >= 0 &&
    typeof product.image === "string" &&
    (product.badge === undefined ||
      product.badge === null ||
      typeof product.badge === "string") &&
    Number.isInteger(item.quantity) &&
    Number(item.quantity) > 0
  );
}

export function getTotalItems(items: CartItem[]) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

export function getItemSubtotal(item: CartItem) {
  return (Math.round(item.product.price * 100) * item.quantity) / 100;
}

export function getCartSubtotal(items: CartItem[]) {
  return (
    items.reduce((total, item) => total + Math.round(item.product.price * 100) * item.quantity, 0) /
    100
  );
}

export function formatNaira(value: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
