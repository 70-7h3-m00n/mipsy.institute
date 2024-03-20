import base64pixel from '@/config/base64pixel'
import stls from '@/styles/components/articles/ArticleTitle.module.sass'
import Image from 'next/image'
import { IconClock } from '@/components/icons'

type ArticleTitleType = {
  props: {
    readTime: number
    title?: string
    studyField?: string
    date?: Date
    picture: {
      url: string
      width: string
      height: string
    }
    blogAuthor: {
      name: string
      portrait: {
        url: string
        width: string
        height: string
      }
    }
    teacher: {
      name: string
      achievements: string
      portraitForBlog?: {
        url: string
        width: string
        height: string
      }
      portrait?: {
        url: string
        width: string
        height: string
      }
    }
  }
}

const ArticleTitle = ({ props }: ArticleTitleType) => {
  const date = new Date(props?.date)

  return (
    <>
      <span className={stls.tag}>{props.studyField}</span>
      <div className={stls.authors}>
        <p className={stls.author}>
          <span className={stls.strongText}>Автор:</span>{' '}
          {props.blogAuthor && props.blogAuthor.name}
        </p>
        <div className={stls.dateAndTime}>
          <p className={stls.date}>{date.toLocaleDateString()}</p>
          <IconClock colorCode='#545454' size='22' />
          <p>{props.readTime} мин</p>
        </div>
      </div>

      <h1 className={stls.articleTitle}>{props.title}</h1>
      <div className={stls.imgBox}>
        <div className={stls.imgTitleContainer}>
          <Image
            src={props?.picture?.url}
            alt={'alt'}
            className={stls.imgTitle}
            width={750}
            height={430}
            placeholder='blur'
            blurDataURL={base64pixel}
          />
        </div>
        {props.teacher && (
          <div className={stls.imgTeacherWithAchievements}>
            <div className={stls.imgTeacherContainer}>
              <Image
                src={
                  props.teacher?.portraitForBlog?.url ||
                  props.teacher?.portrait?.url
                }
                alt={'alt'}
                className={stls.imgTeacher}
                width={227}
                height={292}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
            <div className={stls.teacherText}>
              <p className={stls.teacherName}>{props.teacher.name}</p>
              <p className={stls.achievements}>{props.teacher.achievements}</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ArticleTitle
