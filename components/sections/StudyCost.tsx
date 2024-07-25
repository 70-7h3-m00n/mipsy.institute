import stls from '@/styles/components/sections/StudyCost.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import ProgramCost from '@/components/program/ProgramCost'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import { IconCircleCheck } from '@/components/icons'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import MoneySaving from '../program/MoneySaving'
import { FormAlpha } from '../forms'
import getNextWednesday from '@/helpers/getNextThursday'

const StudyCost = ({costRef}) => {
  const { program } = useContext(ContextStaticProps)

  const title = program?.title || ''
  const studyHours = program?.studyHours || 0
  const studyForm = program?.studyForm || ''
  const studyFormLabel = program?.studyFormlabel || ''
  const studyMounthsDuration = program?.studyMounthsDuration || 0

  const info = [
    { key: 'Зачисление:', val: getNextWednesday(new Date()) },
    {
      key: 'Форма обучения:',
      val: studyForm === 'Online' ? 'Дистанционно' : studyFormLabel
    },
    {
      key: 'Срок обучения:',
      val: <ProgramStudyDuration studyMounthsDuration={studyMounthsDuration} />
    },
    {
      key: 'Рассрочка:',
      val: 'От “Тинькофф банка”'
    }
  ]

  const points = [
    'Онлайн вебинары с возможностью просмотра записей в течение всего курса обучения',
    'Тестирование и работа над ошибками после каждой дисциплины',
    'Лекционные и полезные дополнительные материалы к дисциплинам',
    'Индивидуальные и групповые домашние задания с обратной связью от преподавателей',
    'Онлайн-встречи с разбором вопросов от слушателей',
    'Практические упражнения с решением ситуационных задач'
  ]

  return (
    <section ref={costRef} className={stls.container}>
      <Wrapper>
      <div className={stls.title}>
              <span className={stls.laptopdesktop}>
                Запишитесь на программу
              </span>
            </div>
            <div className={stls.upperContainer}>
            <p className={stls.subtitle}>{title}</p>
          <div className={stls.discount}>
              <ProgramDiscount small violet />
            </div>
            </div>
            
        <div className={stls.content}>
          
          <div className={stls.left}>
            
            <div className={stls.heading}>
              <div className={stls.discountMobile}>
                
                {/* <div className={stls.discountMobileTag}>
                  <ProgramDiscount small violet />
                </div> */}
              </div>

            </div>
            <div className={stls.cost}>
              <ProgramCost withPerMonth />
            </div>

          </div>
          <div className={stls.center}>
            <div className={stls.form}>
              <div className={stls.bgForm}>
              <p>Записаться на курс или получить бесплатную консультацию</p>
            <FormAlpha inProfessions cta={'Записаться'} />
            </div>
            </div>
          
          </div>
          <div className={stls.right}>
            
            <p className={stls.titleRight}>Что входит в стоимость?</p>
            <ul className={stls.points}>
              {points.map((point, idx) => (
                <li key={point + idx} className={stls.point}>
                  <span className={stls.pointicon}>
                    <IconCircleCheck violetRound />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <MoneySaving />
        
      </Wrapper>
    </section>
  )
}

export default StudyCost
