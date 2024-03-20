import stls from '@/styles/components/articles/ArticleBlogListWithTitle.module.sass'
import parse from 'html-react-parser'
import marked from 'marked'

type ArticleBlogListWithTitleType = {
  props: {
    id?: string
    text?: string
    title: string
    icon?: {
      code?: string
    }
  }
}

const ArticleBlogListWithTitle = ({ props }: ArticleBlogListWithTitleType) => {
  const text = props.text
  const title = props.title

  const renderer = new marked.Renderer()
  renderer.html = text => {
    return `<div classname=${stls.icon}>${text}</div>`
  }
  renderer.paragraph = text => {
    return `<p>${text}</p>`
  }
  marked.setOptions({ renderer })

  const icon = marked(props.icon.code)

  return (
    <div className={stls.innerBox}>
      <div className={stls.titleBox}>
        <div className={stls.iconBox}>{parse(icon)}</div>
        <p className={stls.title}>{title}</p>
      </div>

      <p>{text}</p>
    </div>
  )
}

export default ArticleBlogListWithTitle
