import { EllipsisVertical, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartDrawer from "@/components/shared/cart/cart-drawer";
import ModeToggle from "./mode-toggle";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden w-full max-w-xs gap-1 md:flex" aria-label="Main menu">
        <ModeToggle />
        <CartDrawer />
        <Button asChild>
          <Link href="/auth/signup">
            <UserIcon aria-hidden="true" /> Sign Up
          </Link>
        </Button>
      </nav>

      <nav className="md:hidden" aria-label="Mobile menu">
        <Sheet>
          <SheetTrigger
            className="inline-flex size-10 items-center justify-center rounded-md hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Open menu"
          >
            <EllipsisVertical aria-hidden="true" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Site navigation and account actions.
            </SheetDescription>
            <ModeToggle />
            <CartDrawer className="w-full justify-start" />
            <Button asChild className="w-full">
              <Link href="/auth/signup">
                <UserIcon aria-hidden="true" /> Sign Up
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
