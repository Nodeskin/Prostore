"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/providers/cart-provider";
import type { CartProduct } from "@/lib/cart";
import { cn } from "@/lib/utils";

type ProductAddToCartProps = {
  product: CartProduct;
  className?: string;
};

export default function ProductAddToCart({
  product,
  className,
}: ProductAddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const feedbackTimer = useRef<number | null>(null);
  const { addItem } = useCart();

  useEffect(
    () => () => {
      if (feedbackTimer.current !== null) {
        window.clearTimeout(feedbackTimer.current);
      }
    },
    []
  );

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
    setAdded(true);
    if (feedbackTimer.current !== null) {
      window.clearTimeout(feedbackTimer.current);
    }
    feedbackTimer.current = window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-gray-600">Quantity</span>
        <div
          className="inline-flex items-center rounded-lg border border-gray-200 bg-white"
          role="group"
          aria-label={`Quantity for ${product.name}`}
        >
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-9 rounded-r-none"
            aria-label={`Decrease quantity of ${product.name}`}
            disabled={quantity <= 1}
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
          >
            <Minus />
          </Button>
          <span className="min-w-9 text-center text-sm font-semibold" aria-live="polite">
            {quantity}
          </span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-9 rounded-l-none"
            aria-label={`Increase quantity of ${product.name}`}
            onClick={() => setQuantity((current) => current + 1)}
          >
            <Plus />
          </Button>
        </div>
      </div>
      <Button
        type="button"
        className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
        aria-live="polite"
        onClick={handleAddToCart}
      >
        {added ? (
          <>
            <Check aria-hidden="true" /> Added to Cart
          </>
        ) : (
          <>
            <Plus aria-hidden="true" /> Add to Cart
          </>
        )}
      </Button>
    </div>
  );
}
