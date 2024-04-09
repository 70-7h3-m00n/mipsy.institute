import TwoColumns from '@/components/layout/TwoColumns'
import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/WhyBother.module.sass'
import TagOrange from '../general/TagOrange'
import TagWhite from '../general/TagWhite'

const WhyBother = () => {
  const points = [
    {
      title: 'Востребованность',
      desc: 'Потребность в психологах в России за 2023 год выросла на 43%'
    },
    {
      title: 'Экологичная профессия',
      desc: 'Психолог — тот человек, который несет пользу окружающим, помогает справиться с психологическими проблемами и кризисами '
    },
    {
      title: 'Удаленный график',
      desc: 'Можно работать дистанционно из любой точки мира '
    },
    {
      title: 'Высокий доход',
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
