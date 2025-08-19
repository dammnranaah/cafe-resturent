"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { menu } from '@/lib/menu'
import { Card } from './ui'

export const Menu = () => {
  const sections = [
    { key: 'starters', title: 'Starters' },
    { key: 'mains', title: 'Main Dishes' },
    { key: 'desserts', title: 'Desserts' },
    { key: 'drinks', title: 'Drinks' },
  ] as const

  return (
    <div className="container">
      <h2 className="font-display text-3xl md:text-4xl heading-underline mb-8">Our Menu</h2>

      <div className="space-y-12">
        {sections.map((s, idx) => (
          <section key={s.key}>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="text-2xl font-semibold mb-4"
            >
              {s.title}
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {menu[s.key].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <Card className="overflow-hidden">
                    <div className="relative h-40">
                      <Image src={item.image} alt={item.name} fill className="object-cover" loading="lazy" />
                      {item.special && (
                        <span className="absolute top-3 right-3 bg-gold text-white text-xs px-2 py-1 rounded-full shadow">Special</span>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-semibold">{item.name}</h4>
                        <span className="text-coffee-700">{item.price}</span>
                      </div>
                      <p className="text-sm text-coffee-700/80 mt-1">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
