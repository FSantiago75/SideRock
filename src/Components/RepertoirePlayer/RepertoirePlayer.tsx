import { useId, useRef, useState } from 'react'
import { HiBackward, HiForward, HiPause, HiPlay } from 'react-icons/hi2'
import type { RepertoireTrack } from './types'
import styles from './RepertoirePlayer.module.css'

function formatTime(seconds: number) {
  const whole = Math.floor(seconds)
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`
}

type RepertoirePlayerProps = {
  tracks: readonly RepertoireTrack[]
  title: string
  description: string
}

export function RepertoirePlayer({
  tracks,
  title,
  description,
}: RepertoirePlayerProps) {
  const titleId = useId()
  const audio = useRef<HTMLAudioElement>(null)
  const [selected, setSelected] = useState(0)
  const [duration, setDuration] = useState(0)
  const [position, setPosition] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)
  const track = tracks[selected]

  function play(player: HTMLAudioElement) {
    setError(false)
    const requestedSource = player.src
    void player.play().catch((reason: DOMException) => {
      if (reason.name !== 'AbortError' && player.src === requestedSource && player.paused) setError(true)
    })
  }

  function select(index: number) {
    const player = audio.current
    const next = tracks[index]
    if (!player || !next) return
    if (index !== selected) {
      setSelected(index)
      setPosition(0)
      setDuration(0)
      player.src = next.src
    }
    play(player)
  }

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <div className={styles.heading}>
        <h2 id={titleId}>{title}</h2>
        <p>{description}</p>
      </div>
      {!track ? (
        <p className={styles.empty}>As primeiras faixas chegam em breve.</p>
      ) : (
        <div className={styles.layout}>
          <div className={styles.deck}>
            <p className={styles.artist}>{track.artist}</p>
            <h3>{track.title}</h3>
            {track.description && <p>{track.description}</p>}
            <audio
              ref={audio}
              src={tracks[0]?.src}
              preload="metadata"
              onLoadedMetadata={({ currentTarget }) => {
                setDuration(Number.isFinite(currentTarget.duration) ? currentTarget.duration : 0)
              }}
              onTimeUpdate={({ currentTarget }) => setPosition(currentTarget.currentTime)}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onError={() => { setPlaying(false); setError(true) }}
              onEnded={() => {
                setPlaying(false)
                if (selected + 1 < tracks.length) select(selected + 1)
              }}
            />
            <div className={styles.timeline}>
              {track.peaks?.length ? (
                <div className={styles.wave} aria-hidden>
                  {track.peaks.map((peak, index, peaks) => (
                    <span key={index} data-played={duration > 0 && index / peaks.length < position / duration}
                      style={{ height: `${Math.max(6, Math.min(100, peak * 100))}%` }} />
                  ))}
                </div>
              ) : null}
              <input type="range" aria-label="Posição da faixa"
                aria-valuetext={formatTime(position)}
                min={0} max={duration || 1} step={0.1}
                value={Math.min(position, duration)} disabled={!duration}
                onChange={(event) => {
                  if (audio.current) audio.current.currentTime = Number(event.currentTarget.value)
                  setPosition(Number(event.currentTarget.value))
                }} />
              <div className={styles.times}><span>{formatTime(position)}</span><span>{formatTime(duration)}</span></div>
            </div>
            <div className={styles.controls}>
              <button type="button" aria-label="Faixa anterior" disabled={!selected} onClick={() => select(selected - 1)}><HiBackward /></button>
              <button type="button" aria-label={playing ? 'Pausar' : 'Reproduzir'} onClick={() => {
                const player = audio.current
                if (!player) return
                if (playing) player.pause()
                else play(player)
              }}>{playing ? <HiPause /> : <HiPlay />}</button>
              <button type="button" aria-label="Próxima faixa" disabled={selected + 1 === tracks.length} onClick={() => select(selected + 1)}><HiForward /></button>
            </div>
            {error && <p role="alert">Não foi possível reproduzir esta faixa. Tente novamente.</p>}
          </div>
          <ol className={styles.queue}>
            {tracks.map((item, index) => (
              <li key={item.id}>
                <button type="button" aria-current={selected === index ? 'true' : undefined}
                  onClick={() => {
                    if (selected === index && playing) audio.current?.pause()
                    else select(index)
                  }}>
                  <span>{selected === index && playing ? <HiPause /> : <HiPlay />}</span>
                  <span><strong>{item.title}</strong><small>{item.artist}</small></span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  )
}
