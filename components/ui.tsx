import * as React from 'react'
import { clsx } from 'clsx'

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' }
>(({ className, variant = 'default', ...props }, ref) => (
  <button
    ref={ref}
    className={clsx(
      'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-50 disabled:pointer-events-none',
      variant === 'default' && 'bg-coffee-800 text-cream hover:bg-coffee-700',
      variant === 'outline' && 'border border-coffee-300 hover:border-gold hover:text-gold',
      'px-5 py-2.5 shadow-soft',
      className
    )}
    {...props}
  />
))
Button.displayName = 'Button'

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={clsx(
        'flex h-11 w-full rounded-xl border border-coffee-200 bg-white/80 px-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-coffee-700/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
)
Input.displayName = 'Input'

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={clsx(
        'flex min-h-[100px] w-full rounded-xl border border-coffee-200 bg-white/80 px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-coffee-700/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
)
Textarea.displayName = 'Textarea'

export const Label = ({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={clsx('text-sm font-medium text-coffee-800', className)} {...props} />
)

export const Select = ({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    className={clsx(
      'h-11 w-full rounded-xl border border-coffee-200 bg-white/80 px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
      className
    )}
    {...props}
  >
    {children}
  </select>
)

export const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx('rounded-xl border border-coffee-100 bg-cream/60 shadow-soft', className)} {...props} />
)
