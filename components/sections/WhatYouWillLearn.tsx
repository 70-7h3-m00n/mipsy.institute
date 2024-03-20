import Wrapper from '@/components/layout/Wrapper'
import { ContextStaticProps } from '@/context/index'
import { getListItemsInnerHtml } from '@/helpers/index'
import stls from '@/styles/components/sections/WhatYouWillLearn.module.sass'
import marked from 'marked'
import { useContext } from 'react'
import TagOrange from '@/components/general/TagOrange'
import IconPortalViolet from '@/components/icons/IconPortalViolet'
import classNames from 'classnames'

const WhatYouWillLearn = ({ onMain = false, title }) => {
  const { program } = useContext(ContextStaticProps)
  let list =
    program?.WhatYouWillLearn?.length > 0 &&
    getListItemsInnerHtml(marked(program.WhatYouWillLearn))

  if (onMain) {
    list = [
      [
        'Узнаете о техниках проведения психологической терапии и инструментах, которые применяются в процессе консультации ',
        'Поймете, в чем разница работы с ребенком и взрослым, какие есть возрастные психические особенности',
        'Определите собственный вектор развития, научитесь находить контакт с самыми разными людьми и откроете новую страницу своей жизни',
        'Узнаете, как подбирать терапию индивидуально, в зависимости от проблемы человека',
        'Исследуете особенности психики человека',
        'Сможете научиться развивать свой бренд'
      ]
    ]
  }

  const renderFirstWord = (word: string) => {
    return word
      .split(' ')
      .filter((_, index) => index !== 0)
      .join(' ')
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.block}>
          <h2 className={stls.title}>{title}</h2>
          {onMain && (
            <div className={stls.tag}>
              <TagOrange>Знания</TagOrange>
            </div>
          )}
          <ul className={stls.list}>
            {list &&
              list[0].map((item, idx) => (
                <li key={item + idx} className={stls.item}>
                  <IconPortalViolet />
                  <div
                    className={classNames({
                      [stls.description]: true,
                      [stls.main]: onMain
                    })}>
                    <span
                      className={stls.firstWord}
                      style={{
                        display: onMain ? 'inline' : 'block'
                      }}>
                      {`${item.split(' ')[0]} `}
                    </span>
                    <span className={stls.p}>{renderFirstWord(item)}</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default WhatYouWillLearn
