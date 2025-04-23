'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-secondary">
            PRIME
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/hotels" className="text-dark-gray hover:text-primary transition-colors">
              Hotels & Resorts
            </Link>
            <Link href="/residences" className="text-dark-gray hover:text-primary transition-colors">
              Residences
            </Link>
            <Link href="/dining" className="text-dark-gray hover:text-primary transition-colors">
              Dining
            </Link>
            <Link href="/spa" className="text-dark-gray hover:text-primary transition-colors">
              Spa
            </Link>
            <Link href="/meetings" className="text-dark-gray hover:text-primary transition-colors">
              Meetings
            </Link>
            <Link href="/experiences" className="text-dark-gray hover:text-primary transition-colors">
              Experiences
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-dark-gray hover:text-primary transition-colors">
              EN
            </button>
            <Link href="/signin" className="text-dark-gray hover:text-primary transition-colors">
              Sign in
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/hero-bg.jpg"
          alt="Luxury Hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
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
            className="text-2xl md:text-3xl font-script"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            to in Relax
          </motion.p>
        </div>

        {/* Booking Form */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <select className="col-span-1 p-2 border rounded">
                <option>Select Hotel</option>
                {/* Add hotel options */}
              </select>
              <input
                type="date"
                className="col-span-1 p-2 border rounded"
                placeholder="Check In"
              />
              <input
                type="date"
                className="col-span-1 p-2 border rounded"
                placeholder="Check Out"
              />
              <select className="col-span-1 p-2 border rounded">
                <option>2 Adults</option>
                {/* Add guest options */}
              </select>
              <button className="col-span-1 bg-primary text-white p-2 rounded hover:bg-opacity-90 transition-colors">
                Find Rooms
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Exclusive Section */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair mb-6">2025 EXCLUSIVE</h2>
              <p className="text-dark-gray mb-8">
                Experience luxury like never before with our exclusive 2025 packages. 
                Book now and enjoy special rates, complimentary upgrades, and unique 
                experiences designed for our distinguished guests.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/exclusive-2025.jpg"
                alt="Exclusive 2025"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCING Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/luxury-room.jpg"
                alt="Luxury Room"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair mb-6">INTRODUCING</h2>
              <p className="text-dark-gray mb-8">
                Discover our newly renovated luxury rooms and suites. 
                Each space is thoughtfully designed to provide the ultimate 
                comfort and sophistication for our guests.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded hover:bg-opacity-90 transition-colors">
                Explore Rooms
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOD Section */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-playfair text-center mb-12">
            FOOD AT ITS <span className="font-script text-primary">Best</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative h-[300px] group overflow-hidden rounded-lg">
                <Image
                  src={`/food-${item}.jpg`}
                  alt={`Gourmet Food ${item}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair mb-6">
                FUTURE <span className="font-script text-primary">Events</span>
              </h2>
              <p className="text-dark-gray mb-8">
                Plan your next event in our sophisticated venues. 
                From intimate gatherings to grand celebrations, 
                our spaces can accommodate any occasion.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded hover:bg-opacity-90 transition-colors">
                Plan Event
              </button>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/event-hall.jpg"
                alt="Event Hall"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">PRIME</h3>
              <p className="text-gray-400">
                Luxury and comfort redefined.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-primary">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-primary">Contact</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-primary">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Luxury Avenue</li>
                <li>New York, NY 10001</li>
                <li>+1 234 567 890</li>
                <li>info@primehotels.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded bg-dark-gray text-white"
                />
                <button className="bg-primary px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
