import stls from '@/styles/components/articles/ArticleSubtitle.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse, {domToReact, attributesToProps } from 'html-react-parser'

export type ArticleSubtitleType = {
  props: {
    subtitle?: string
    subtitleSlug?: string
    color : {
      code: string
      name: string
    }
  }
  
}

const ArticleSubtitle = ({props} : ArticleSubtitleType) => {
  
  const renderer = new marked.Renderer();
  renderer.paragraph = (text) => {
    return `<h2 id=${props.subtitleSlug}>${text}</h2>`;
  };

  renderer.em = (text) => {
    return `<span style="color: ${props?.color?.code}">${text}</span>`;
  };
  marked.setOptions({ renderer });

  const h2text = marked(props?.subtitle);


  return (
      <>
        {parse(h2text)}
      </>
  )
}

export default ArticleSubtitle
