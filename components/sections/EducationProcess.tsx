import TwoColumns from '@/components/layout/TwoColumns'
import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/EducationProcess.module.sass'
import Image from 'next/image'
import { useState } from 'react'
import TagOrange from '../general/TagOrange'
import img from '@/public/assets/imgs/howProcessGoes.png'

const text = [
  'Обучение в МИП осуществляется по заочной форме ',
  'с применением дистанционных технологий. Лекции, общение, тестирование проходят в онлайн-формате через образовательную платформу. ',
  'Вы получите научную базу по главным психологическим дисциплинам и практический опыт ',
  'в работе с задачами по реальным кейсам. Узнаете, как терапия помогает решить внутриличностные проблемы и выйти из стрессовых ситуаций без потерь.'
]

const EducationProcess = () => {
  const [showFullText, setShowFullText] = useState(false)

  const subtitleMobile = (
    <>
      <p className={stls.leftTitle}>
        <span className={stls.boldText}>{text[0]}</span>
        {text[1]}
        {showFullText && (
          <span>
            <span className={stls.boldText}>{text[2]}</span>
            {text[3]}
          </span>
        )}
      </p>
    </>
  )

  const subtitle = (
    <>
      <p className={stls.leftTitle}>
        <span className={stls.boldText}>{text[0]}</span>
        {text[1]}
        <span className={stls.boldText}>{text[2]}</span>
        {text[3]}
      </p>
    </>
  )

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Как проходит обучение</h2>
        <div className={stls.tag}>
          <TagOrange>Процесс</TagOrange>
        </div>
        <TwoColumns>
          <div className={stls.text}>{subtitle}</div>
          <div className={stls.textMobile}>{subtitleMobile}</div>
          <button
            className={stls.readMoreBtn}
            onClick={() => setShowFullText(!showFullText)}>
            {showFullText ? 'Скрыть описание' : 'Читать далее'}
          </button>
          <div className={stls.img}>
            <Image
            className={stls.rightImg}
              width={575}
              height={260}
              src={img}
              alt='Как идет обучение?'
            />
          </div>
        </TwoColumns>
      </Wrapper>
    </section>
  )
}

export default EducationProcess
