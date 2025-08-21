"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(!isHome)

  useEffect(() => {
    setOpen(false)
    if (!isHome) {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome, pathname])

  const links = [
    { id: 'about', label: 'About' },
    { id: 'menu', label: 'Menu' },
    { id: 'hours', label: 'Hours' },
    { id: 'reservation', label: 'Reservation' },
    { id: 'location', label: 'Location' },
  ]
  return (
    <header
      className={
        `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'backdrop-blur bg-cream/85 border-b border-coffee-100 shadow-soft' : 'bg-transparent'
        }`
      }
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="container flex items-center justify-between py-3"
      >
        <Link href="/" className={`font-display text-2xl transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>Rana Café</Link>
        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <a
              key={l.id}
              href={isHome ? `#${l.id}` : `/#${l.id}`}
              className={`group relative transition-colors ${scrolled ? 'text-foreground/90 hover:text-gold' : 'text-white/90 hover:text-white'}`}
            >
              {l.label}
              <span className={`absolute -bottom-1 left-0 h-[2px] w-0 transition-all ${scrolled ? 'bg-gold' : 'bg-white'} group-hover:w-full`}></span>
            </a>
          ))}
        </nav>
        <a
          href={isHome ? '#menu' : '/#menu'}
          className={`hidden md:inline-block px-4 py-2 rounded-full transition-colors ${
            scrolled
              ? 'bg-coffee-800 text-cream hover:bg-coffee-700'
              : 'border border-white/70 text-white hover:border-white hover:text-white/95 backdrop-blur-[2px]'
          }`}
        >
          View Menu
        </a>
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <MenuIcon />}
        </button>
      </motion.div>
      {open && (
        <div className="md:hidden border-t border-coffee-100 bg-cream">
          <div className="container py-3 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.id} href={isHome ? `#${l.id}` : `/#${l.id}`} className="py-2" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href={isHome ? '#reservation' : '/#reservation'} className="px-4 py-2 rounded-full bg-coffee-700 text-cream text-center" onClick={() => setOpen(false)}>Book a Table</a>
          </div>
        </div>
      )}
    </header>
  )
}
