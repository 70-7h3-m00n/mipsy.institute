import parse from 'html-react-parser'
import marked from 'marked'
import Link from 'next/link'
import { ArticleSubtitleType } from './ArticleSubtitle'

const ArticleOneContentLink = ({ props }: ArticleSubtitleType) => {
  const renderer = new marked.Renderer()

  renderer.paragraph = text => {
    return `<p>${text}</p>`
  }
  renderer.strong = text => {
    return `${text}`
  }
  renderer.em = text => {
    return `${text}`
  }
  marked.setOptions({ renderer })

  const h2text = marked(props?.subtitle)

  return (
    <li>
      <Link href={`#${props.subtitleSlug}`}>{parse(h2text)}</Link>
    </li>
  )
}

export default ArticleOneContentLink
