import { RepertoirePlayer as AudioPlayer } from '../../../../Components/RepertoirePlayer/RepertoirePlayer'
import { REPERTOIRE_TRACKS } from './repertoireTracks'

export function RepertoirePlayer() {
  return (
    <AudioPlayer tracks={REPERTOIRE_TRACKS} label="Faixas da Side Rock" />
  )
}
