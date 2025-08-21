"use client"
import { motion } from 'framer-motion'
import { Card } from './ui'

export const Location = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-display text-3xl md:text-4xl heading-underline mb-8">Find Us</h2>
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full overflow-hidden ring-1 ring-black/5 shadow-md">
            <div className="aspect-video md:h-full">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps?q=Mirpur%20Rd%2C%20Dhaka%201205&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-6 h-full">
            <div className="space-y-4">
              <div>
                <div className="text-sm uppercase tracking-wide text-coffee-700/70">Address</div>
                <div className="font-medium">Mirpur Rd, Dhaka 1205</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-coffee-700/70">Phone</div>
                <a href="tel:+15551234567" className="font-medium text-coffee-900 hover:text-coffee-700">+1 (555) 123-4567</a>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-coffee-700/70">Email</div>
                <a href="mailto:support@ranacafe.com" className="font-medium text-coffee-900 hover:text-coffee-700">support@ranacafe.com</a>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Mirpur+Rd%2C+Dhaka+1205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-coffee-900 text-white px-4 py-2 text-sm hover:bg-coffee-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coffee-700"
                >
                  Get Directions
                </a>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 rounded-md border border-coffee-900 text-coffee-900 px-4 py-2 text-sm hover:bg-coffee-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coffee-700"
                >
                  Call Us
                </a>
                <a
                  href="mailto:support@ranacafe.com"
                  className="inline-flex items-center gap-2 rounded-md border border-coffee-900 text-coffee-900 px-4 py-2 text-sm hover:bg-coffee-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coffee-700"
                >
                  Email Us
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
