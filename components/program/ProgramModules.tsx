import stls from '@/styles/components/program/ProgramModules.module.sass'
import ProgramModule from '@/components/program/ProgramModule'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import { getListItemsInnerHtml, getParagraphInnerHtml } from '@/helpers/index'
import marked from 'marked'

const ProgramModules = () => {
  const { program } = useContext(ContextStaticProps)

  const topics =
    program?.shortContents?.length > 0 &&
    getListItemsInnerHtml(marked(program.shortContents))
  const titles =
    program?.shortContents?.length > 0 &&
    getParagraphInnerHtml(marked(program.shortContents))

  const list =
    titles &&
    titles
      .map((topic, idx) => ({
        title: topic,
        topics: topics?.[idx]
      }))

  return (
    <ul className={stls.container}>
      {list &&
        list.map(({ title, topics }, idx) => (
          <ProgramModule key={title + idx} title={title} topics={topics} />
        ))}
    </ul>
  )
}

export default ProgramModules
