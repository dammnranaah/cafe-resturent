"use client"
import { motion } from 'framer-motion'
import { weeklyHours } from '@/lib/hours'
import { Card } from './ui'

export const Hours = () => {
  return (
    <div className="container">
      <h2 className="font-display text-3xl md:text-4xl heading-underline mb-8">Opening Hours</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {weeklyHours.map((d, i) => (
          <motion.div
            key={d.day}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
          >
            <Card className="p-5">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">{d.day}</div>
                <div className="text-coffee-700">
                  {d.closed ? 'Closed' : (
                    <span>
                      {d.open} – {d.close}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
