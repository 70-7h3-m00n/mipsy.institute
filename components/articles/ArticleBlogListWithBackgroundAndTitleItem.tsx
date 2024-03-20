import stls from '@/styles/components/articles/ArticleBlogListWithBackgroundAndTitle.module.sass'
import styles from '@/styles/pages/JournalSlug.module.sass'
import parse from 'html-react-parser'
import marked from 'marked'

type ArticleBlogListWithBackgroundAndTitleItemType = {
  props: {
    id?: string
    text?: string
    icon?: {
      code?: string
    }
  }
}

const ArticleBlogListWithBackgroundAndTitleItem = ({
  props
}: ArticleBlogListWithBackgroundAndTitleItemType) => {
  const text = props.text

  const renderer = new marked.Renderer()
  renderer.html = text => {
    return `<div classname=${stls.icon}>${text}</div>`
  }
  renderer.paragraph = text => {
    return `<p>${text}</p>`
  }
  marked.setOptions({ renderer })

  const icon = marked(props.icon.code)

  renderer.strong = title => {
    return `<span className=${styles.strongText}>${title}</span>`
  }

  return (
    <div className={stls.innerBox}>
      {parse(icon)}
      <p>{text}</p>
    </div>
  )
}

export default ArticleBlogListWithBackgroundAndTitleItem
