import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  ShoppingBag,
  ShieldCheck,
  Star,
  Search,
  MessageCircle,
  CreditCard,
  MapPin,
} from "lucide-react";
import FeaturedProductsGrid from "@/components/shared/product/featured-products-grid";

const categories = [
  {
    name: "Rice & Grains",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Frozen Poultry",
    image:
      "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Fresh Seafood",
    image:
      "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Cooking Oils & Spices",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400",
  },
];

const featuredProducts = [
  {
    id: "1",
    name: "50kg Foreign Parboiled Rice (Royal Stallion)",
    price: 78500,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=500",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Full Carton Frozen Turkey Cuts",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=500",
    badge: "Fresh Stock",
  },
  {
    id: "3",
    name: "Cleaned Frozen Hard Chicken (Full)",
    price: 6500,
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=500",
    badge: null,
  },
  {
    id: "4",
    name: "Pure Unadulterated Red Palm Oil (5 Litres)",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=500",
    badge: "100% Pure",
  },
];

const reviews = [
  {
    name: "Chioma O.",
    location: "Lekki, Lagos",
    text: "The 50kg rice was clean, stone-free, and delivered within 3 hours. Will definitely order again!",
    rating: 5,
  },
  {
    name: "Tunde A.",
    location: "Ikeja, Lagos",
    text: "I ordered turkey and chicken for our family Sunday party. Ice was still intact on arrival.",
    rating: 5,
  },
  {
    name: "Amaka N.",
    location: "Victoria Island, Lagos",
    text: "Very reliable. Their customer support on WhatsApp is super fast when you need customized cuts.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top Banner - Localized Context */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-2 px-4 text-center flex justify-center items-center gap-2">
        <MapPin size={14} className="text-emerald-400" />
        <span>Delivering fresh foodstuffs across Akure, Lagos and Abuja</span>
      </div>

      {/* Hero Section */}
      <section className="relative bg-emerald-800 text-white overflow-hidden py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="bg-emerald-700 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              100% Quality Guaranteed
            </span>
            <h1 className="text-4xl md:text-6xl font-black mt-4 leading-tight">
              Fresh Foodstuffs, <br />
              <span className="text-amber-400">Straight to Your Door.</span>
            </h1>
            <p className="mt-4 text-emerald-100 text-base md:text-lg max-w-lg">
              Buy bag of rice, fresh frozen chicken, turkey, and traditional
              foodstuffs at market-friendly prices. Same-day delivery available.
            </p>

            {/* Quick Search Bar */}
            <div className="mt-6 flex items-center bg-white rounded-lg p-1.5 shadow-lg max-w-md">
              <Search className="text-gray-400 ml-2" size={20} />
              <input
                type="text"
                placeholder="Search rice, chicken, turkey, palm oil..."
                className="w-full px-3 py-2 text-gray-800 text-sm focus:outline-none"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition">
                Search
              </button>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <Link
                href="/shop"
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-6 py-3 rounded-lg font-bold transition shadow-md"
              >
                Start Shopping
              </Link>
              <a
                href="https://wa.me/2340000000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold border border-emerald-600 transition"
              >
                <MessageCircle size={18} className="text-green-300" />
                Order via WhatsApp
              </a>
            </div>
          </div>

          {/* Hero Image Collage */}
          <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=800](https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=800)"
              alt="Fresh foodstuffs and groceries"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid md:grid-cols-4 gap-4 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
          {[
            {
              icon: <Truck className="text-emerald-600" size={24} />,
              title: "Same-Day Delivery",
              desc: "Orders before 12 PM ship same day",
            },
            {
              icon: <ShoppingBag className="text-emerald-600" size={24} />,
              title: "In-Store Pickup",
              desc: "Skip the queue at our physical store",
            },
            {
              icon: <CreditCard className="text-emerald-600" size={24} />,
              title: "Bank Transfer & POS",
              desc: "Pay via Card, Transfer or USSD",
            },
            {
              icon: <ShieldCheck className="text-emerald-600" size={24} />,
              title: "Quality Check",
              desc: "100% money back if not fresh",
            },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-3 p-2">
              <div className="p-2.5 bg-emerald-50 rounded-lg shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900">{f.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Shop by Category
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Explore our wide selection of fresh market items
            </p>
          </div>
          <Link
            href="/categories"
            className="text-emerald-700 hover:text-emerald-800 font-semibold text-sm"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((c) => (
            <Link
              key={c.name}
              href={`/category/${c.name.toLowerCase().replace(/ /g, "-")}`}
              className="group relative h-44 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                <span className="text-white font-bold text-sm md:text-base">
                  {c.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="bg-emerald-50/60 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Popular Market Items
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Freshly sourced produce directly from reliable suppliers
              </p>
            </div>
            <Link
              href="/shop"
              className="text-emerald-700 hover:text-emerald-800 font-semibold text-sm"
            >
              See All Products →
            </Link>
          </div>

          <FeaturedProductsGrid products={featuredProducts} />
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900">
            Trusted by Households Across Nigeria
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 mb-3">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "{r.text}"
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200/60">
                  <p className="font-bold text-sm text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-center text-gray-900">
              Have Questions or Special Bulk Orders?
            </h2>
            <p className="text-center text-gray-600 text-sm mt-1">
              Send us a message or reach out on WhatsApp for bulk/event orders.
            </p>
            <form className="mt-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number (WhatsApp preferred)"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                  required
                />
              </div>
              <textarea
                placeholder="What products or bulk order quantities do you need?"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
                required
              />
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-bold text-sm transition"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} Mumsy Seun Groceries. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-400">
            <span>Payment Partners: Paystack | Flutterwave</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
