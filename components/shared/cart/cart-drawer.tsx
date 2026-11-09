// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useCart } from "@/components/providers/cart-provider";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { formatNaira, getItemSubtotal } from "@/lib/cart";
// import { cn } from "@/lib/utils";

// type CartDrawerProps = {
//   className?: string;
// };

// export default function CartDrawer({ className }: CartDrawerProps) {
//   const { items, totalItems, subtotal, setItemQuantity, removeItem } = useCart();
//   const [checkoutNotice, setCheckoutNotice] = useState(false);

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button
//           type="button"
//           variant="ghost"
//           className={cn("relative", className)}
//           aria-label={`Open shopping cart, ${totalItems} ${
//             totalItems === 1 ? "item" : "items"
//           }`}
//         >
//           <ShoppingCart aria-hidden="true" />
//           <span>Cart</span>
//           {totalItems > 0 && (
//             <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-bold leading-none text-gray-950">
//               {totalItems}
//             </span>
//           )}
//         </Button>
//       </SheetTrigger>
//       <SheetContent className="flex h-full w-full flex-col gap-0 p-0 sm:max-w-md">
//         <div className="border-b px-6 py-5 pr-12">
//           <SheetTitle className="text-xl">
//             Your Cart <span className="text-sm font-normal text-muted-foreground">({totalItems})</span>
//           </SheetTitle>
//           <SheetDescription className="sr-only">
//             Review and update the items in your shopping cart.
//           </SheetDescription>
//         </div>

//         {items.length === 0 ? (
//           <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
//             <span className="mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
//               <ShoppingCart className="size-7" aria-hidden="true" />
//             </span>
//             <h3 className="text-lg font-semibold">Your cart is waiting</h3>
//             <p className="mt-1 max-w-xs text-sm text-muted-foreground">
//               Add fresh groceries and foodstuffs to get started.
//             </p>
//             <SheetClose asChild>
//               <Link
//                 href="/#products"
//                 className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-emerald-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
//               >
//                 Continue Shopping
//               </Link>
//             </SheetClose>
//           </div>
//         ) : (
//           <>
//             <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
//               {items.map((item) => (
//                 <article
//                   key={item.product.id}
//                   className="flex gap-3 border-b pb-4 last:border-b-0"
//                 >
//                   <Image
//                     src={item.product.image}
//                     alt={item.product.name}
//                     width={80}
//                     height={80}
//                     className="size-20 shrink-0 rounded-lg bg-gray-100 object-cover"
//                   />
//                   <div className="min-w-0 flex-1">
//                     <div className="flex items-start justify-between gap-2">
//                       <h3 className="line-clamp-2 text-sm font-semibold leading-5">
//                         {item.product.name}
//                       </h3>
//                       <Button
//                         type="button"
//                         variant="ghost"
//                         size="icon"
//                         className="-mr-2 -mt-2 size-8 shrink-0 text-muted-foreground hover:text-destructive"
//                         aria-label={`Remove ${item.product.name} from cart`}
//                         onClick={() => removeItem(item.product.id)}
//                       >
//                         <Trash2 aria-hidden="true" />
//                       </Button>
//                     </div>
//                     <p className="mt-1 text-sm font-semibold text-emerald-700">
//                       {formatNaira(item.product.price)}
//                       <span className="font-normal text-muted-foreground"> each</span>
//                     </p>
//                     <div className="mt-2 flex items-center justify-between gap-2">
//                       <div
//                         className="inline-flex items-center rounded-md border"
//                         role="group"
//                         aria-label={`Quantity for ${item.product.name}`}
//                       >
//                         <Button
//                           type="button"
//                           variant="ghost"
//                           size="icon"
//                           className="size-8 rounded-r-none"
//                           aria-label={`Decrease quantity of ${item.product.name}`}
//                           disabled={item.quantity <= 1}
//                           onClick={() =>
//                             setItemQuantity(item.product.id, item.quantity - 1)
//                           }
//                         >
//                           <Minus aria-hidden="true" />
//                         </Button>
//                         <span className="min-w-8 text-center text-sm font-medium" aria-live="polite">
//                           {item.quantity}
//                         </span>
//                         <Button
//                           type="button"
//                           variant="ghost"
//                           size="icon"
//                           className="size-8 rounded-l-none"
//                           aria-label={`Increase quantity of ${item.product.name}`}
//                           onClick={() =>
//                             setItemQuantity(item.product.id, item.quantity + 1)
//                           }
//                         >
//                           <Plus aria-hidden="true" />
//                         </Button>
//                       </div>
//                       <span className="text-sm font-bold">
//                         {formatNaira(getItemSubtotal(item))}
//                       </span>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>

