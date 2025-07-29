import Image from 'next/image'
import Link from 'next/link'
import FeaturedPizzas from '@/app/components/featuredPizzas'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-pizza.jpg"
            alt="Delicious pizza"
            fill
            priority
            style={{ objectFit: 'cover' }}
            quality={90}
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Slice Slice Baby STL
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-lg">
            The best handcrafted pizza in St. Louis, made with fresh ingredients and baked to perfection.
          </p>
          <Link 
            href="/menu" 
            className="btn btn-primary text-lg px-8 py-3 rounded-full"
          >
            View Our Menu
          </Link>
        </div>
      </section>
      
      {/* Featured Pizzas */}
      <FeaturedPizzas />
      
      {/* About Section Preview */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image 
                src="/images/pizza-chef.jpg"
                alt="Our pizza chef"
                width={500}
                height={350}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg mb-6">
                Founded in 2015, Slice Slice Baby STL started with a simple mission: create the most delicious, authentic pizza in St. Louis using only the freshest ingredients.
              </p>
              <Link href="/about" className="text-red-600 font-semibold hover:text-red-800 transition">
                Learn more about us →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to satisfy your pizza cravings?</h2>
          <p className="text-xl mb-8">Visit us today or give us a call to place your order!</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/location" className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition">
              Find Our Location
            </Link>
            <a href="tel:314-555-1234" className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 font-bold py-3 px-8 rounded-full text-lg transition">
              Call (314) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  )
}