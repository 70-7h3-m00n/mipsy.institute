import { discount } from '@/data/price'
import stls from '@/styles/components/articles/ArticleBlogRelatedPrograms.module.sass'
import parse from 'html-react-parser'
import marked from 'marked'
import ProgramDiscountUntil from '../program/ProgramDiscountUntil'
import { ArticleBlogRelatedProgramsType } from './ArticleBlogRelatedPrograms'
import RelatedProgramsList from './RelatedProgramsList'

const ArticleBlogOneProgram = ({ props }: ArticleBlogRelatedProgramsType) => {
  const renderer = new marked.Renderer()
  renderer.em = text => {
    return `<span  style="color: ${props?.borderColor?.code}">${text}</span>`
  }
  renderer.paragraph = text => {
    return `<p id=${stls.title}>${text}</p>`
  }
  marked.setOptions({ renderer })

  const programs = props?.programs

  return (
    <div className={stls.relatedPrograms}>
      <div className={stls.innerBoxOneProgram}>
        <div className={stls.discountBox}>
          <div className={stls.courseWithDiscount}>
            <p className={stls.course}>Курс</p>
            <div className={stls.discountWithDate}>
              <span className={stls.discountNum}>{discount}</span>&nbsp;
              <span id={stls.date}>
                <ProgramDiscountUntil />
              </span>
            </div>
          </div>

          <p className={stls.discount}>{props.programs[0].title}</p>
        </div>
        <div>
          {props.textItem.map(item => (
            <div key={item.id}>{parse(marked(item.text))}</div>
          ))}
        </div>
        <div className={stls.programs}>
          {programs.map(program => (
            <RelatedProgramsList linkOnly program={program} key={program.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleBlogOneProgram
