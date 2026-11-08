import styles from './VideoSlideTransition.module.css'

type VideoSlideTransitionProps = {
  previousPoster: string
  poster: string
  direction: 'next' | 'previous'
  onFinish: () => void
}

// Animate posters above the player so native mobile controls never move offscreen.
export function VideoSlideTransition({
  previousPoster,
  poster,
  direction,
  onFinish,
}: VideoSlideTransitionProps) {
  return (
    <div
      className={styles.transition}
      data-direction={direction}
      aria-hidden="true"
    >
      <img className={styles.outgoing} src={previousPoster} alt="" />
      <img
        className={styles.incoming}
        src={poster}
        alt=""
        onAnimationEnd={onFinish}
      />
    </div>
  )
}
