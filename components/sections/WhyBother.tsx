import stls from '@/styles/components/sections/WhyBother.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import TwoColumns from '@/components/layout/TwoColumns'
import {
  IconRemoteWork,
  IconCompassion,
  IconDemand,
  IconHighIncome
} from '@/components/icons'
import WomenOnWhy from '../imgs/general/WomenOnWhy'
import Sofa from '../imgs/general/Sofa'
import TagWhite from '../general/TagWhite'
import TagOrange from '../general/TagOrange'
import IconGratefullPortal from '../icons/IconGratefullPortal'
import IconVerticalArrow from '../icons/IconVerticalArrow'

const WhyBother = () => {
  const points=[{title:'Востребованность', desc:'Потребность в психологах в России за 2023 год выросла на 43%'},{title:'Экологичная профессия', desc:'Психолог — тот человек, который несет пользу окружающим, помогает справиться с психологическими проблемами и кризисами '},{title:'Удаленный график', desc:'Можно работать дистанционно из любой точки мира '},{title:'Высокий доход', desc:'Средняя зарплата наших выпускников 100 000 р.* ', subdesc:<>*Средняя стоимость консультации выпускников МИП — 3 000 р./час <br /> Занятость — 1-2 ч./ день. Доход — 60-120 000 р./мес</>}]
  return (
    <section className={stls.container}>
      <Wrapper>
      <h2 className={stls.title}>
          Почему стоит осваивать профессию психолога?
        </h2>
        <div className={stls.content}>
        <TwoColumns>
          <div className={stls.img}>
          {/* <p className={stls.tagOne}>Психология</p> */}
          {/* <p className={stls.tagTwo}>Преимущества</p> */}
          <div className={stls.tagOne}>
          <TagWhite>
          Психология
          </TagWhite>
          </div>
          <div className={stls.tagTwo}>
            <TagOrange>
            Преимущества
            </TagOrange>
          </div>
            <div className={stls.women}>
              <WomenOnWhy />
            </div>
            {/* <div className={stls.portal}>
              <IconGratefullPortal />
            </div> */}
            <div className={stls.portals}>
              <div className={stls.smallOne}>
                <IconGratefullPortal thirtyPx />
              </div>
              <div className={stls.smallTwo}>
                <IconGratefullPortal thirtyPx/>
              </div>
              <div className={stls.medium}>
                <IconGratefullPortal fiftyPx/>
              </div>
              <div className={stls.big}>
                <IconGratefullPortal  />
              </div>
            </div>
            <div className={stls.sofa}>
              <Sofa />
            </div>
            
          </div>
          <div className={stls.points}>
            <div className={stls.mobileTags}>

            
          <div className={stls.tagOneMobile}>
          <TagWhite>
          Психология
          </TagWhite>
          </div>
          <div className={stls.tagTwoMobile}>
            <TagOrange>
            Преимущества
            </TagOrange>
          </div>
          </div>
            {points.map((el, i) => (
              <div key={i} className={stls.wrapItem}>
                <p className={stls.pointTitle}>{el.title}</p>
                <p className={stls.decs}>{el.desc}</p>
                {el?.subdesc && <p className={stls.subdesc}>{el.subdesc}</p>}
              </div>
            ))}
            <div className={stls.verticalArrow}>
            <IconVerticalArrow />
            </div>
            
          </div>
        </TwoColumns>
        {/* <TwoColumns>
          <div className={stls.reason}>
            <div className={stls.icon}>
              <IconRemoteWork />
            </div>
            <div className={stls.text}>
              <h3 className={stls.subTitle}>Работайте удаленно</h3>
              <p className={stls.p}>
                Психологом можно работать из любой точки мира удаленно
              </p>
            </div>
          </div>
          <div className={stls.reason}>
            <div className={stls.icon}>
              <IconCompassion />
            </div>
            <div className={stls.text}>
              <h3 className={stls.subTitle}>Экологичная профессия</h3>
              <p className={stls.p}>
                Психолог - тот человек, который несет пользу окружающим
              </p>
            </div>
          </div>
        </TwoColumns>
        <TwoColumns>
          <div className={stls.reason}>
            <div className={stls.icon}>
              <IconDemand />
            </div>
            <div className={stls.text}>
              <h3 className={stls.subTitle}>Востребованность</h3>
              <p className={stls.p}>
                В России на 33% выросло количество обращений к психологам за
                2022 год
              </p>
            </div>
          </div>
          <div className={stls.reason}>
            <div className={stls.icon}>
              <IconHighIncome />
            </div>
            <div className={stls.text}>
              <h3 className={stls.subTitle}>Высокий доход</h3>
              <p className={stls.p}>
                Средняя зарплата наших выпускников - 90000 т.р.
              </p>
            </div>
          </div>
        </TwoColumns> */}
        </div>
      </Wrapper>
    </section>
  )
}

export default WhyBother
