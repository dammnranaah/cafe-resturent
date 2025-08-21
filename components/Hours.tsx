"use client"
import { motion } from 'framer-motion'
import { weeklyHours } from '@/lib/hours'
import { Card } from './ui'

export const Hours = () => {
  return (
    <motion.div 
      className="container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2 
        className="font-display text-3xl md:text-4xl heading-underline mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >Opening Hours</motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {weeklyHours.map((d, i) => (
          <motion.div
            key={d.day}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
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
    </motion.div>
  )
}
