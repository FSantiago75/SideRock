import { RepertoirePlayer as AudioPlayer } from '../../../../Components/RepertoirePlayer/RepertoirePlayer'
import { REPERTOIRE_TRACKS } from './repertoireTracks'

export function RepertoirePlayer() {
  return (
    <AudioPlayer tracks={REPERTOIRE_TRACKS} title="Ouça a Side Rock"
      description="Um player com faixas gravadas pela banda." />
  )
}
