import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Menu } from '@/components/Menu'
import { Hours } from '@/components/Hours'
import { Reservation } from '@/components/Reservation'
import { Location } from '@/components/Location'
import { HeroBackground } from '@/components/HeroBackground'

export default function HomePage() {
  return (
    <main>
      <section className="relative section overflow-hidden">
        <HeroBackground />
        <div className="relative z-10">
          <Hero />
        </div>
      </section>

      <section id="about" className="section">
        <About />
      </section>

      <section id="menu" className="section bg-cream/60">
        <Menu />
      </section>

      <section id="hours" className="section">
        <Hours />
      </section>

      <section id="reservation" className="section bg-cream/60">
        <Reservation />
      </section>

      <section id="location" className="section">
        <Location />
      </section>
    </main>
  )
}
