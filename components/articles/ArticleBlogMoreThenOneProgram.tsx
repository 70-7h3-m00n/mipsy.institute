import { discountNum } from '@/data/price'
import stls from '@/styles/components/articles/ArticleBlogRelatedPrograms.module.sass'
import parse from 'html-react-parser'
import marked from 'marked'
import styles from '@/styles/pages/JournalSlug.module.sass'
import ProgramDiscountUntil from '../program/ProgramDiscountUntil'
import { ArticleBlogRelatedProgramsType } from './ArticleBlogRelatedPrograms'
import RelatedProgramsList from './RelatedProgramsList'

const ArticleBlogMoreThenOneProgram = ({
  props
}: ArticleBlogRelatedProgramsType) => {
  const renderer = new marked.Renderer()
  renderer.em = text => {
    return `<span style="color: ${props?.borderColor?.code}">${text}</span>`
  }
  renderer.paragraph = text => {
    return `<p id=${stls.title}>${text}</p>`
  }
  marked.setOptions({ renderer })

  renderer.strong = text => {
    return `<span className=${styles.strongText}>${text}</span>`
  }

  const programs = props?.programs

  return (
    <div className={stls.relatedPrograms}>
      <div className={stls.innerBox}>
        <div className={stls.discountBox}>
          <p className={stls.discount}>
            Обучение в МИП со скидкой&nbsp;
            <span className={stls.discountNum}>{discountNum}%</span>
            <span className={stls.mobileOnly}>
              <br />*
            </span>
            &nbsp;
            <span className={stls.discountUntil}>
              <ProgramDiscountUntil />
            </span>
          </p>
        </div>

        <div>
          {props.textItem.map(item => (
            <div key={item.id}>{parse(marked(item.text))}</div>
          ))}
        </div>
        <p id={stls.courses}>Курсы:</p>
        <div className={stls.programs}>
          {programs.map(program => (
            <RelatedProgramsList program={program} key={program.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleBlogMoreThenOneProgram
