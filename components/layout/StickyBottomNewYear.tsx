import stls from '@/styles/components/layout/StickyBottomNewYear.module.sass'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import cn from 'classnames'
import { routes } from '@/config/index'
import FullWrapper from '@/components/layout/FullWrapper'
import PopupTrigger from '@/components/general/PopupTrigger'
import { IconCloseCircle } from '@/components/icons'
import Laptop from '../imgs/newYearStickyBottom/Laptop'
import Phone from '../imgs/newYearStickyBottom/Phone'
import IconNewYearLeaf from '../icons/IconNewYearLeaf'
import IconVioletBg from '../icons/IconVioletBg'
import Iwatch from '../imgs/newYearStickyBottom/Iwatch'
import Headset from '../imgs/newYearStickyBottom/Headset'
import IconChristmasTree from '../icons/IconChristmasTree'
import IconBrownBg from '../icons/IconBrownBg'
import IconNewYearBall from '../icons/IconNewYearBall'
import IconNewYearToy from '../icons/IconNewYearToy'
import IconNewYearCross from '../icons/IconNewYearCross'
import IconNewYearCircle from '../icons/IconNewYearCircle'
import IconNewYearStar from '../icons/IconNewYearStar'
import IconNewYearRowStar from '../icons/IconNewYearRowStar'


const StickyBottomNewYear = () => {
  const router = useRouter()

  const [isShown, setIsShown] = useState(true)
  const [isClosed, setIsClosed] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  console.log(router.asPath == (routes.front.gratefull))

  useEffect(() => {
    setIsLoaded(true)
    if (router.asPath == (routes.front.gratefull)) {
      // console.log('YESSS')
      // setIsShown(false)
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
    
  }, [router, setIsShown, isClosed])

  if (isLoaded)
    return (
      <FullWrapper>
        
      <div
        className={cn({
          [stls.container]: true,
          [stls.isShown]: isShown,
          [stls.isClosed]: isClosed
        })}>
          <div className={stls.innerBox}>
            <div className={stls.circleLeftContainer}>
              <IconNewYearCircle small/>
            </div>
            <div className={stls.circleLeftUpContainer}>
              <IconNewYearCircle small/>
            </div>

            <IconNewYearLeaf />
            <IconNewYearBall />
            <IconVioletBg />
            <Laptop />
            <Phone />
            <Iwatch />
            <Headset />
            <IconChristmasTree /> 
            <IconNewYearCross />
            <div className={stls.starLeft}>
              <IconNewYearStar/>
            </div> 
            
            
            <IconBrownBg />
            <div className={stls.textIconBlock}>
              <div className={stls.discount}>
              {/* <p > */}
                <span className={stls.cursive}>
                Новогодние чудеса <br className={stls.mobileOnly} />от МИП! <br className={stls.smallMobileOnly} />
                </span>{' '}
                Подарки <span className={stls.spanBrown}>всем</span> поступившим <br className={stls.smallMobileOnly} /> до 28.12 <br className={stls.mobileOnly} /> от 15000 рублей
                {/* </p> */}
                <div className={stls.trigger}>
                <PopupTrigger btn='gamma' cta='participate' />
                </div>
                
              </div>
              <IconNewYearToy />
              <IconNewYearRowStar />
              <div className={stls.starCenter}>
                <IconNewYearStar/>
              </div>
              <IconNewYearLeaf reverse/>
              <div className={stls.circleLeft}>
                <IconNewYearCircle />
              </div>
              
              <div className={stls.circleUpperLeft}>
                <IconNewYearCircle />
              </div>
              <div className={stls.circleUpperCenter}>
                <IconNewYearCircle />
              </div>
              <div className={stls.circleRight}>
                <IconNewYearCircle small/>
              </div>
              <div className={stls.circleRighteLeftBottom}>
                <IconNewYearCircle small/>
              </div>
            </div>
            
          </div>
          
        
        <button className={stls.close} onClick={() => setIsClosed(true)}>
          <IconCloseCircle blackCross />
        </button>
      </div>
      </FullWrapper>
    )

  return null
}

export default StickyBottomNewYear
