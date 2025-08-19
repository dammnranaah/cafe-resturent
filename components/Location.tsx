"use client"
import { motion } from 'framer-motion'
import { Card } from './ui'

export const Location = () => {
  return (
    <div className="container">
      <h2 className="font-display text-3xl md:text-4xl heading-underline mb-8">Find Us</h2>
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full overflow-hidden">
            <div className="aspect-video md:h-full">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.95373631531658!3d-37.81627974201096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8b4dc0c0!2sCafe!5e0!3m2!1sen!2s!4v1690000000000"
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
            <div className="space-y-3">
              <div>
                <div className="text-sm uppercase tracking-wide text-coffee-700/70">Address</div>
                <div className="font-medium">123 Aurum Street, Coffee District</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-coffee-700/70">Phone</div>
                <div className="font-medium">+1 (555) 123-4567</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-coffee-700/70">Email</div>
                <div className="font-medium">hello@aurumcafe.com</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
