import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/DistanceEducation.module.sass'
import CardDistanceEducation from '../cards/CardDistanceEducation'
import SwiperContainer from '../general/SwiperContainer'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import IconFinger from '../icons/IconFinger'

const list = [
  'Дистанционный учебный материал состоит из лекций, заданий и проверочных тестов',
  'На время обучения студентам дается доступ к вебинарам по разным востребованным психологическим направлениям',
  'Слушатели курса, выпускники и педагоги общаются в специальных чатах',
  'В обучение включены демонстрационные сессии, работа с задачами по реальным кейсам, интервизии и супервизии',
  'Домашние задания выполняются индивидуально или в группе и проверяются экспертом-практиком',
  'Практика проходит в парах или небольших группах, чтобы глубоко освоить и развить изучаемые навыки',
  'Личная поддержка практикующего психолога на всех этапах обучения и при подготовке к итоговому экзамену'
]

export const DistanceEducation = () => {
  const slides = list.map((item, idx) => (
    <CardDistanceEducation
      key={item + idx}
      item={item}
      purpleBlock={idx === 1 || idx === 4}
    />
  ))

  const desktopSwiperOptions = {
    slidesNum: 4.7,
    spaceBetween: 15
  }

  const laptopSwiperOptions = {
    slidesNum: 4,
    spaceBetween: 15
  }

  const tabletSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 15
  }

  const mobileSwiperOptions = {
    slidesNum: 1.5,
    spaceBetween: 20
  }

  const fingerRef = useRef(null)

  const [isIntersecting, setIntersecting] = useState(false);
  const [isVisible, setIsVisible] = useState('flex')

  // useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) =>
  //     setIntersecting(entry.isIntersecting)
  //   );

  //   observer.observe(fingerRef.current);
  //   return () => {
  //     observer.disconnect();
  //   };

  // }, [fingerRef]);


  // useEffect(() => {
  //   if(isIntersecting){
  //     setTimeout(() => {
  //       setIsVisible('none')
  //     }, 15000);
  //   } else {
  //     setIsVisible('flex')
  //   }
    
    
  // }, [isIntersecting])

  // console.log('ВИЖУ ПАЛЕЦ', isIntersecting)

  return (
    <section ref={fingerRef} className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          В программу дистанционного обучения входит:
        </h2>
        <SwiperContainer
          slides={slides}
          mobileOptions={mobileSwiperOptions}
          tabletOptions={tabletSwiperOptions}
          laptopOptions={laptopSwiperOptions}
          desktopOptions={desktopSwiperOptions}
          hideNavigation
        />
        <div style={{display: `${isVisible}`}}  className={stls.orangeBlock}>
          <IconFinger />
        </div>
      </Wrapper>
    </section>
  )
}

export default DistanceEducation