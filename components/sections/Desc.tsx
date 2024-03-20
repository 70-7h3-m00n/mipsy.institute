import stls from '@/styles/components/sections/Desc.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { IconAtom } from '@/components/icons'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import parse from 'html-react-parser'
import marked from 'marked'

const Desc = () => {
  const { program } = useContext(ContextStaticProps)
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.icon}>
          <IconAtom calpha barelyVisible />
        </div>
        <div className={stls.content}>
          {program?.description && parse(marked(program?.description))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Desc
