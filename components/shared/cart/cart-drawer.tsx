"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/providers/cart-provider";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { formatNaira, getItemSubtotal } from "@/lib/cart";
import { cn } from "@/lib/utils";

type CartDrawerProps = {
  className?: string;
};

export default function CartDrawer({ className }: CartDrawerProps) {
  const { items, totalItems, subtotal, setItemQuantity, removeItem } = useCart();
  const [checkoutNotice, setCheckoutNotice] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          className={cn("relative", className)}
          aria-label={`Open shopping cart, ${totalItems} ${
            totalItems === 1 ? "item" : "items"
          }`}
        >
          <ShoppingCart aria-hidden="true" />
          <span>Cart</span>
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-bold leading-none text-gray-950">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-full w-full flex-col gap-0 p-0 sm:max-w-md">
        <div className="border-b px-6 py-5 pr-12">
          <SheetTitle className="text-xl">
            Your Cart <span className="text-sm font-normal text-muted-foreground">({totalItems})</span>
          </SheetTitle>
          <SheetDescription className="sr-only">
            Review and update the items in your shopping cart.
          </SheetDescription>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <span className="mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <ShoppingCart className="size-7" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold">Your cart is waiting</h3>
            <p className="mt-1 max-w-xs text-sm text-muted-foreground">
              Add fresh groceries and foodstuffs to get started.
            </p>
            <SheetClose asChild>
              <Link
                href="/#products"
                className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-emerald-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Continue Shopping
              </Link>
            </SheetClose>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              {items.map((item) => (
                <article
                  key={item.product.id}
                  className="flex gap-3 border-b pb-4 last:border-b-0"
                >
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    width={80}
                    height={80}
                    className="size-20 shrink-0 rounded-lg bg-gray-100 object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="line-clamp-2 text-sm font-semibold leading-5">
                        {item.product.name}
                      </h3>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="-mr-2 -mt-2 size-8 shrink-0 text-muted-foreground hover:text-destructive"
                        aria-label={`Remove ${item.product.name} from cart`}
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 aria-hidden="true" />
                      </Button>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-emerald-700">
                      {formatNaira(item.product.price)}
                      <span className="font-normal text-muted-foreground"> each</span>
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div
                        className="inline-flex items-center rounded-md border"
                        role="group"
                        aria-label={`Quantity for ${item.product.name}`}
                      >
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="size-8 rounded-r-none"
                          aria-label={`Decrease quantity of ${item.product.name}`}
                          disabled={item.quantity <= 1}
                          onClick={() =>
                            setItemQuantity(item.product.id, item.quantity - 1)
                          }
                        >
                          <Minus aria-hidden="true" />
                        </Button>
                        <span className="min-w-8 text-center text-sm font-medium" aria-live="polite">
                          {item.quantity}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="size-8 rounded-l-none"
                          aria-label={`Increase quantity of ${item.product.name}`}
                          onClick={() =>
                            setItemQuantity(item.product.id, item.quantity + 1)
                          }
                        >
                          <Plus aria-hidden="true" />
                        </Button>
                      </div>
                      <span className="text-sm font-bold">
                        {formatNaira(getItemSubtotal(item))}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="space-y-3 border-t bg-background px-6 py-5">
              <div className="flex items-center justify-between text-base font-semibold">
                <span>Subtotal</span>
                <span>{formatNaira(subtotal)}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Delivery and any applicable fees are calculated at checkout.
              </p>
              <Button
                type="button"
                className="w-full bg-emerald-700 text-white hover:bg-emerald-800"
                onClick={() => setCheckoutNotice(true)}
              >
                Proceed to Checkout
              </Button>
              {checkoutNotice && (
                <p className="text-center text-xs text-muted-foreground" role="status">
                  Online checkout is not configured yet. Your cart is saved on this device.
                </p>
              )}
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
