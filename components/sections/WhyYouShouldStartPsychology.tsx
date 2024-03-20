import stls from '@/styles/components/sections/WhyYouShouldStartPsychology.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { ContextStaticProps } from '@/context/index'
import { useContext, useEffect, useRef, useState } from 'react'
import Tass from '../imgs/programs/courses/Tass'
import PsyPic from '../imgs/programs/courses/PsyPic'
import Bbc from '../imgs/programs/courses/Bbc'
import HeadHunter from '../imgs/general/HeadHunter'
import IconNextButton from '../icons/IconNextButton'
import IconPrevButton from '../icons/IconPrevButton'
import classNames from 'classnames'


const WhyYouShouldStartPsychology = ({toggleOverview,showDescription,programOverview}) => {
  const { program } = useContext(ContextStaticProps)
  const sectionRef = useRef(null);

  const [currentContainer, setCurrentContainer] = useState(1);
  const showContainer = (containerNumber) => {
    setCurrentContainer(containerNumber);
  };

  return (
    <section className={classNames({
      [stls.container]: true,
      [stls.hideSection]: !showDescription
    })}>
      <Wrapper>
        <h2>Почему стоит осваивать профессию психолога?</h2>
        <div className={stls.btns}>
          <div className={stls.prev}  onClick={() => showContainer(currentContainer === 1 ? 3 : currentContainer - 1)}>
            <IconPrevButton fourtyPxViolet/>
          </div>
          <div className={stls.next} onClick={() => showContainer(currentContainer === 3 ? 1 : currentContainer + 1)}>
            <IconNextButton fourtyPxViolet/>
          </div>
          
        </div>
        <div className={stls.innerContainer} ref={sectionRef}
        >

          <div className={classNames(stls.leftContainer, {
            [stls.showContainer]: currentContainer === 1,
          })}>
            <p className={stls.firstRow}>С начала</p>
            <p className={stls.secRow}></p>
            <p className={stls.thirdRow}>ТАСС зафиксировал</p>
            <p className={stls.fourthRow}></p>
            <p className={stls.fifthRow}></p>
            <Tass />
          </div>
          <div className={classNames(stls.centerContainer, {
            [stls.showContainer]: currentContainer === 2,
          })}>
            <PsyPic />
            <div className={stls.vacancies}>
              
              <p>8000 вакансий психологов <br /> на HH.RU</p>
              <div className={stls.headHunter}>
                <HeadHunter />
              </div>
            </div>
          </div>
          <div className={classNames(stls.rightContainer, {
            [stls.showContainer]: currentContainer === 3,
            })}>
            <div className={stls.text}>

              <p>Профессия психолог входит в</p>
              <p></p>
              <p>самых нужных профессий по версии ВВС</p>
            </div>
            <Bbc />
            
          </div>
        </div>
        {programOverview && (
          <div className={stls.switchSection} onClick={toggleOverview}>
            <p>Посмотреть описание программы</p>
          </div>
        )}
        
      </Wrapper>
    </section>
  )
}

export default WhyYouShouldStartPsychology