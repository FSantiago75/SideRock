import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { EXPERIENCE_ROUTES } from '../../config/experiences'

export function RouteFavicon() {
  const { pathname } = useLocation()
  const isOzzborn = pathname === EXPERIENCE_ROUTES.ozzborn
    || pathname.startsWith(`${EXPERIENCE_ROUTES.ozzborn}/`)

  useEffect(() => {
    const icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
    if (!icon) return

    icon.type = isOzzborn ? 'image/png' : 'image/svg+xml'
    icon.href = isOzzborn ? '/favicon-ozzborn.png' : '/favicon.svg'
  }, [isOzzborn])

  return null
}
