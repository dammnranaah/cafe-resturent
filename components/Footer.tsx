import { Facebook, Instagram, Twitter } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="border-t border-coffee-100 bg-cream">
      <div className="container py-12 grid gap-10 md:grid-cols-4">
        <div className="space-y-2 md:col-span-2">
          <div className="font-display text-2xl">Rana Café</div>
          <p className="text-sm text-coffee-700/80 max-w-md">Crafted coffee, Bengali comfort food, and a warm neighborhood vibe.</p>
        </div>

        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#menu" className="hover:text-gold">Menu</a></li>
            <li><a href="#about" className="hover:text-gold">About</a></li>
            <li><a href="#reservation" className="hover:text-gold">Reservation</a></li>
            <li><a href="#location" className="hover:text-gold">Find Us</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="font-semibold">Contact</div>
          <div className="text-sm text-coffee-900">
            <div>Mirpur Rd, Dhaka 1205</div>
            <div>
              <a href="tel:+15551234567" className="hover:text-gold">+1 (555) 123-4567</a>
            </div>
            <div>
              <a href="mailto:support@ranacafe.com" className="hover:text-gold">support@ranacafe.com</a>
            </div>
          </div>
          <div className="pt-1 flex gap-3 text-coffee-700">
            <a href="#" aria-label="Instagram" className="hover:text-gold"><Instagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-gold"><Twitter /></a>
            <a href="#" aria-label="Facebook" className="hover:text-gold"><Facebook /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-coffee-100">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-coffee-700/70">
          <div>© {new Date().getFullYear()} Rana Café. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-gold">Privacy Policy</a>
            <span className="opacity-30">•</span>
            <a href="/terms" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
