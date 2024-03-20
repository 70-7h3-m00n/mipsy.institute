import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import TwoColumns from '@/components/layout/TwoColumns'
import gif from '@/public/assets/imgs/gif/howProcessGoes.gif'
import Image from 'next/image'
import TagOrange from '../general/TagOrange'
import classNames from 'classnames'

interface listType  {
  desc: string
}

type ProcessType = {
  processRef?: any
  list: listType[]
  subtitle: any
  onMain?: boolean
}

const HowProcessGoes = ({processRef, list, subtitle, onMain=false}: ProcessType) => {
  return (
    <section ref={processRef} className={classNames({
      [stls.container]: true,
      [stls.onProfession]: !onMain,
      [stls.onMain]: onMain
    })}>
      <Wrapper>
        <h2 className={stls.title}>Как проходит обучение</h2>
        {onMain && (
          <div className={stls.tag}>
            <TagOrange>
              Процесс
            </TagOrange>
          </div>
          
        )}
        <TwoColumns>
          <div className={stls.left}>
            {subtitle}
            <div className={stls.img}>
              <Image
              width={569}
              height={328}
              src={gif} alt='gif' 
              />
            </div>
            <p className={stls.leftDesc}>
              <span>Дистанционное образование</span> — это обучение в комфортном темпе из любой точки мира 
            и возможность совмещать с работой</p>
          </div>

          <div className={stls.right}>

          
            <p className={stls.listTitle}>В программу дистанционного обучения входит:</p>
            <ul className={stls.list}>
            {list.map(({desc }, idx) => (
              <li key={desc + idx} className={stls.item}>
                <div className={stls.counter}>
                  <span className={stls.number}>{idx + 1}</span>
                </div>
                <div className={stls.text}>
                  {/* <h3 className={stls.subtitle}>{subtitle}</h3> */}
                  <p className={stls.desc}>{desc}</p>
                </div>
              </li>
            ))}
          </ul>
          </div>
        </TwoColumns>
      </Wrapper>
    </section>
  )
}

export default HowProcessGoes
