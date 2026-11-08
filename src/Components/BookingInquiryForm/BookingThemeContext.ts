import { createContext, type CSSProperties } from 'react'

// Calendar and select portals need the same palette as their owning form.
export const BookingThemeContext = createContext<CSSProperties | undefined>(
  undefined,
)
