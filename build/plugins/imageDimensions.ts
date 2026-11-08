import type { Plugin } from 'vite'
import { imageSizeFromFile } from 'image-size/fromFile'

// Reads dimensions only; source images are neither transformed nor re-encoded.
export function imageDimensions(): Plugin {
  return {
    name: 'image-dimensions',
    enforce: 'pre',
    async load(id) {
      if (!id.endsWith('?dimensions')) return
      const file = id.slice(0, -'?dimensions'.length)
      this.addWatchFile(file)
      const metadata = await imageSizeFromFile(file)
      const rotated = (metadata.orientation ?? 1) >= 5
      const width = rotated ? metadata.height : metadata.width
      const height = rotated ? metadata.width : metadata.height
      return 'export default ' + JSON.stringify({ width, height })
    },
  }
}
