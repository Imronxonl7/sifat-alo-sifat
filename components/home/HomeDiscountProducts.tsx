"use client";

import React, { useState } from "react";
import Container from "../Container";

const promoCards = [
  {
    id: 1,
    smallTitle: "Best Deals",
    title: "Fresh Vegetables",
    subtitle: "Up to 50% discount",
    buttonText: "Shop Now",
    bgClass: "bg-gradient-to-br from-emerald-500 to-green-700 text-white",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    smallTitle: "Healthy Choice",
    title: "Premium Meat",
    subtitle: "Start from $79.99",
    buttonText: "Shop Now",
    bgClass: "bg-gradient-to-br from-gray-900 to-black text-white",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    smallTitle: "Summer Sale",
    title: "Fresh Fruits",
    subtitle: "100% Organic",
    buttonText: "Shop Now",
    bgClass: "bg-gradient-to-br from-yellow-400 to-orange-500 text-black",
    image:
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    smallTitle: "Hot Offer",
    title: "Seasonal Fruits",
    subtitle: "Fresh & Natural",
    buttonText: "Shop Now",
    bgClass: "bg-gradient-to-br from-yellow-400 to-orange-500 text-black",
    image:
      "https://images.unsplash.com/photo-1574226516831-e1dff420e43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    smallTitle: "Limited Sale",
    title: "Fresh Picks",
    subtitle: "Up to 40% OFF",
    buttonText: "Shop Now",
    bgClass: "bg-gradient-to-br from-yellow-400 to-orange-500 text-black",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    smallTitle: "Daily Fresh",
    title: "Organic Fruits",
    subtitle: "Healthy Choice",
    buttonText: "Shop Now",
    bgClass: "bg-gradient-to-br from-yellow-400 to-orange-500 text-black",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    smallTitle: "Premium Quality",
    title: "Exotic Fruits",
    subtitle: "Direct from Farms",
    buttonText: "Shop Now",
    bgClass: "bg-gradient-to-br from-yellow-400 to-orange-500 text-black",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=1200&auto=format&fit=crop",
  },
];

const HomeDiscountProducts = () => {
  const [cards, setCards] = useState(promoCards);

  const rotateCards = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const firstCard = newCards.shift();
      if (firstCard) {
        newCards.push(firstCard);
      }
      return newCards;
    });
  };

  return (
    <section>
      <Container className="">
        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cards.slice(0, 3).map((card) => (
              <div
                key={card.id}
                className={`group relative min-h-[540px] overflow-hidden rounded-2xl ${card.bgClass} shadow-lg transition duration-500 hover:shadow-2xl`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[2px] opacity-80">
                      {card.smallTitle}
                    </p>

                    <h3 className="mt-3 text-[30px] font-bold leading-tight sm:text-[34px]">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm opacity-90">{card.subtitle}</p>
                  </div>

                  <div>
                    <button
                      onClick={rotateCards}
                      className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-green-600 backdrop-blur-md transition hover:scale-105 hover:bg-white"
                    >
                      {card.buttonText}
                      <span>→</span>
                    </button>
                  </div>
                </div>

                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute bottom-0 right-0 h-[80%] w-[100%] object-contain transition duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeDiscountProducts;