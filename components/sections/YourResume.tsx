import stls from '@/styles/components/sections/YourResume.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import cn from 'classnames'
import { ImgResume1 } from '@/components/imgs'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import { getListItemsInnerHtml, toNumberWithSpaces } from '@/helpers/index'
import marked from 'marked'
import ResumeDiplomas from '@/components/imgs/general/ResumeDiplomas'
import Clip from '@/components/imgs/general/Clip'
import HeadHunter from '@/components/imgs/general/HeadHunter'
import IconGratefullPortal from '@/components/icons/IconGratefullPortal'

const YourResume = ({resumeRef=null}) => {
  const { program } = useContext(ContextStaticProps)

  const list =
    program?.resumeSkills?.length > 0 &&
    getListItemsInnerHtml(marked(program.resumeSkills))

  return (
    <section ref={resumeRef} className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Ваше резюме после обучения</h2>
        
        
        <div className={stls.content}>
        <div className={stls.upperRound}>
          <p>Ваше резюме</p>
        </div>
        <div className={stls.upperRightRound}></div>
        <div className={stls.bg}></div>
        <div className={stls.line}></div>
        <div className={stls.midPortal}>
          <IconGratefullPortal small isViolet/>
        </div>
        <div className={stls.midPortalTwo}>
          <IconGratefullPortal small isViolet/>
        </div>
        <div className={stls.smallPortal}>
          <IconGratefullPortal xsmall isViolet/>
        </div>
        <div className={stls.smallPortalTwo}>
        <IconGratefullPortal xsmall isViolet/>
        </div>
        <div className={stls.smallPortalThree}>
          <IconGratefullPortal xsmall isViolet/>
        </div>
        <div className={stls.clip}>
          <Clip />
        </div>
        <div className={stls.hh}>
          <HeadHunter />
        </div>
          <div className={stls.top}>
            <div className={stls.img}>
              <ImgResume1 />
            </div>
            <div className={stls.headings}>
              <div className={cn(stls.heading, stls.headingLeft)}>
                <p className={stls.p}>Профессия:</p>
                <p className={stls.h3}>{program?.resumeTitle}</p>
              </div>
              <div className={stls.heading}>
                <p className={stls.p}>Зарплата от:</p>
                <p className={stls.salary}>
                  {toNumberWithSpaces(program?.entrySalary)}&nbsp;р
                </p>
              </div>
            </div>
          </div>
          <div className={stls.bottomContent}>
            <div className={stls.left}>
            <p className={stls.skills}>Профессиональные навыки:</p>
            <ul className={stls.list}>
              {list &&
                list[0].map((item, idx) => (
                  <li key={item + idx} className={stls.item}>
                    <p className={stls.itemText}>{item}</p>
                  </li>
                ))}
            </ul>
            </div>
            <div className={stls.right}>
              <p>
                Получила профессию “{program?.title}” в Московском Институте
                Психологии
              </p>
              <div className={stls.diploma}>
                <ResumeDiplomas />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default YourResume
