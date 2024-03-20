import stls from '@/styles/components/program/ProgramModulesQty.module.sass'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import { getParagraphInnerHtml } from '@/helpers/index'
import marked from 'marked'
import getDeclension from '@/helpers/getDeclension'

const ProgramModulesQty = () => {
  const { program } = useContext(ContextStaticProps)

  const titles =
    program?.shortContents?.length > 0 &&
    getParagraphInnerHtml(marked(program.shortContents))

  return (
    <div className={stls.container}>
      <p className={stls.qty}>{titles && titles.length}</p>
      <p className={stls.text}>{getDeclension(titles?.length)}</p>
    </div>
  )
}

export default ProgramModulesQty
