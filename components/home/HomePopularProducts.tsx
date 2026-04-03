import React from "react";
import Container from "../Container";
import api from "@/utils/api";
import { Eye, Heart, ShoppingBag } from "lucide-react";

type ProductType = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  sale?: string;
  active?: boolean;
};

const mockProducts: ProductType[] = [
  {
    id: 1,
    name: "Green Apple",
    price: 14.99,
    oldPrice: 20.99,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1200&auto=format&fit=crop",
    sale: "Sale 50%",
  },
  {
    id: 2,
    name: "Fresh Orange",
    price: 20.0,
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Chinese cabbage",
    price: 12.0,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1200&auto=format&fit=crop",
    active: true,
  },
  {
    id: 4,
    name: "Green Lettuce",
    price: 9.0,
    image:
      "https://images.unsplash.com/photo-1622205313162-be1d5712a43b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Eggplant",
    price: 34.0,
    image:
      "https://images.unsplash.com/photo-1603048719539-9ecb4b7f6b7b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Big Potatoes",
    price: 20.0,
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Corn",
    price: 20.0,
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Fresh Cauliflower",
    price: 12.0,
    image:
      "https://images.unsplash.com/photo-1613743990305-3e6e4ec3b4dc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Green Capsicum",
    price: 9.0,
    oldPrice: 20.99,
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop",
    sale: "Sale 50%",
  },
  {
    id: 10,
    name: "Green Chili",
    price: 34.0,
    image:
      "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=1200&auto=format&fit=crop",
  },
];

const HomePopularProducts = async () => {
  let products: ProductType[] = mockProducts;

  try {
    const response = await api({ url: "products" });
    if (response?.data?.length) {
      products = response.data;
    }
  } catch (error) {
    console.log("API ishlamadi, mock data ishlatildi:", error);
  }

  return (
    <section className="py-6 sm:py-8 lg:py-14">
      <Container className="">
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[2px] text-green-600">
                Popular Products
              </p>
              <h2 className="mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                Fresh Grocery Items
              </h2>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm over:ring-green-500">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {products.slice(0, 10).map((product) => (
                <div
                  key={product.id}
                  className="group relative border-b border-r border-gray-200 bg-white transition-all duration-300 hover:z-10 hover:shadow-xl hover:ring-2 hover:ring-green-500"
                >
                  {product.sale && (
                    <span className="absolute left-2 top-2 sm:left-3 sm:top-3 z-20 rounded-md bg-red-500 px-2 py-1 text-[9px] sm:text-[10px] font-semibold text-white">
                      {product.sale}
                    </span>
                  )}

                  <div className="relative flex h-[120px] sm:h-[150px] md:h-[170px] lg:h-[190px] items-center justify-center overflow-hidden bg-[#f8f8f8]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain p-2 sm:p-3 md:p-4 transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute right-2 top-2 sm:right-3 sm:top-3 flex flex-col gap-1.5 sm:gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
                      <button className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-green-500 hover:text-white">
                        <Heart size={14} />
                      </button>
                      <button className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-green-500 hover:text-white">
                        <Eye size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 p-2.5 sm:p-3 md:p-4">
                    <h3 className="line-clamp-1 text-xs sm:text-sm md:text-[15px] font-medium text-gray-800 transition-colors duration-300 group-hover:text-green-600">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                      <span className="text-xs sm:text-sm md:text-base font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 line-through">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between gap-2 sm:gap-3">
                      <div className="text-[10px] sm:text-xs md:text-sm tracking-[1px] text-yellow-500">
                        ★★★★☆
                      </div>

                      <button className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition duration-300 group-hover:border-green-500 group-hover:bg-green-500 group-hover:text-white">
                        <ShoppingBag size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomePopularProducts;