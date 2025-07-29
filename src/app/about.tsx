import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Slice Slice Baby STL',
  description: 'Learn about our pizza restaurant, our team, and our commitment to quality ingredients.',
};

const teamMembers = [
  {
    name: "Marco Rossi",
    role: "Head Chef",
    image: "/images/team/chef.jpg",
    bio: "Marco has been perfecting his pizza craft for over 15 years, trained in Naples, Italy."
  },
  {
    name: "Sophia Garcia",
    role: "Owner",
    image: "/images/team/owner.jpg",
    bio: "Sophia founded Slice Slice Baby STL in 2015 with a vision to bring authentic pizza to St. Louis."
  },
  {
    name: "James Wilson",
    role: "Manager",
    image: "/images/team/manager.jpg",
    bio: "James ensures everything runs smoothly and every customer leaves happy."
  }
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Slice Slice Baby STL</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our story, our passion, and our commitment to creating the best pizza experience in St. Louis.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image 
                src="/images/restaurant.jpg"
                alt="Our restaurant" 
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="mb-4">
                Founded in 2015, Slice Slice Baby STL began as a small family-owned pizzeria with a big dream: to serve the most delicious, authentic pizza in St. Louis.
              </p>
              <p className="mb-4">
                We started with just four tables and a small wood-fired oven, but our commitment to quality ingredients and perfect crusts quickly earned us a loyal following.
              </p>
              <p>
                Today, we've expanded to a larger location, but we still make each pizza with the same care and attention to detail that put us on the map. Our dough is still made fresh daily, our sauce is still made from San Marzano tomatoes, and we still source the freshest local ingredients whenever possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p>We never compromise on ingredients. From our imported Italian flour to our locally-sourced vegetables, quality comes first in everything we make.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Community Connection</h3>
              <p>We believe in being more than just a restaurant. We're part of the St. Louis community, supporting local causes and creating a welcoming space for all.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Tradition & Innovation</h3>
              <p>We respect pizza traditions while not being afraid to innovate. Our menu balances classic recipes with creative new flavor combinations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}