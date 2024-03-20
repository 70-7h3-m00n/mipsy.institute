import base64pixel from '@/config/base64pixel'
import stls from '@/styles/components/articles/ArticleBlogTextImageBlock.module.sass'
import parse from 'html-react-parser'
import marked from 'marked'
import Image from 'next/image'

type ArticleBlogTextImageBlockType = {
  props: {
    text?: string
    image: {
      url: string
      width: number
      height: number
    }
  }
}

const ArticleBlogTextImageBlock = ({
  props
}: ArticleBlogTextImageBlockType) => {
  const text = marked(props?.text)

  return (
    <div className={stls.container}>
      <div className={stls.imgContainer}>
        <Image
          src={props?.image?.url}
          alt={'alt'}
          className={stls.img}
          width={470}
          height={624}
          placeholder='blur'
          blurDataURL={base64pixel}
        />
      </div>
      <div className={stls.text}>{parse(text)}</div>
    </div>
  )
}

export default ArticleBlogTextImageBlock
