import { useState } from 'react'
import { BookingVideo } from './Components/BookingVideo/BookingVideo'
import { useVideoCarousel } from './Hooks/useVideoCarousel'
import styles from './BookingVideoCarousel.module.css'

type BookingVideoItem = {
  src: string
  poster?: string
  title: string
  context?: string | null
  href?: string
}

function cardScrollPosition(row: HTMLElement, card: Element) {
  const offset = row.scrollLeft + card.getBoundingClientRect().left -
    row.getBoundingClientRect().left - row.clientLeft
  return Math.max(0, Math.min(offset, row.scrollWidth - row.clientWidth))
}

type BookingVideoCarouselProps = {
  videos: readonly BookingVideoItem[]
  variant?: 'default' | 'story'
  autoAdvance?: boolean
  nativeSwipe?: boolean
}

export function BookingVideoCarousel({
  videos,
  variant = 'default',
  autoAdvance = true,
  nativeSwipe = false,
}: BookingVideoCarouselProps) {
  const {
    rowRef,
    activeIndex,
    transition,
    finishTransition,
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
  } = useVideoCarousel(videos.length, autoAdvance)
  const previousPoster = transition ? videos[transition.from]?.poster : undefined
  const useNativeSwipe = nativeSwipe && isMobile
  const [alignedIndex, setAlignedIndex] = useState<number | null>(0)

  return (
    <div className={styles.videoCarousel} data-variant={variant}>
      <div
        ref={rowRef}
        className={styles.videoRow}
        data-video-row
        data-native-swipe={useNativeSwipe || undefined}
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
        onTouchStart={useNativeSwipe ? undefined : handleTouchStart}
        onTouchEnd={useNativeSwipe ? undefined : handleTouchEnd}
        onTouchCancel={useNativeSwipe ? undefined : handleTouchCancel}
        onScroll={useNativeSwipe ? (event) => {
          const row = event.currentTarget
          const index = Array.from(row.children).findIndex(
            (card) => Math.abs(row.scrollLeft - cardScrollPosition(row, card)) <= 2,
          )
          setAlignedIndex(index < 0 ? null : index)
          if (index >= 0) goTo(index)
        } : undefined}
      >
        {(isMobile && !useNativeSwipe ? videos.slice(activeIndex, activeIndex + 1) : videos).map(
          (video) => (
            <BookingVideo
              key={video.src}
              {...video}
              showControls={!useNativeSwipe || videos[alignedIndex ?? -1] === video}
              onPlay={handlePlay}
              onPause={handlePlaybackStop}
              onEnded={handlePlaybackStop}
              transition={
                variant === 'story' && isMobile && !useNativeSwipe && transition && previousPoster && video.poster
                  ? {
                      previousPoster,
                      direction: transition.direction,
                    }
                  : undefined
              }
              onTransitionEnd={finishTransition}
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
                  if (useNativeSwipe) {
                    const row = rowRef.current
                    const card = row?.children[index]
                    if (row && card) row.scrollTo({ left: cardScrollPosition(row, card) })
                    return
                  }
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
