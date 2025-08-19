"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

const photos = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1200&auto=format&fit=crop'
]

export const About = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl heading-underline">Our Story</h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-coffee-700"
          >
            Born from a passion for specialty coffee and seasonal ingredients, Aurum Café blends
            warm hospitality with contemporary tastes. From morning brews to evening bites, we
            craft experiences worth savoring.
          </motion.p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {photos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative h-36 md:h-48 rounded-xl overflow-hidden shadow-soft"
            >
              <Image src={src} alt="café" fill className="object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
