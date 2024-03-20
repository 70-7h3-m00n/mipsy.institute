import stls from '@/styles/components/sections/ForWhom.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import {
  IconGettingup,
  IconRemoteWork,
  IconToTheMoon
} from '@/components/icons'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import { getListItemsInnerHtml } from '@/helpers/index'
import parse from 'html-react-parser'
import marked from 'marked'

const ForWhom = () => {
  const { program } = useContext(ContextStaticProps)

  const subtitle = program?.forWhomSubtitle && program?.forWhomSubtitle

  const list =
    program?.ForWhom?.length > 0 &&
    getListItemsInnerHtml(marked(program.ForWhom))
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Для кого программа</h2>
        <div className={stls.subtitle}>
          {subtitle && parse(subtitle)}
        </div>
        <ul className={stls.list}>
          {list &&
            list[0].map((item, idx) => (
              <li key={item + idx} className={stls.item}>
                <div className={stls.icon}>
                  {idx === 0 ? (
                    <IconToTheMoon />
                  ) : idx === 1 ? (
                    <IconRemoteWork />
                  ) : (
                    <IconGettingup />
                  )}
                </div>
                <p className={stls.p}>{parse(item)}</p>
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default ForWhom
