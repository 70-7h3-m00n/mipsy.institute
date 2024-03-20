import stls from '@/styles/components/layout/StickyBottom.module.sass'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import cn from 'classnames'
import { routes } from '@/config/index'
import { discount } from '@/data/price'
import Wrapper from '@/components/layout/Wrapper'
import IconWavyShape from '@/components/icons/IconWavyShape'
import PopupTrigger from '@/components/general/PopupTrigger'
import { IconCloseCircle } from '@/components/icons'
import ProgramDiscountUntil from '../program/ProgramDiscountUntil'
import { getCookie } from 'cookies-next'

const StickyBottom = () => {
  const router = useRouter()

  const [isShown, setIsShown] = useState(true)
  const [isClosed, setIsClosed] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const roistat_visit = getCookie('roistat_visit')

  useEffect(() => {
    if (router.asPath !== routes.front.payment) {
      // document.addEventListener('scroll', () => {
      //   const scrollHeight = document.body.scrollHeight
      //   const pageYOffset = window.pageYOffset
      //   console.log(pageYOffset, scrollHeight)
      //   pageYOffset > (scrollHeight * 10) / 1000 &&
      //   pageYOffset + window.innerHeight < (scrollHeight * 90) / 100 &&
      //   !isClosed
      //     ? setIsShown(true)
      //     : setIsShown(false)
      // })
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
        <Wrapper>
          <div className={stls.shape}>
            <IconWavyShape />
          </div>
          <p className={stls.discount}>
            <span className={stls.highlight}>
              Скидка {/* -50% */}
              {discount}
            </span>{' '}
            <br className={stls.smallMobileOnly} /> на все программы{' '}
            <br className={stls.mobileOnly} /> <ProgramDiscountUntil />!
          </p>
          <div className={stls.btns}>
            <PopupTrigger btn='theta' cta='learnAboutUs' />
            <div className={stls.btn2}>
              <PopupTrigger btn='alpha' cta='consultMe' />
            </div>
          </div>
          <div className="js-whatsapp-message-container" style={{display:"none"}}>
            <p>Обязательно отправьте это сообщение и дождитесь ответа. Ваш номер обращения: {roistat_visit}</p>
          </div>
          <div className={stls.btnMobile}>
            <PopupTrigger btn='theta' cta='learnMore' />
          </div>
        </Wrapper>
        <button className={stls.close} onClick={() => setIsClosed(true)}>
          <IconCloseCircle blackCross />
        </button>
      </div>
    )

  return null
}

export default StickyBottom
