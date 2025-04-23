'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-secondary">
            PRIME
          </Link>        
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/hotels" className="text-dark-gray hover:text-primary transition-colors">
              Hotels & Resorts
            </Link>      
            
            <Link href="/dining" className="text-dark-gray hover:text-primary transition-colors">
              Dining
            </Link>
            <Link href="/wellness" className="text-dark-gray hover:text-primary transition-colors">
              Wellness
            </Link>
            <Link href="/meetings" className="text-dark-gray hover:text-primary transition-colors">
              Meetings
            </Link>
            <Link href="/events" className="text-dark-gray hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="/loyalty" className="text-dark-gray hover:text-primary transition-colors">
              Loyalty program
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-dark-gray hover:text-primary transition-colors">
              Sign in
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-dark-gray hover:text-primary transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="relative h-full">
          <Image
            src="/images/hero-bg.jpg"
            alt="Luxury Hotel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <motion.h1 
              className="text-6xl md:text-8xl font-playfair mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              PRIME HOTELS
            </motion.h1>
            <motion.p 
              className="text-3xl md:text-4xl font-script text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              to Relax
            </motion.p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <select className="col-span-1 p-2 border rounded focus:border-primary focus:ring-1 focus:ring-primary">
                <option>Select Hotel</option>
                <option>Prime Cairo</option>
                <option>Prime Alexandria</option>
                <option>Prime Sharm</option>
              </select>
              <input
                type="date"
                className="col-span-1 p-2 border rounded focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Check In"
              />
              <input
                type="date"
                className="col-span-1 p-2 border rounded focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Check Out"
              />
              <select className="col-span-1 p-2 border rounded focus:border-primary focus:ring-1 focus:ring-primary">
                <option>2 Adults, 0 Children</option>
                <option>1 Adult</option>
                <option>2 Adults, 1 Child</option>
                <option>2 Adults, 2 Children</option>
              </select>
              <button className="col-span-1 bg-primary text-white p-2 rounded hover:bg-opacity-90 transition-colors">
                Find Rooms
              </button>
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
