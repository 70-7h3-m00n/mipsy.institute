import stls from '@/styles/components/articles/ArticleBlogSingleImageBlock.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse from 'html-react-parser'
import Image from 'next/image'
import base64pixel from '@/config/base64pixel'

type ArticleBlogSingleImageBlockType = {
  props: {
    alternativeText?: string
    picture : {
      url: string
      width: number
      height: number
    }
  }              
}

const ArticleBlogSingleImageBlock = ({props} : ArticleBlogSingleImageBlockType) => {

  return (
      <div className={stls.container}>
          <Image
          src={props.picture.url}
          alt={'alt'}
          className={stls.img}
          // layout='fill'
          width={1170}
          height={750}
          placeholder='blur'
          blurDataURL={base64pixel}
          />
      </div>
  )
}

export default ArticleBlogSingleImageBlock