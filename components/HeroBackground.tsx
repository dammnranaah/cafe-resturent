"use client"
import Image from 'next/image'

export const HeroBackground = () => {
  const src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop'
  return (
    <div aria-hidden className="absolute inset-0">
      <Image
        src={src}
        alt="Restaurant interior"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLz4="
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
    </div>
  )
}
