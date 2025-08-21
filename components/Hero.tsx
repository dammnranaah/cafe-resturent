"use client"
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <div className="container pt-28 md:pt-36 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-display text-4xl md:text-6xl leading-tight heading-underline inline-block text-white"
      >
        Rana Café
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mt-4 text-white/90 max-w-2xl mx-auto"
      >
        Where every cup tells a story and every plate is a craft.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex items-center justify-center gap-4"
      >
        <a href="#menu" className="px-6 py-3 rounded-full bg-coffee-800 text-cream hover:bg-coffee-700 transition-colors shadow-soft focus:outline-none focus:ring-2 focus:ring-white/70">View Menu</a>
        <a href="#reservation" className="px-6 py-3 rounded-full border border-white/70 text-white hover:border-white hover:text-white/95 transition-colors backdrop-blur-[2px] focus:outline-none focus:ring-2 focus:ring-white/70">Book a Table</a>
      </motion.div>
    </div>
  )
}
