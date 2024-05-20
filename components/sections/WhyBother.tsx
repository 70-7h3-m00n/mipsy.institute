import TwoColumns from '@/components/layout/TwoColumns'
import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/WhyBother.module.sass'
import TagOrange from '../general/TagOrange'
import TagWhite from '../general/TagWhite'

const WhyBother = () => {
  const points = [
    {
      title: 'Востребованность на рынке труда',
      desc: 'Интерес к услугам психологов в России увеличился: в 2023 году зафиксирован рост на 43% на спрос психологической поддержки'
    },
    {
      title: 'Престиж и почет',
      desc: 'Прямая заслуга специалиста, если клиенты помирились, научились справляться с трудностями и лучше узнали себя'
    },
    {
      title: 'Дистанционная работа',
      desc: 'Современные онлайн-технологии дают возможность консультировать клиентов из любой точки мира'
    },
    {
      title: 'Перспективность в размере доходов',
      desc: 'Средняя зарплата наших выпускников 1075 $* ',
      subdesc: (
        <>
          *Средняя стоимость консультации выпускников МИП — 35 $/час <br />{' '}
          Занятость — 1-2 ч./ день. Доход — 645 - 1300 $/мес
        </>
      )
    }
  ]
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Почему стоит осваивать профессию психолога?
        </h2>
        <div className={stls.filterImg}>
          <span className={stls.filter}></span>
          <div className={stls.content}>
            <TwoColumns>
              <div className={stls.img}>
                <div className={stls.tagOne}>
                  <TagWhite>Психология</TagWhite>
                </div>
                <div className={stls.tagTwo}>
                  <TagOrange>Преимущества</TagOrange>
                </div>
              </div>
              <div className={stls.points}>
                <div className={stls.mobileTags}>
                  <div className={stls.tagOneMobile}>
                    <TagWhite>Психология</TagWhite>
                  </div>
                  <div className={stls.tagTwoMobile}>
                    <TagOrange>Преимущества</TagOrange>
                  </div>
                </div>
                {points.map((el, i) => (
                  <div key={i} className={stls.wrapItem}>
                    <p className={stls.pointTitle}>{el.title}</p>
                    <p className={stls.decs}>{el.desc}</p>
                    {el?.subdesc && (
                      <p className={stls.subdesc}>{el.subdesc}</p>
                    )}
                  </div>
                ))}
              </div>
            </TwoColumns>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default WhyBother
