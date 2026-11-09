"use client";

import Image from "next/image";
import ProductAddToCart from "@/components/shared/cart/product-add-to-cart";
import { formatNaira, type CartProduct } from "@/lib/cart";

export default function FeaturedProductsGrid({
  products,
}: {
  products: CartProduct[];
}) {
  return (
    <div
      id="products"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4"
    >
      {products.map((product) => (
        <article
          key={product.id}
          className="flex flex-col justify-between overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
        >
          <div>
            <div className="relative h-48 w-full bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
              />
              {product.badge && (
                <span className="absolute left-2 top-2 rounded bg-amber-500 px-2 py-0.5 text-xs font-extrabold text-gray-900">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="mt-2 text-lg font-extrabold text-emerald-700">
                {formatNaira(product.price)}
              </p>
            </div>
          </div>
          <div className="p-4 pt-0">
            <ProductAddToCart product={product} />
          </div>
        </article>
      ))}
    </div>
  );
}
