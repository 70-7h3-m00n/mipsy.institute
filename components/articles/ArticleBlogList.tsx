import stls from '@/styles/components/articles/ArticleBlogList.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse from 'html-react-parser'
import ArticleBlogListItem from './ArticleBlogListItem'

type ArticleBlogListType = {
  props: {
    listItem? : {
      id?: string
      text?: string
      icon?: {
        code?: string 
      }
    }[]
  }
  
}

const ArticleBlogList = ({props} : ArticleBlogListType) => {
  const list = props.listItem || [];

  return (
      <div className={stls.contentBox}>
      {list && list.map((el, i) => (
        <ArticleBlogListItem key={el.id} props={el}/>
      ))}
      </div>
  )
}

export default ArticleBlogList