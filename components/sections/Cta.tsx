import stls from '@/styles/components/sections/Cta.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { ImgCta1 } from '@/components/imgs'
import PopupTrigger from '@/components/general/PopupTrigger'
import classNames from 'classnames'

type CtaType = {
  onMain?: boolean
  title: string
  desc: string
  cta:
    | 'askQuestion'
    | 'callMeBack'
    | 'signUpForCourse'
    | 'signUpForProfession'
    | 'signUp'
    | 'chooseProgram'
    | 'learnAboutUs'
    | 'submitApplication'
    | 'reserve'
    | 'learnAboutTeachers'
  question?: boolean
}

const Cta = ({ title = null, desc = null, cta, onMain=false }: CtaType) => {
  return (
    <section className={classNames({
      [stls.container]: true,
      [stls.onProfessions]: !onMain
    })}>
      <Wrapper>
        <div className={stls.img}>
          <ImgCta1 />
        </div>
        <div className={stls.text}>
          <h2 className={stls.title}>{title}</h2>
          <p className={stls.p}>{desc}</p>
        </div>
        <div className={stls.btn}>
          <PopupTrigger btn='alpha' cta={cta} />
        </div>
      </Wrapper>
    </section>
  )
}

export default Cta
