import stls from '@/styles/components/layout/StickyBottomBlackFriday.module.sass'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import cn from 'classnames'
import { routes } from '@/config/index'
import FullWrapper from '@/components/layout/FullWrapper'
import PopupTrigger from '@/components/general/PopupTrigger'
import { IconCloseCircle } from '@/components/icons'
import IconBlackFridayBrowser from '../icons/IconBlackFridayBrowser'
import IconBlackFridayPhone from '../icons/IconBlackFridayPhone'
import IconBlackFridayBanner from '../icons/IconBlackFridayBanner'
import IconBlackFridayWow from '../icons/IconBlackFridayWow'
import IconBlackFridayCursor from '../icons/IconBlackFridayCursor'
import IconBlackFridayFlower from '../icons/IconBlackFridayFlower'
import IconBlackFridayStar from '../icons/IconBlackFridayStar'
import IconBlackFridaySnowflake from '../icons/IconBlackFridaySnowflake'
import IconBlackFridaySun from '../icons/IconBlackFridaySun'

const StickyBottomBlackFriday = () => {
  const router = useRouter()

  const [isShown, setIsShown] = useState(false)
  const [isClosed, setIsClosed] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (router.asPath !== routes.front.payment) {
      document.addEventListener('scroll', () => {
        const scrollHeight = document.body.scrollHeight
        const pageYOffset = window.pageYOffset
        pageYOffset > (scrollHeight * 5) / 100 &&
        pageYOffset + window.innerHeight < (scrollHeight * 90) / 100 &&
        !isClosed
          ? setIsShown(true)
          : setIsShown(false)
      })
    }
    setIsLoaded(true)
  }, [router, setIsShown, isClosed])

  if (isLoaded)
    return (
      <div
        className={cn({
          [stls.container]: true,
          [stls.isShown]: isShown,
          [stls.isClosed]: isClosed
        })}>
        <FullWrapper>
          <div className={stls.innerBox}>
          
          <p className={stls.discount}>
            <span className={stls.highlight}>
              Скидка-Терапия:
            </span>{' '}
            <br className={stls.smallMobileOnly} /> второй курс в подарок  <br className={stls.smallMobileOnly} />в честь черной пятницы!
            <span className={stls.date}>{' '}до 30.11</span>
          </p>
          <div className={stls.btn}>
            <PopupTrigger btn='theta' cta='2for1' />
          </div>
          </div>
          <div className={stls.browser}>
            <IconBlackFridayBrowser />
          </div>
          <div className={stls.phone}>
            <IconBlackFridayPhone />
          </div>
          <div className={stls.banner}>
            <IconBlackFridayBanner />
          </div>
          <div className={stls.wow}>
            <IconBlackFridayWow />
          </div>
          <div className={stls.cursor}>
            <IconBlackFridayCursor />
          </div>
          <div className={stls.flower}>
            <IconBlackFridayFlower />
          </div>
          <div className={stls.star}>
            <IconBlackFridayStar />
          </div>
          <div className={stls.starRight}>
            <IconBlackFridayStar />
          </div>
          <div className={stls.smallStarLeft}>
            <IconBlackFridayStar twentyPx/>
          </div>
          <div className={stls.snFlakeLeft}>
            <IconBlackFridaySnowflake />
          </div>
          <div className={stls.snFlakeSmall}>
            <IconBlackFridaySnowflake twentyPx/>
          </div>
          <div className={stls.snFlakeCenter}>
            <IconBlackFridaySnowflake />
          </div>
          <div className={stls.sun}>
            <IconBlackFridaySun />
          </div>
        </FullWrapper>
        <button className={stls.close} onClick={() => setIsClosed(true)}>
          <IconCloseCircle blackCross />
        </button>
      </div>
    )

  return null
}

export default StickyBottomBlackFriday