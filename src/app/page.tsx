'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useState } from 'react';

const slides = [
  {
    image: '/images/Artboard 2 copy 7@4x1111111111 1.png',
    title: 'PRIME HOTELS',
    subtitle: 'to Relax',
    location: '',
    gradient: {
      opacity: 0.85,
      background: 'linear-gradient(180deg, #364C76 0%, #364C76 20%, #465F96 40%, #465F96 60%, #9CA7DE 80%, #9CA7DE 100%)'
    }
  },
  {
    image: '/images/Layer عع 2.png',
    title: 'PRIME AL MINA',
    subtitle: 'Hotel',
    location: 'Al-Balad District, King Fahd Road,\nJeddah, Saudi Arabia',
    gradient: {
      opacity: 0.75,
      background: 'linear-gradient(180deg, rgba(27, 55, 100, 0.99) 0%, rgba(54, 76, 118, 0.95) 15%, rgba(70, 95, 150, 0.5) 45%, rgba(156, 167, 222, 0.15) 75%, rgba(156, 167, 222, 0) 100%)'
    }
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [checkIn, setCheckIn] = useState('16, FEB, 2025');
  const [checkOut, setCheckOut] = useState('24, FEB, 2025');
  const [guests, setGuests] = useState('2 GUESTS, 1 ROOM');

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[85vh]">
        <div className="relative h-full overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-full"
            >
              <Image
                src={slides[currentSlide].image}
                alt="Hotel background"
                layout="fill"
                objectFit="cover"
                objectPosition="center 30%"
                quality={100}
                priority
              />
              <motion.div 
                className="absolute inset-0" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  ...slides[currentSlide].gradient,
                  mixBlendMode: 'hard-light'
                }} 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
              
              {/* Text Content */}
              <div className="absolute top-[32%] left-[10%] text-white">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[5rem] font-playfair font-light tracking-wider mb-2"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-[3.5rem] font-script text-[#E4A853] -mt-4"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                {slides[currentSlide].location && (
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-6 text-lg font-light opacity-90 whitespace-pre-line"
                  >
                    {slides[currentSlide].location}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Search Form */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-[75rem] p-5">
            <div className="bg-white rounded-lg shadow-xl border-b-[3px] border-[#1B3764]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-7 flex-1">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <select className="bg-transparent border-none text-sm focus:ring-0 font-medium">
                      <option>All Hotels</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 border-l pl-7">
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <input type="text" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="bg-transparent border-none text-sm focus:ring-0 font-medium w-30" />
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 border-l pl-7">
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <input type="text" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="bg-transparent border-none text-sm focus:ring-0 font-medium w-30" />
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 border-l pl-7">
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <input type="text" value={guests} onChange={(e) => setGuests(e.target.value)} className="bg-transparent border-none text-sm focus:ring-0 font-medium w-38" />
                  </div>
                </div>
                <button className="bg-[#1B3764] text-white px-9 py-3.5 rounded hover:bg-[#1B3764]/90 transition-colors text-sm font-medium">
                  Find Rooms
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Offer Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sm text-primary mb-2">FEATURED OFFER</h3>
              <h2 className="text-4xl md:text-5xl font-playfair mb-6">2025 EXCLUSIVE</h2>
              <p className="text-dark-gray mb-8">
                Make your 2025 escape unforgettable with early booking benefits at our hotels. From 15 March to 30 April 2025, book and enjoy 20% off your stay. Plus, enjoy daily breakfast on us. Book before 31 March and get early bird benefits today.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded hover:bg-opacity-90 transition-colors">
                Discover More
              </button>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/exclusive-2025.jpg"
                alt="Exclusive 2025"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introducing Section */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/luxury-room.jpg"
                alt="Luxury Room"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair mb-6">
                INTRODUCING
                <span className="block text-3xl text-primary font-script mt-2">Prime Hotels</span>
              </h2>
              <p className="text-dark-gray mb-8">
                Where luxury meets beauty in an elevated accommodation experience. Enjoy spacious rooms, 
                fine dining restaurants, and state-of-the-art amenities for luxury.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded hover:bg-opacity-90 transition-colors">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-playfair text-center mb-4">
            FOOD AT ITS
          </h2>
          <p className="text-3xl text-primary font-script text-center mb-12">Best</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="relative h-[250px] overflow-hidden rounded-lg">
                <Image
                  src="/images/food-1.jpg"
                  alt="Fine Dining"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <p className="text-dark-gray text-center">
                Find the joy in culinary delights that exceed your expectations.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative h-[250px] overflow-hidden rounded-lg">
                <Image
                  src="/images/food-2.jpg"
                  alt="Gourmet Experience"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <p className="text-dark-gray text-center">
                Experience world-class dining with our master chefs.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative h-[250px] overflow-hidden rounded-lg">
                <Image
                  src="/images/food-3.jpg"
                  alt="Restaurant Ambiance"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <p className="text-dark-gray text-center">
                Immerse yourself in the perfect blend of taste and ambiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Events Section */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair mb-2">
                FUTURE
              </h2>
              <p className="text-3xl text-primary font-script mb-6">Gatherings</p>
              <p className="text-dark-gray mb-8">
                Set down your bag, discover the new and exciting events
                and let your heart soar with memories and experiences
                that will stay with you forever.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded hover:bg-opacity-90 transition-colors">
                Explore
              </button>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/event-hall.jpg"
                alt="Event Hall"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ABOUT PRIME HOTELS</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-dark-gray hover:text-primary">About Us</Link></li>
                <li><Link href="/careers" className="text-dark-gray hover:text-primary">Careers</Link></li>
                <li><Link href="/contact" className="text-dark-gray hover:text-primary">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">FAQ</h3>
              <ul className="space-y-2">
                <li><Link href="/faq" className="text-dark-gray hover:text-primary">Get Help</Link></li>
                <li><Link href="/terms" className="text-dark-gray hover:text-primary">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-dark-gray hover:text-primary">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">CONTACT US</h3>
              <ul className="space-y-2">
                <li className="text-dark-gray">Email: info@primehotels.com</li>
                <li className="text-dark-gray">Phone: +1 234 567 890</li>
                <li className="text-dark-gray">Address: 123 Luxury Street</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">NEWSLETTER</h3>
              <p className="text-dark-gray mb-4">Sign up to receive offers and updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 p-2 border rounded-l focus:outline-none focus:border-primary"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-r hover:bg-opacity-90">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-dark-gray">
            <p>&copy; {new Date().getFullYear()} Prime Hotels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
