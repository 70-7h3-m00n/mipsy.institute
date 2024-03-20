import parse from 'html-react-parser'
import marked from 'marked'
import styles from '@/styles/pages/JournalSlug.module.sass'
type ArticleFullColoredTextBlockType = {
  props: {
    text?: string
    textColor?: {
      code: string
      name: string
    }
  }
}

const ArticleFullColoredTextBlock = ({
  props
}: ArticleFullColoredTextBlockType) => {
  const renderer = new marked.Renderer()
  renderer.paragraph = text => {
    return `<p>${text}</p>`
  }
  renderer.em = function (text) {
    return `<span style="color: ${props?.textColor?.code}">${text}</span>`
  }

  renderer.strong = text => {
    return `<span className=${styles.strongText}>${text}</span>`
  }

  marked.setOptions({ renderer })

  const text = marked(props.text)

  return <>{parse(text)}</>
}

export default ArticleFullColoredTextBlock