//             <div className="space-y-3 border-t bg-background px-6 py-5">
//               <div className="flex items-center justify-between text-base font-semibold">
//                 <span>Subtotal</span>
//                 <span>{formatNaira(subtotal)}</span>
//               </div>
//               <p className="text-xs text-muted-foreground">
//                 Delivery and any applicable fees are calculated at checkout.
//               </p>
//               <Button
//                 type="button"
//                 className="w-full bg-emerald-700 text-white hover:bg-emerald-800"
//                 onClick={() => setCheckoutNotice(true)}
//               >
//                 Proceed to Checkout
//               </Button>
//               {checkoutNotice && (
//                 <p className="text-center text-xs text-muted-foreground" role="status">
//                   Online checkout is not configured yet. Your cart is saved on this device.
//                 </p>
//               )}
//             </div>
//           </>
//         )}
//       </SheetContent>
//     </Sheet>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  CreditCard,
  Truck,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Banknote,
  MapPin,
} from "lucide-react";
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

type PaymentMethod = "card" | "pod";

export default function CartDrawer({ className }: CartDrawerProps) {
  const { items, totalItems, subtotal, setItemQuantity, removeItem } =
    useCart();

  // Checkout Drawer View States: "cart" | "checkout" | "success"
  const [step, setStep] = useState<"cart" | "checkout" | "success">("cart");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const deliveryFee = 2500; // Demo delivery fee
  const orderTotal = subtotal + (items.length > 0 ? deliveryFee : 0);

  const handleCompleteOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep("success");
    }, 1200);
  };

  const resetDrawer = () => {
    setStep("cart");
    setIsProcessing(false);
  };

  return (
    <Sheet
      onOpenChange={(open) => {
        if (!open) resetDrawer();
      }}
    >
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
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b px-6 py-4 pr-12">
          <div className="flex items-center gap-2">
            {step === "checkout" && (
              <button
                type="button"
                onClick={() => setStep("cart")}
                className="text-gray-500 hover:text-gray-900 pr-1"
                aria-label="Back to Cart"
              >
                <ChevronLeft size={20} />
              </button>
            )}
            <SheetTitle className="text-lg font-bold">
              {step === "cart" && (
                <>
                  Your Cart{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    ({totalItems})
                  </span>
                </>
              )}
              {step === "checkout" && "Select Payment Method"}
              {step === "success" && "Order Placed"}
            </SheetTitle>
          </div>
          <SheetDescription className="sr-only">
            Review your shopping cart and complete payment for Mummy Seun
            Prostore.
          </SheetDescription>
        </div>

        {/* --- STEP 1: CART ITEMS VIEW --- */}
        {step === "cart" &&
          (items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <span className="mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                <ShoppingCart className="size-7" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">Your cart is empty</h3>
              <p className="mt-1 max-w-xs text-sm text-muted-foreground">
                Add fresh rice, chicken, turkey, and groceries to get started.
              </p>
              <SheetClose asChild>
                <Link
                  href="/#products"
                  className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-emerald-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
                >
                  Continue Shopping
                </Link>
              </SheetClose>
            </div>
          ) : (
            <>
              {/* Item list */}
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
                        <span className="font-normal text-muted-foreground">
                          {" "}
                          each
                        </span>
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
                            disabled={item.quantity <= 1}
                            onClick={() =>
                              setItemQuantity(
                                item.product.id,
                                item.quantity - 1,
                              )
                            }
                          >
                            <Minus aria-hidden="true" />
                          </Button>
                          <span className="min-w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="size-8 rounded-l-none"
                            onClick={() =>
                              setItemQuantity(
                                item.product.id,
                                item.quantity + 1,
                              )
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

              {/* Footer subtotal & button */}
              <div className="space-y-3 border-t bg-background px-6 py-5">
                <div className="flex items-center justify-between text-base font-semibold">
                  <span>Subtotal</span>
                  <span>{formatNaira(subtotal)}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Standard delivery & payment options selected at checkout.
                </p>
                <Button
                  type="button"
                  className="w-full bg-emerald-700 text-white hover:bg-emerald-800 font-bold py-6 text-sm flex items-center justify-center gap-2 shadow-sm"
                  onClick={() => setStep("checkout")}
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </>
          ))}

        {/* --- STEP 2: CHECKOUT DEMO (PAY NOW VS PAY ON DELIVERY) --- */}
        {step === "checkout" && (
          <div className="flex flex-1 flex-col justify-between overflow-y-auto">
            <div className="space-y-6 px-6 py-5">
              {/* Delivery Address Demo Snippet */}
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200/80 text-xs text-gray-700 flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-emerald-700 shrink-0 mt-0.5"
                />
                <div>
                  <p className="font-bold text-gray-900">Delivery Address</p>
                  <p className="text-gray-600 mt-0.5">
                    Lekki Phase 1, Lagos, Nigeria
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                    Estimated delivery: Within 3 hours
                  </p>
                </div>
              </div>

              {/* Payment Methods Choice */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                  Select Payment Method
                </label>
                <div className="space-y-3">
                  {/* Option 1: Pay Now (Card / Transfer / USSD) */}
                  <div
                    onClick={() => setPaymentMethod("card")}
                    className={cn(
                      "cursor-pointer rounded-xl border-2 p-4 transition flex items-start justify-between gap-3",
                      paymentMethod === "card"
                        ? "border-emerald-700 bg-emerald-50/40 shadow-sm"
                        : "border-gray-200 hover:border-gray-300 bg-white",
                    )}
                  >
                    <div className="flex gap-3">
                      <div
                        className={cn(
                          "p-2 rounded-lg shrink-0",
                          paymentMethod === "card"
                            ? "bg-emerald-700 text-white"
                            : "bg-gray-100 text-gray-600",
                        )}
                      >
                        <CreditCard size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm text-gray-900">
                            Pay Online Now
                          </h4>
                          <span className="bg-amber-500 text-gray-950 text-[10px] font-bold px-1.5 py-0.2 rounded">
                            Fastest
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Debit Card, Bank Transfer or USSD (via
                          Paystack/Flutterwave)
                        </p>
                      </div>
                    </div>
                    <div
                      className={cn(
                        "size-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-1",
                        paymentMethod === "card"
                          ? "border-emerald-700 bg-emerald-700"
                          : "border-gray-300",
                      )}
                    >
                      {paymentMethod === "card" && (
                        <div className="size-2 rounded-full bg-white" />
                      )}
                    </div>
                  </div>

                  {/* Option 2: Pay on Delivery */}
                  <div
                    onClick={() => setPaymentMethod("pod")}
                    className={cn(
                      "cursor-pointer rounded-xl border-2 p-4 transition flex items-start justify-between gap-3",
                      paymentMethod === "pod"
                        ? "border-emerald-700 bg-emerald-50/40 shadow-sm"
                        : "border-gray-200 hover:border-gray-300 bg-white",
                    )}
                  >
                    <div className="flex gap-3">
                      <div
                        className={cn(
                          "p-2 rounded-lg shrink-0",
                          paymentMethod === "pod"
                            ? "bg-emerald-700 text-white"
                            : "bg-gray-100 text-gray-600",
                        )}
                      >
                        <Banknote size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-900">
                          Payment on Delivery
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Pay with Cash or POS transfer when rider arrives
                        </p>
                      </div>
                    </div>
                    <div
                      className={cn(
                        "size-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-1",
                        paymentMethod === "pod"
                          ? "border-emerald-700 bg-emerald-700"
                          : "border-gray-300",
                      )}
                    >
                      {paymentMethod === "pod" && (
                        <div className="size-2 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Cost Breakdown */}
              <div className="bg-gray-50 p-4 rounded-xl space-y-2 text-xs border border-gray-100">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatNaira(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>{formatNaira(deliveryFee)}</span>
                </div>
                <div className="pt-2 border-t flex justify-between font-bold text-sm text-gray-900">
                  <span>Total Amount</span>
                  <span className="text-emerald-700">
                    {formatNaira(orderTotal)}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="space-y-3 border-t bg-background px-6 py-5">
              <Button
                type="button"
                disabled={isProcessing}
                className="w-full bg-emerald-700 text-white hover:bg-emerald-800 font-bold py-6 text-sm flex items-center justify-center gap-2 shadow-sm"
                onClick={handleCompleteOrder}
              >
                {isProcessing ? (
                  <span>Processing Demo Order...</span>
                ) : (
                  <>
                    <span>
                      {paymentMethod === "card"
                        ? "Pay Now"
                        : "Confirm Order (Pay on Delivery)"}
                    </span>
                    <ArrowRight size={16} />
                  </>
                )}
              </Button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500">
                <ShieldCheck size={14} className="text-emerald-700" />
                <span>100% Encrypted & Safe Transaction</span>
              </div>
            </div>
          </div>
        )}

        {/* --- STEP 3: ORDER SUCCESS DEMO VIEW --- */}
        {step === "success" && (
          <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
            <div className="size-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-black text-gray-900">
              Order Confirmed!
            </h3>
            <p className="text-sm text-gray-600 mt-2 max-w-xs leading-relaxed">
              Thank you for ordering from <strong>Mummy Seun Prostore</strong>.
            </p>

            <div className="my-6 w-full bg-gray-50 rounded-xl p-4 border border-gray-100 text-left text-xs space-y-2">
              <div className="flex justify-between text-gray-500">
                <span>Payment Mode:</span>
                <span className="font-bold text-gray-800">
                  {paymentMethod === "card"
                    ? "Paid Online"
                    : "Payment on Delivery"}
                </span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Total Amount:</span>
                <span className="font-bold text-emerald-700">
                  {formatNaira(orderTotal)}
                </span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Status:</span>
                <span className="font-bold text-emerald-600">
                  Dispatching Soon
                </span>
              </div>
            </div>

            <SheetClose asChild>
              <Button
                type="button"
                onClick={resetDrawer}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3"
              >
                Back to Shop
              </Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}