import catalog from '../../../../assets/sideRock/audio/catalog.json'
import type { RepertoireTrack } from '../../../../Components/RepertoirePlayer/types'
export type { RepertoireTrack } from '../../../../Components/RepertoirePlayer/types'

type TrackCredit = {
  file: string
  title?: string
  artist?: string
  description?: string
  order?: number
  peaks?: number[]
}

const audioFiles = import.meta.glob<string>(
  '../../../../assets/sideRock/audio/*.{mp3,wav,m4a,ogg}',
  { eager: true, import: 'default' },
)
const credits: readonly TrackCredit[] = catalog
const creditsByFile = new Map(credits.map((credit) => [credit.file, credit]))

export const REPERTOIRE_TRACKS: readonly RepertoireTrack[] = Object.entries(audioFiles)
  .map(([path, src]) => {
    const file = path.slice(path.lastIndexOf('/') + 1)
    const credit = creditsByFile.get(file)
    return {
      id: file,
      src,
      title: credit?.title ?? file.replace(/\.[^.]+$/, ''),
      artist: credit?.artist ?? 'Side Rock',
      description: credit?.description,
      peaks: credit?.peaks,
      order: credit?.order ?? Infinity,
    }
  })
  .sort((left, right) => (left.order - right.order) || left.id.localeCompare(right.id, 'pt-BR', { numeric: true }))
