import { Facebook, Instagram, Twitter } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="border-t border-coffee-100 bg-cream">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-display text-2xl mb-2">Aurum Café</div>
          <p className="text-sm text-coffee-700/80">Crafted coffee, artisanal dishes, warm ambiance.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="space-y-1 text-sm">
            <li><a href="#menu" className="hover:text-gold">Menu</a></li>
            <li><a href="#about" className="hover:text-gold">About</a></li>
            <li><a href="#reservation" className="hover:text-gold">Reservation</a></li>
            <li><a href="#location" className="hover:text-gold">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Follow Us</div>
          <div className="flex gap-3 text-coffee-700">
            <a href="#" aria-label="Instagram" className="hover:text-gold"><Instagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-gold"><Twitter /></a>
            <a href="#" aria-label="Facebook" className="hover:text-gold"><Facebook /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-coffee-100 py-4 text-center text-xs text-coffee-700/70">© {new Date().getFullYear()} Aurum Café. All rights reserved.</div>
    </footer>
  )
}
