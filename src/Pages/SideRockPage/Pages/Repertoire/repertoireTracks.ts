export type RepertoireTrack = {
  id: string
  title: string
  artist: string
  description?: string
  src: string
  peaks?: readonly number[]
}

// Use an imported audio URL and optional normalized amplitude peaks (0–1).
export const REPERTOIRE_TRACKS: readonly RepertoireTrack[] = []
