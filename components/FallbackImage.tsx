"use client"
import Image, { ImageProps } from 'next/image'
import { useState, useEffect } from 'react'

export const FALLBACK_PLACEHOLDER =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAyNCcgaGVpZ2h0PSc1NzYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEwMjQnIGhlaWdodD0nNTc2JyByeD0nMTYnIGZpbGw9JyNmMmYyZWYnLz48ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1MTIsMjg4KSc+PHBhdGggZD0nTS0xNjAsMGM4OC4xLDAsMTYwLDcxLjksMTYwLDE2MHMtNzEuOSwxNjAtMTYwLDE2MC0xNjAtNzEuOS0xNjAtMTYwUycgZmlsbD0nI2QzYzliNCcvPjxwYXRoIGQ9J00tOTIsMTI4bDE4NCwxODQtMzIsMzItMTUyLTE1Mi04OCw4OC0zMi0zMkwtOTIsMTI4eicgZmlsbD0nI2NiYmJiNScvPjwvZz48dGV4dCB4PSc1MTInIHk9JzQ4OCcgdGV4dC1hbmNob3I9J21pZGRsZScgZm9udC1mYW1pbHk9J1N5c3RlbScgZm9udC1zaXplPSczNnB4JyBmaWxsPScjOTk5JyBvcGFjaXR5PScwLjknPklNQUdFIE5PVCBGT1VORDwvdGV4dD48L3N2Zz4='

type OptionalSrcImageProps = Omit<ImageProps, 'src'> & { src?: ImageProps['src'] }

export function FallbackImage(props: OptionalSrcImageProps) {
  const { src, alt, ...rest } = props
  const [safeSrc, setSafeSrc] = useState<string>(typeof src === 'string' && src ? src : FALLBACK_PLACEHOLDER)

  useEffect(() => {
    if (typeof src === 'string' && src) {
      setSafeSrc(src)
    } else {
      setSafeSrc(FALLBACK_PLACEHOLDER)
    }
  }, [src])

  return (
    <Image
      {...rest}
      alt={alt}
      src={safeSrc}
      unoptimized={typeof safeSrc === 'string' && (safeSrc.startsWith('http') || safeSrc.startsWith('data:'))}
      onError={() => setSafeSrc(FALLBACK_PLACEHOLDER)}
    />
  )
}
