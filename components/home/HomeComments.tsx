"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import {
  ArrowRight,
  Eye,
  Heart,
  ShoppingBag,
  Tag,
  User,
  MessageSquare,
} from "lucide-react";

type ProductType = {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
  rating: number;
  badge?: string;
};

type NewsType = {
  id: number;
  title: string;
  category: string;
  author: string;
  comments: number;
  day: string;
  month: string;
  image: string;
  href: string;
};

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop";

function getSafeImageSrc(value?: string | null) {
  if (!value) return FALLBACK_IMAGE;

  const trimmed = value.trim();

  if (!trimmed || trimmed === "string") return FALLBACK_IMAGE;

  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("/")
  ) {
    return trimmed;
  }

  return FALLBACK_IMAGE;
}

const featuredProducts: ProductType[] = [
  {
    id: 1,
    name: "Green Apple",
    price: "$14.99",
    oldPrice: "$20.99",
    image: "/apple.png",
    rating: 4,
    badge: "Sale 50%",
  },
  {
    id: 2,
    name: "Fresh Indian Malta",
    price: "$20.00",
    image: "/apelsin.png",
    rating: 4,
  },
  {
    id: 3,
    name: "Chinese cabbage",
    price: "$12.00",
    image: "/karom.png",
    rating: 4,
  },
  {
    id: 4,
    name: "Green Lettuce",
    price: "$9.00",
    image: "/kokot.png",
    rating: 4,
  },
  {
    id: 5,
    name: "Eggplant",
    price: "$34.00",
    image: "/baqalajon.png",
    rating: 4,
  },
];

const latestNews: NewsType[] = [
  {
    id: 1,
    title: "Fresh fruits and vegetables for a healthier lifestyle every day.",
    category: "Food",
    author: "Admin",
    comments: 65,
    day: "18",
    month: "NOV",
    image:
      "https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=1200&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 2,
    title: "Organic salad bowls are becoming more popular this season.",
    category: "Food",
    author: "Admin",
    comments: 65,
    day: "29",
    month: "JAN",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 3,
    title: "Balanced nutrition starts with quality ingredients on your table.",
    category: "Food",
    author: "Admin",
    comments: 65,
    day: "21",
    month: "FEB",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop",
    href: "#",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-sm ${i < count ? "text-orange-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ProductCard({ item }: { item: ProductType }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative overflow-hidden border border-gray-200 bg-white cursor-default transition-all duration-300 hover:border-green-500 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      {item.badge && (
        <span className="absolute left-4 top-4 z-20 rounded bg-red-500 px-3 py-1 text-xs font-medium text-white">
          {item.badge}
        </span>
      )}

      <div className="relative flex h-46.25 items-center justify-center overflow-hidden px-6 pt-6">
        <div className="relative h-30 w-30 sm:h-32.5 sm:w-32.5">
          <Image
            src={getSafeImageSrc(item.image)}
            alt={item.name}
            fill
            unoptimized
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="absolute right-3 top-3 z-20 flex translate-x-3 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => setLiked((prev) => !prev)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-green-500 hover:text-white"
          >
            <Heart
              size={16}
              className={liked ? "text-red-500" : ""}
              fill={liked ? "currentColor" : "none"}
            />
          </button>

          <button
            type="button"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-green-500 hover:text-white"
            aria-label="View"
          >
            <Eye size={16} />
          </button>
        </div>
      </div>

      <div className="px-4 pb-4">
        <h3 className="mb-1 line-clamp-1 text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:text-green-600">
          {item.name}
        </h3>

        <div className="mb-1 flex items-center gap-2">
          <span className="text-[28px] font-bold leading-none text-black">
            {item.price}
          </span>
          {item.oldPrice && (
            <span className="text-base text-gray-400 line-through">
              {item.oldPrice}
            </span>
          )}
        </div>

        <Stars count={item.rating} />
      </div>

      <button
        type="button"
        className="absolute bottom-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white"
        aria-label="Add to cart"
      >
        <ShoppingBag size={16} />
      </button>
    </div>
  );
}

function NewsCard({ item }: { item: NewsType }) {
  return (
    <div className="group overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-70 overflow-hidden">
        <Image
          src={getSafeImageSrc(item.image)}
          alt={item.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute bottom-4 left-4 z-20 flex h-14 w-14 flex-col items-center justify-center bg-white text-center shadow-md">
          <span className="text-lg font-bold leading-none text-black">
            {item.day}
          </span>
          <span className="mt-1 text-[11px] uppercase text-gray-500">
            {item.month}
          </span>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Tag size={12} />
            {item.category}
          </span>
          <span className="flex items-center gap-1">
            <User size={12} />
            By {item.author}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare size={12} />
            {item.comments} Comments
          </span>
        </div>

        <h3 className="min-h-14 text-lg font-semibold leading-7 text-gray-900 transition-colors duration-300 group-hover:text-green-600">
          {item.title}
        </h3>

        <Link
          href={item.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 transition-all duration-300 hover:gap-3"
        >
          Read More <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

export default function HomeComments() {
  return (
    <section className="bg-gray-50 py-16">
      <Container className="py-10">
        <div className="mb-16">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-3xl font-bold text-black">Featured Products</h2>

            <Link
              href="#"
              className="inline-flex items-center gap-2 text-green-600 transition-all duration-300 hover:gap-3"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 overflow-hidden border border-gray-200 bg-white sm:grid-cols-2 lg:grid-cols-5">
            {featuredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-10 text-center text-5xl font-bold text-black">
            Latest News
          </h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {latestNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
