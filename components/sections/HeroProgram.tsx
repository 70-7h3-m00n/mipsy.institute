import stls from '@/styles/components/sections/HeroProgram.module.sass'
import { useContext, useState } from 'react'
import Wrapper from '@/components/layout/Wrapper'
import ProgramLabel from '@/components/program/ProgramLabel'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import ProgramInfo from '@/components/program/ProgramInfo'
import { ContextStaticProps } from '@/context/index'
import PopupTrigger from '@/components/general/PopupTrigger'
import Breadcrumbs from '../general/Breadcrumbs'
import ForPopup from '../imgs/general/ForPopup'

const HeroProgram = ({ breadcrumbs }) => {
  const { curProgramsType, program } = useContext(ContextStaticProps)
  const [cut, setCut] = useState(210)
  const [showFullText, setShowFullText] = useState(false)
  const descriptionLength = program?.description?.length
  const cutHandler = () => {
    setShowFullText(!showFullText)
    if (!showFullText) {
      setCut(descriptionLength)
    } else {
      setCut(210)
    }
  }
  return (
    <>
      <section className={stls.container}>
        <Wrapper>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <div className={stls.top}>
            <div className={stls.heading}>
              <div className={stls.label}>
                <ProgramLabel />
              </div>
              <h1 className={stls.title}>{program?.title}</h1>
              <div className={stls.descriptionDesktop}>
                <p>{program?.description}</p>
              </div>
              <div className={stls.btnsDesktop}>
                <PopupTrigger
                  btn='alpha'
                  cta={
                    curProgramsType === 'course'
                      ? 'signUpForCourse'
                      : curProgramsType === 'profession'
                      ? 'signUpForProfession'
                      : 'signUp'
                  }
                />
                <PopupTrigger btn='beta' cta='askQuestion' />
              </div>
            </div>
            <div className={stls.mobileFlex}>
              <div className={stls.pic}>
                <div className={stls.discount}>
                  <ProgramDiscount />
                </div>
                {program?.heroPicture && (
                  <>
                    <div className={stls.img}>
                      <ForPopup
                        src={program?.heroPicture?.url}
                        alt={program?.title}
                        height={402}
                        width={402}
                      />
                    </div>
                    <div className={stls.imgMobile}>
                      <ForPopup
                        src={program?.heroPicture?.url}
                        alt={program?.title}
                        height={600}
                        width={700}
                      />
                    </div>
                  </>
                )}
              </div>
              <div className={stls.descriptionMobile}>
                <p className={stls.mobiledesc}>
                  {cut < descriptionLength
                    ? program?.description?.slice(0, cut).concat('...')
                    : program?.description?.slice(0, cut)}
                </p>
                <p onClick={cutHandler} className={stls.moreText}>
                  {showFullText ? 'Скрыть описание' : 'Читать далее'}
                </p>
              </div>
            </div>
          </div>
          <div className={stls.btnsMobile}>
            <PopupTrigger
              btn='alpha'
              cta={
                curProgramsType === 'course'
                  ? 'signUpForCourse'
                  : curProgramsType === 'profession'
                  ? 'signUpForProfession'
                  : 'signUp'
              }
            />
            <PopupTrigger btn='beta' cta='askQuestion' />
          </div>
          <div className={stls.info}>
            <ProgramInfo />
          </div>
        </Wrapper>
      </section>
    </>
  )
}

export default HeroProgram
