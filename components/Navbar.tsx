"use client"
import Link from 'next/link'
import { useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#hours', label: 'Hours' },
    { href: '#reservation', label: 'Reservation' },
    { href: '#location', label: 'Location' },
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-cream/60 border-b border-coffee-100">
      <div className="container flex items-center justify-between py-3">
        <Link href="#" className="font-display text-2xl">Aurum Café</Link>
        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#menu" className="hidden md:inline-block px-4 py-2 rounded-full bg-coffee-700 text-cream hover:bg-coffee-600 transition-colors">View Menu</a>
        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <MenuIcon />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-coffee-100 bg-cream">
          <div className="container py-3 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="py-2" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="#reservation" className="px-4 py-2 rounded-full bg-coffee-700 text-cream text-center" onClick={() => setOpen(false)}>Book a Table</a>
          </div>
        </div>
      )}
    </header>
  )
}
