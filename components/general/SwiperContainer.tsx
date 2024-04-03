import stls from '@/styles/components/general/SwiperContainer.module.sass'
import Popup from 'reactjs-popup'
import SwiperCore, { Navigation, Pagination, Grid } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames'
import { PopupImage } from '../popups'
import CustomNextButton from '@/components/general/CustomNextButton'
import CustomPrevButton from '@/components/general/CustomPrevButton'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { useEffect, useRef, useState } from 'react'

SwiperCore.use([Navigation, Pagination])

const SwiperContainer = ({
  teachers = false,
  topCourses = false,
  diplomas = false,
  reviews = false,
  reviewNextBtn = false,
  reviewPrevBtn = false,
  slides,
  mobileOptions = { slidesNum: 1, spaceBetween: 10 },
  tabletOptions = { slidesNum: 1, spaceBetween: 10 },
  laptopOptions = { slidesNum: 2, spaceBetween: 10 },
  desktopOptions = { slidesNum: 2, spaceBetween: 50 },
  alwaysDisabledOnDesktop = false,
  isMultiRow = false,
  autoHeight = false,
  hideNavigation = false
}) => {
  const isMobileLayout = useBetterMediaQuery('(max-width: 480px)')
  const isTabletLayout = useBetterMediaQuery(
    '(min-width: 481px) and (max-width: 768px)'
  )
  const isLaptopLayout = useBetterMediaQuery(
    '(min-width: 768px) and (max-width: 1200px)'
  )
  const isDesktopLayout = useBetterMediaQuery('(min-width: 1201px)')

  const layouts = [
    { mobile: isMobileLayout },
    { tablet: isTabletLayout },
    { laptop: isLaptopLayout },
    { desktop: isDesktopLayout }
  ]

  const getCurrentLayoutKey = () => {
    const currentLayout = layouts.find(layout => {
      const firstKey = Object.keys(layout)[0]
      if (layout[firstKey]) return layout
    })

    if (!currentLayout) return null

    const currentLayoutKey = Object.keys(currentLayout)[0]

    return currentLayoutKey
  }

  const swiperOptions = {
    mobile: mobileOptions,
    tablet: tabletOptions,
    laptop: laptopOptions,
    desktop: desktopOptions
  }

  const assignNumOfSlidesPerView = () => {
    const currentLayoutKey = getCurrentLayoutKey()

    if (!currentLayoutKey) return 0

    const { slidesNum } = swiperOptions[currentLayoutKey]

    return slidesNum
  }

  const checkIfSwiperEnabled = () => {
    if (alwaysDisabledOnDesktop && (isLaptopLayout || isDesktopLayout))
      return false

    const slidesPerView = assignNumOfSlidesPerView()

    return !(slidesPerView === slides && slides.length)
  }

  const getSpaceBetween = () => {
    const currentLayoutKey = getCurrentLayoutKey()

    if (!currentLayoutKey) return 10

    return swiperOptions[currentLayoutKey].spaceBetween
  }

  return (
    <Swiper
      navigation={{
        prevEl: '.custom-prev-button',
        nextEl: '.custom-next-button'
      }}
      
      speed={250}
      enabled={checkIfSwiperEnabled()}
      spaceBetween={getSpaceBetween()}
      slidesPerView={assignNumOfSlidesPerView()}
      modules={[Grid]}
      grid={{
        rows: isMultiRow && (isLaptopLayout || isDesktopLayout) ? 2 : 1,
        fill: !isMobileLayout ? 'row' : 'column'
      }}
      autoHeight={autoHeight}
      pagination={
        (isMobileLayout || isTabletLayout) && !topCourses && !hideNavigation
          ? { clickable: true, dynamicBullets: true }
          : false
      }
      className={classNames({
        [stls.container]: true,
        [stls.teachers]: teachers,
        [stls.diplomas]: diplomas,
        [stls.reviews]: reviews,
        [stls.topCourses]: topCourses
      })}>
      {slides &&
        slides.map((slide, idx) => (
          <SwiperSlide key={`slide-${idx}`}>
            {diplomas ? (
              <Popup trigger={<div>{slide}</div>} modal nested>
                {close => <PopupImage image={slide} close={close} />}
              </Popup>
            ) : (
              slide
            )}
          </SwiperSlide>
        ))}

      {!hideNavigation && (
        <>
          <div className='custom-prev-button-container'>
            <CustomPrevButton reviewPrevBtn={reviewPrevBtn} />
          </div>
          <div className='custom-next-button-container'>
            <CustomNextButton reviewNextBtn={reviewNextBtn} />
          </div>
        </>
      )}
    </Swiper>
  )
}

export default SwiperContainer
