"use client";

import ImageFallback from "@/helpers/ImageFallback";
import SeoMeta from "@/partials/SeoMeta";
import menuData from "@/data/menu.json";
import { useState } from "react";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { pizzas, toppings, sides, drinks } = menuData;

  const filteredPizzas = activeCategory === "all" 
    ? pizzas 
    : pizzas.filter(pizza => pizza.category === activeCategory);

  return (
    <>
      <SeoMeta title="Our Menu | Slice Slice Baby" />
      <section className="section pt-14">
        <div className="container">
          <div className="text-center">
            <h1 className="font-heading text-4xl lg:text-5xl text-primary mb-8">Our Menu</h1>
            <p className="text-lg mb-12 max-w-2xl mx-auto">
              All our pizzas are made with fresh, locally-sourced ingredients and baked to perfection in our authentic stone oven.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap gap-3">
              <button 
                className={`px-4 py-2 rounded-full ${activeCategory === 'all' ? 'bg-primary text-white' : 'bg-light'}`}
                onClick={() => setActiveCategory('all')}
              >
                All Pizzas
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${activeCategory === 'classic' ? 'bg-primary text-white' : 'bg-light'}`}
                onClick={() => setActiveCategory('classic')}
              >
                Classic
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${activeCategory === 'vegetarian' ? 'bg-primary text-white' : 'bg-light'}`}
                onClick={() => setActiveCategory('vegetarian')}
              >
                Vegetarian
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${activeCategory === 'specialty' ? 'bg-primary text-white' : 'bg-light'}`}
                onClick={() => setActiveCategory('specialty')}
              >
                Specialty
              </button>
            </div>
          </div>

          {/* Pizzas */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {filteredPizzas.map((pizza) => (
              <div
                className="rounded-xl bg-white p-5 shadow-lg"
                key={`pizza-${pizza.id}`}
              >
                <ImageFallback
                  className="w-full h-48 object-cover rounded-lg"
                  src={pizza.image}
                  width={300}
                  height={200}
                  alt={pizza.name}
                />
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <h3 className="h4 font-heading text-primary">{pizza.name}</h3>
                    <span className="text-lg font-bold">${pizza.price.toFixed(2)}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{pizza.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Toppings */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-primary mb-8 text-center">Extra Toppings</h2>
            <div className="bg-white shadow-lg rounded-xl p-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {toppings.map((topping, index) => (
                  <div key={`topping-${index}`} className="flex justify-between items-center">
                    <span>{topping.name}</span>
                    <span className="font-medium">${topping.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sides */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-primary mb-8 text-center">Sides</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {sides.map((side, index) => (
                <div
                  className="rounded-xl bg-white p-4 shadow-lg"
                  key={`side-${index}`}
                >
                  <ImageFallback
                    className="w-full h-32 object-cover rounded-lg"
                    src={side.image}
                    width={200}
                    height={150}
                    alt={side.name}
                  />
                  <div className="mt-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-heading text-primary">{side.name}</h3>
                      <span className="font-bold">${side.price.toFixed(2)}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{side.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Drinks */}
          <div>
            <h2 className="font-heading text-3xl text-primary mb-8 text-center">Drinks</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {drinks.map((drink, index) => (
                <div
                  className="rounded-xl bg-white p-4 shadow-lg"
                  key={`drink-${index}`}
                >
                  <ImageFallback
                    className="w-full h-32 object-cover rounded-lg"
                    src={drink.image}
                    width={200}
                    height={150}
                    alt={drink.name}
                  />
                  <div className="mt-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-heading text-primary">{drink.name}</h3>
                      <span className="font-bold">${drink.price.toFixed(2)}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{drink.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
