import stls from '@/styles/components/articles/ArticleBlogBigSizeText.module.sass'
import parse from 'html-react-parser'
import marked from 'marked'

type ArticleBlogBigSizeTextType = {
  props: {
    text?: string
    textColor: {
      code: string
    }
  }
}

const ArticleBlogBigSizeText = ({ props }: ArticleBlogBigSizeTextType) => {
  const renderer = new marked.Renderer()
  renderer.em = text => {
    return `<span style="color: ${props?.textColor?.code}">${text}</span>`
  }

  marked.setOptions({ renderer })

  const text = marked(props?.text)

  return <div className={stls.text}>{parse(text)}</div>
}

export default ArticleBlogBigSizeText
