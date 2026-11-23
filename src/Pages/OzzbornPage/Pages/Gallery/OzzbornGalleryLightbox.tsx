import { GalleryLightbox, type GalleryLightboxProps } from '../../../../Components/GalleryLightbox/GalleryLightbox'

export function OzzbornGalleryLightbox(props: Omit<GalleryLightboxProps, 'accent' | 'accentHot'>) {
  return <GalleryLightbox {...props} accent="#7c3aed" accentHot="#c4b5fd" />
}
