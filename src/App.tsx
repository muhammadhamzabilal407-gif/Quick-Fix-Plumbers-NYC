/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  Clock, 
  MapPin, 
  Star, 
  CheckCircle2, 
  Wrench, 
  Droplets, 
  Thermometer, 
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
  PhoneCall
} from "lucide-react";
import { useState } from "react";

const SERVICES = [
  {
    title: "Emergency Repairs",
    description: "Burst pipes, major leaks, and urgent plumbing issues resolved 24/7.",
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Drain Cleaning",
    description: "Professional clearing of clogged drains, sinks, and main sewer lines.",
    icon: <Droplets className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Water Heaters",
    description: "Installation, repair, and maintenance of all water heater types.",
    icon: <Thermometer className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Residential Plumbing",
    description: "Full-service plumbing for homes, from faucets to full repiping.",
    icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Commercial Services",
    description: "Specialized plumbing solutions for NYC businesses and restaurants.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Leak Detection",
    description: "Advanced technology to find hidden leaks before they cause damage.",
    icon: <Droplets className="w-6 h-6 text-blue-600" />,
  },
];

const REVIEWS = [
  {
    name: "John D.",
    rating: 5,
    text: "Saved us at 3 AM when a pipe burst! Fast, professional, and fair pricing.",
    date: "2 weeks ago"
  },
  {
    name: "Sarah M.",
    rating: 4,
    text: "Great service for our kitchen renovation. Very knowledgeable team.",
    date: "1 month ago"
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "The best plumbers in NYC. They actually show up when they say they will.",
    date: "3 weeks ago"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const businessInfo = {
    name: "24/7 Quick Fix Plumbers NYC",
    phone: "+1 332-316-7269",
    address: "71 W 12th St, New York, NY 10011",
    rating: 4.5,
    reviewCount: 25,
    hours: "Open 24 hours"
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Floating Call Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={`tel:${businessInfo.phone}`}
          className="flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-full shadow-2xl"
        >
          <PhoneCall className="w-8 h-8" />
        </motion.a>
      </div>

      {/* Header/Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
                Quick Fix <span className="text-blue-600">Plumbers</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</a>
              <a href="#reviews" className="text-sm font-medium hover:text-blue-600 transition-colors">Reviews</a>
              <div className="flex items-center gap-4 ml-4">
                <a 
                  href={`tel:${businessInfo.phone}`}
                  className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {businessInfo.phone}
                </a>
                <a 
                  href={`tel:${businessInfo.phone}`}
                  className="bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20"
                >
                  EMERGENCY CALL
                </a>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">About</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Reviews</a>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
              <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-2 text-blue-600 font-bold">
                <Phone className="w-5 h-5" />
                {businessInfo.phone}
              </a>
              <a href={`tel:${businessInfo.phone}`} className="bg-orange-600 text-white text-center py-3 rounded-xl font-bold">
                EMERGENCY CALL NOW
              </a>
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-16 pb-24 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50/50 rounded-full blur-3xl -ml-48 -mb-48"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Clock className="w-4 h-4" />
                  Available 24 Hours a Day, 7 Days a Week
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
                  NYC's Most Reliable <br />
                  <span className="text-blue-600">Emergency Plumbers</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                  Don't let a leak ruin your day. We provide fast, professional plumbing solutions across New York City. Licensed, insured, and ready to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`tel:${businessInfo.phone}`}
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 group"
                  >
                    Call Now: {businessInfo.phone}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex items-center gap-3 px-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                          <img 
                            src={`https://picsum.photos/seed/user${i}/100/100`} 
                            alt="User" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-orange-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-bold text-slate-900">{businessInfo.rating}</span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">{businessInfo.reviewCount} Google Reviews</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img 
                    src="https://picsum.photos/seed/plumbing/800/600" 
                    alt="Professional Plumber" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      <span className="text-sm font-medium">{businessInfo.address}</span>
                    </div>
                    <p className="text-lg font-bold">Serving all of Manhattan & Brooklyn</p>
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden sm:block">
                  <div className="text-center">
                    <p className="text-3xl font-black text-blue-600">30</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Minute</p>
                    <p className="text-xs font-bold text-slate-900 uppercase">Response</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Years Experience", value: "15+" },
                { label: "Happy Clients", value: "5k+" },
                { label: "Licensed Plumbers", value: "12" },
                { label: "Response Time", value: "< 30m" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-3xl font-black text-slate-900 mb-1">{stat.value}</p>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
              <p className="text-4xl font-black text-slate-900 mb-6">Comprehensive Plumbing Solutions</p>
              <p className="text-lg text-slate-600">From minor leaks to major installations, our expert team handles it all with precision and care.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden aspect-square">
                  <img 
                    src="https://picsum.photos/seed/tool/600/600" 
                    alt="Tools" 
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-blue-600 p-8 rounded-3xl shadow-2xl">
                  <p className="text-4xl font-black mb-1">24/7</p>
                  <p className="text-sm font-bold uppercase tracking-widest">Emergency Support</p>
                </div>
              </div>

              <div>
                <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
                <p className="text-4xl font-black mb-8">NYC's Trusted Plumbing Partner</p>
                
                <div className="space-y-6">
                  {[
                    { title: "Licensed & Insured", desc: "Full peace of mind with professional certification and comprehensive insurance." },
                    { title: "Upfront Pricing", desc: "No hidden fees. We provide clear, honest quotes before any work begins." },
                    { title: "Guaranteed Work", desc: "We stand behind our repairs with a 100% satisfaction guarantee." },
                    { title: "Local Experts", desc: "Deep knowledge of NYC's unique plumbing systems and building codes." },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <a 
                    href={`tel:${businessInfo.phone}`}
                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all"
                  >
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
                <p className="text-4xl font-black text-slate-900">What Our Customers Say</p>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-right">
                  <div className="flex items-center gap-1 text-orange-500 justify-end">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className={`w-4 h-4 ${i === 5 ? 'fill-none' : 'fill-current'}`} />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-slate-900">{businessInfo.rating} / 5.0 Rating</p>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                  G
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {REVIEWS.map((review, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative">
                  <div className="flex items-center gap-1 text-orange-500 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-6">"{review.text}"</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900">{review.name}</span>
                    <span className="text-xs text-slate-400 font-medium">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Need a Plumber Right Now?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Our emergency team is on standby 24/7. Call us now and we'll be at your door in 30 minutes or less.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={`tel:${businessInfo.phone}`}
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all shadow-2xl flex items-center justify-center gap-3"
              >
                <PhoneCall className="w-6 h-6" />
                {businessInfo.phone}
              </a>
              <button className="bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-800 transition-all border border-blue-500">
                Book Online
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-slate-900">
                  Quick Fix <span className="text-blue-600">Plumbers</span>
                </span>
              </div>
              <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                Providing top-tier plumbing services to the New York City community for over 15 years. Available 24/7 for all your emergency needs.
              </p>
              <div className="flex gap-4">
                {/* Social icons could go here */}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#reviews" className="hover:text-blue-600 transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-500 font-medium">{businessInfo.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href={`tel:${businessInfo.phone}`} className="text-slate-500 font-medium hover:text-blue-600 transition-colors">
                    {businessInfo.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-500 font-medium">{businessInfo.hours}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-200 text-center">
            <p className="text-slate-400 text-sm font-medium">
              © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
