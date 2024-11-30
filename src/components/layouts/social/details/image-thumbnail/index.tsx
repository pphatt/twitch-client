import React, {
  useCallback,
  useEffect,
  useState,
  type ComponentPropsWithRef,
} from "react"
import { cn } from "@/utils/common"
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"

import styles from "@/components/layouts/social/details/image-thumbnail/style.module.scss"

type ImageThumbnailProps = {
  slides: { src: string }[]
  options?: EmblaOptionsType
}

export function ImageThumbnail({ slides, options }: ImageThumbnailProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: false,
    duration: 15,
    skipSnaps: true,
  })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaMainApi)

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on("select", onSelect).on("reInit", onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <>
      <div className={styles["article-thumb-wrapper"]}>
        <div className={styles["article-thumb-container"]} ref={emblaThumbsRef}>
          <div className={styles["article-thumb-overlay"]}>
            {slides.map(({ src }, index) => (
              <Thumb
                imageSrc={src}
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>

        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <div
        className={styles["article-image-slider-wrapper"]}
        ref={emblaMainRef}
      >
        <div className={styles["article-image-slider-container"]}>
          {slides.map(({ src }, index) => (
            <div className={styles["article-image-wrapper"]} key={index}>
              <div
                data-selected={index === selectedIndex}
                className={styles["article-image-container"]}
              >
                <img
                  className={cn(styles["article-image"], {
                    [`${styles["article-image-selected"]}`]:
                      index === selectedIndex,
                  })}
                  src={src}
                  alt={""}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

interface ThumbProps {
  imageSrc: string
  selected: boolean
  index: number
  onClick: () => void
}

function Thumb({ selected, imageSrc, index, onClick }: ThumbProps) {
  return (
    <div
      key={index}
      onClick={onClick}
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
      className={cn(styles["article-thumb-slide"], {
        [`${styles["article-thumb-slide-selected"]}`]: selected,
        [`${styles["article-thumb-slide-not-selected"]}`]: !selected,
      })}
    />
  )
}

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect).on("select", onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

type PropType = ComponentPropsWithRef<"button">

function PrevButton(props: PropType) {
  const { children, ...restProps } = props

  return (
    <button className={styles["prev-btn"]} type="button" {...restProps}>
      <div className={styles["inner-btn"]}>
        <svg className={styles["btn-svg"]} viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          />
        </svg>
        {children}
      </div>
    </button>
  )
}

function NextButton(props: PropType) {
  const { children, ...restProps } = props

  return (
    <button className={styles["next-btn"]} type="button" {...restProps}>
      <div className={styles["inner-btn"]}>
        <svg className={styles["btn-svg"]} viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          />
        </svg>
        {children}
      </div>
    </button>
  )
}
