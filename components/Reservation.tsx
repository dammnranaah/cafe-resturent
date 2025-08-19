"use client"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Button, Input, Label, Select, Textarea, Card } from './ui'

const schema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email(),
  phone: z.string().min(6),
  date: z.string().min(1),
  time: z.string().min(1),
  guests: z.string().min(1),
  message: z.string().optional(),
})

type Values = z.infer<typeof schema>

export const Reservation = () => {
  const [submitted, setSubmitted] = useState<null | Values>(null)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { guests: '2', time: '19:00' }
  })

  const onSubmit = async (values: Values) => {
    await new Promise(r => setTimeout(r, 600))
    setSubmitted(values)
    reset()
  }

  return (
    <div className="container">
      <h2 className="font-display text-3xl md:text-4xl heading-underline mb-8">Reservation</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" {...register('name')} />
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" {...register('email')} />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="+1 234 567 890" {...register('phone')} />
              {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" {...register('date')} />
                {errors.date && <p className="text-xs text-red-600 mt-1">{errors.date.message}</p>}
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Select id="time" {...register('time')}>
                  {['17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30'].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </Select>
                {errors.time && <p className="text-xs text-red-600 mt-1">{errors.time.message}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="guests">Guests</Label>
              <Select id="guests" {...register('guests')}>
                {Array.from({ length: 10 }, (_, i) => `${i+1}`).map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </Select>
              {errors.guests && <p className="text-xs text-red-600 mt-1">{errors.guests.message}</p>}
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Any special requests?" {...register('message')} />
            </div>
            <div className="md:col-span-2 flex items-center gap-3">
              <Button type="submit" disabled={isSubmitting}>Book a Table</Button>
              {submitted && (
                <span className="text-sm text-coffee-700">Thanks {submitted.name}! We will confirm via email.</span>
              )}
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  )
}
