import stls from '@/styles/components/sections/BriefProgramContents.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ProgramModulesQty from '@/components/program/ProgramModulesQty'
import ProgramModules from '@/components/program/ProgramModules'

const BriefProgramContents = ({planRef}) => {
  return (
    <section ref={planRef} className={stls.container}>
      <Wrapper>
        <div className={stls.top}>
          <div className={stls.heading}>
            <h2 className={stls.title}>Краткая программа курса</h2>
            <p className={stls.subtitle}>В каждом модуле:</p>
            <ul className={stls.points}>
              <li>Практические задания для закрепления материала;</li>
              <li>Постоянная поддержка куратора;</li>
              <li>Актуальные вебинары в режиме реального времени;</li>
              <li>Бесплатный доступ к библиотеке.</li>
            </ul>
          </div>
          <div className={stls.qty}>
            <ProgramModulesQty />
          </div>
        </div>
        <ProgramModules />
      </Wrapper>
    </section>
  )
}

export default BriefProgramContents
