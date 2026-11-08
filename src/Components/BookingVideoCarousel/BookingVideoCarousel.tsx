import { BookingVideo } from './Components/BookingVideo/BookingVideo'
import { useVideoCarousel } from './Hooks/useVideoCarousel'
import styles from './BookingVideoCarousel.module.css'

type BookingVideoItem = {
  src: string
  poster: string
  title: string
  href: string
}

type BookingVideoCarouselProps = {
  videos: readonly BookingVideoItem[]
  variant?: 'default' | 'story'
}

export function BookingVideoCarousel({
  videos,
  variant = 'default',
}: BookingVideoCarouselProps) {
  const {
    rowRef,
    activeIndex,
    isMobile,
    goTo,
    setIsHovered,
    pauseForInteraction,
    resumeAfterInteraction,
    handleTouchStart,
    handleTouchEnd,
    handleTouchCancel,
    handlePlay,
    handlePlaybackStop,
  } = useVideoCarousel(videos.length)

  return (
    <div className={styles.videoCarousel} data-variant={variant}>
      <div
        ref={rowRef}
        className={styles.videoRow}
        data-video-row
        role="region"
        aria-label="Apresentações ao vivo. Deslize para o próximo vídeo."
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') setIsHovered(true)
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === 'mouse') setIsHovered(false)
        }}
        onPointerDown={(event) => {
          if (event.pointerType !== 'touch') pauseForInteraction()
        }}
        onPointerUp={(event) => {
          if (event.pointerType !== 'touch') resumeAfterInteraction()
        }}
        onPointerCancel={(event) => {
          if (event.pointerType !== 'touch') resumeAfterInteraction()
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
      >
        {(isMobile ? videos.slice(activeIndex, activeIndex + 1) : videos).map(
          (video) => (
            <BookingVideo
              key={video.src}
              {...video}
              onPlay={handlePlay}
              onPause={handlePlaybackStop}
              onEnded={handlePlaybackStop}
            />
          ),
        )}
      </div>

      {videos.length > 1 ? (
        <div
          className={styles.videoPagination}
          aria-label="Selecionar apresentação"
        >
          <span>Mais apresentações</span>
          <div>
            {videos.map((video, index) => (
              <button
                key={video.src}
                type="button"
                className={
                  index === activeIndex ? styles.videoDotActive : undefined
                }
                onClick={() => {
                  pauseForInteraction()
                  goTo(index)
                  resumeAfterInteraction()
                }}
                aria-label={`Ver vídeo ${index + 1}: ${video.title}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
