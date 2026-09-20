import ozzbornBass from '../../assets/ozzborn/membersImages/bass.webp'
import ozzbornDrums from '../../assets/ozzborn/membersImages/drums.webp'
import ozzbornGuitar from '../../assets/ozzborn/membersImages/guitar.webp'
import ozzbornHitmap from '../../assets/ozzborn/membersImages/membersHitmap.svg?raw'
import ozzbornNeutral from '../../assets/ozzborn/membersImages/membersNull.webp'
import ozzbornVocal from '../../assets/ozzborn/membersImages/vocal.webp'
import sideRockBass from '../../assets/sideRock/membersImages/bass.png'
import sideRockDrums from '../../assets/sideRock/membersImages/drums.png'
import sideRockGuitar from '../../assets/sideRock/membersImages/guitar.png'
import sideRockHitmap from '../../assets/sideRock/membersImages/membersHitmap.svg?raw'
import sideRockNeutral from '../../assets/sideRock/membersImages/membersNull.png'
import sideRockVocal from '../../assets/sideRock/membersImages/vocal.png'

export const memberImageIds = ['vocal', 'guitar', 'drums', 'bass'] as const

export type MembersImageMemberId = (typeof memberImageIds)[number]

export type MembersImageSource = {
  width: number
  height: number
  neutral: string
  layers: Record<MembersImageMemberId, string>
  hitmap: string
  hitmapIds: Readonly<Record<string, MembersImageMemberId>>
}

const hitmapIds = {
  marcelo: 'vocal',
  victor: 'guitar',
  drums: 'drums',
  bass: 'bass',
} as const satisfies MembersImageSource['hitmapIds']

export const OZZBORN_MEMBERS_IMAGE = {
  width: 1024,
  height: 1536,
  neutral: ozzbornNeutral,
  layers: {
    vocal: ozzbornVocal,
    guitar: ozzbornGuitar,
    drums: ozzbornDrums,
    bass: ozzbornBass,
  },
  hitmap: ozzbornHitmap,
  hitmapIds,
} as const satisfies MembersImageSource

export const SIDE_ROCK_MEMBERS_IMAGE = {
  width: 1025,
  height: 1536,
  neutral: sideRockNeutral,
  layers: {
    vocal: sideRockVocal,
    guitar: sideRockGuitar,
    drums: sideRockDrums,
    bass: sideRockBass,
  },
  hitmap: sideRockHitmap,
  hitmapIds,
} as const satisfies MembersImageSource
