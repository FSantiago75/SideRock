/** Largura máxima (inclusive) para considerar celular. */
export const VIEWPORT_MOBILE_MAX_PX = 760

/** Abaixo disso, tabs e ícones sociais deixam de caber na mesma linha. */
export const VIEWPORT_NAV_STACK_MAX_PX = 590

export function getViewportWidth(): number {
  if (typeof window === 'undefined') {
    return VIEWPORT_MOBILE_MAX_PX + 1
  }
  return window.innerWidth
}

export function isViewportWidthBelow(
  maxWidthPx: number,
  width = getViewportWidth(),
): boolean {
  return width <= maxWidthPx
}

export function isMobileViewport(width = getViewportWidth()): boolean {
  return isViewportWidthBelow(VIEWPORT_MOBILE_MAX_PX, width)
}

export function isDesktopViewport(width = getViewportWidth()): boolean {
  return !isMobileViewport(width)
}

export function isNavStackViewport(width = getViewportWidth()): boolean {
  return isViewportWidthBelow(VIEWPORT_NAV_STACK_MAX_PX, width)
}
