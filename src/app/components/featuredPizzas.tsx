import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const featuredPizzas = [
  {
    id: 1,
    name: "The Classic Margherita",
    description: "Fresh mozzarella, basil, and our signature tomato sauce on a perfect crust.",
    image: "/images/margherita.jpg"
  },
  {
    id: 2,
    name: "BBQ Chicken Deluxe",
    description: "Grilled chicken, red onions, and cilantro with our house-made BBQ sauce.",
    image: "/images/bbq-chicken.jpg"
  },
  {
    id: 3,
    name: "Veggie Supreme",
    description: "Bell peppers, mushrooms, onions, black olives, and fresh tomatoes.",
    image: "/images/veggie.jpg"
  }
];

const FeaturedPizzas = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Featured Pizzas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPizzas.map((pizza) => (
            <div key={pizza.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
              <div className="relative h-60">
                <Image
                  src={pizza.image}
                  alt={pizza.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{pizza.name}</h3>
                <p className="text-gray-600 mb-4">{pizza.description}</p>
                <Link href="/menu" className="text-red-600 font-medium hover:text-red-800 transition">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/menu" className="btn btn-outline inline-block">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPizzas;