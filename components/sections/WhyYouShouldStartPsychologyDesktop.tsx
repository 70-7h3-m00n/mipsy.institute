import React from 'react'
import stls from '@/styles/components/sections/WhyYouShouldStartPsychologyDesktop.module.sass'
import classNames from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import IconDirrection from '../icons/IconDirection'
import Image from 'next/image'
import student1 from '@/public/assets/imgs/programs/courses/student1.jpg'
import student2 from '@/public/assets/imgs/programs/courses/student2.jpg'
import student3 from '@/public/assets/imgs/programs/courses/student3.jpg'
import student4 from '@/public/assets/imgs/programs/courses/student4.jpg'
import student5 from '@/public/assets/imgs/programs/courses/student5.jpg'
import HeadHunter from '../imgs/general/HeadHunter'
import IconStar from '../icons/IconStar'
import IconGratefullPortal from '../icons/IconGratefullPortal'
import IconSoftStar from '../icons/IconSoftStar'

interface WhyYouShouldStartPsychologyDesktopProps {
  toggleOverview: () => void
  showDescription: boolean
  programOverview: string
}
const WhyYouShouldStartPsychologyDesktop = ({
  toggleOverview,
  showDescription,
  programOverview
}: WhyYouShouldStartPsychologyDesktopProps) => {
  const studentsImg = [student1, student2, student3, student4, student5]
  return (
    <section
      className={classNames({
        [stls.container]: true,
        [stls.hideSection]: !showDescription
      })}>
      <Wrapper>
        <h2>Почему стоит осваивать профессию психолога?</h2>
        <div className={stls.content}>
          <div className={stls.tass}>
            <div className={stls.firstRow}>
              <p>С начала 2023 </p> 
              <IconStar />
              {/* <div className={stls.iconPortal}> */}
                <IconSoftStar />
              {/* </div> */}
              
            </div>
            
            <p>года тасс зафиксировал</p>

            <div className={stls.rowThree}>
              <div className={stls.iconDir}>
                <IconDirrection />
              </div>
              <div className={stls.iconDir}>
                <IconDirrection />
              </div>

              <span className={stls.text}>Рост обращений</span>
            </div>
            <p>к психологам на 15%</p>
            <div className={stls.imgScope}>
              {studentsImg.map((el, i) => (
                <div key={i} className={stls.img}>
                  <Image src={el} height={113} width={92} alt={'студент'} />
                </div>
              ))}
            </div>
          </div>
          <div className={stls.bbc}>
            <div className={stls.hhIcon}>
              <HeadHunter width={62} height={62} />
            </div>
            
            <div className={stls.bbcText}>
              <p><strong>8000 вакансий</strong> психологов на HH.RU</p>
            </div>
          </div>
          <div className={stls.bbc}>
            <div className={stls.bbcText}>
              <p>
                Профессия психолог входит в <strong>ТОП-20</strong> самых нужных профессий по
                версии ВВС
              </p>
            </div>
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

export default WhyYouShouldStartPsychologyDesktop
