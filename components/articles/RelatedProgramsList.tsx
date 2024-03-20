import base64pixel from '@/config/base64pixel'
import routes from '@/config/routes'
import stls from '@/styles/components/articles/ArticleBlogRelatedPrograms.module.sass'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

type RelatedProgramsListType = {
  linkOnly?: boolean
  program: {
    id: string
    title: string
    type: string
    slug: string
    studyFieldSlug: string
    heroPicture: {
      height: string
      url: string
      width: string
    }
  }
}

const RelatedProgramsList = ({
  program,
  linkOnly = false
}: RelatedProgramsListType) => {
  const href = program => (program === 'Profession' ? 'professions' : 'courses')

  const ofType = href(program.type)

  return (
    <div className={stls.relatedProgramsProgram}>
      {!linkOnly && (
        <>
          <div className={stls.imgBox}>
            <Image
              src={program?.heroPicture?.url}
              alt={'alt'}
              className={stls.img}
              width={200}
              height={104}
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          </div>
          <div className={stls.programTitle}>
            <p id={stls.programTitle}>{program.title}</p>
          </div>
        </>
      )}

      <div
        className={classNames({
          [stls.linkBox]: true,
          [stls.linkOnly]: linkOnly
        })}>
        <Link
          href={`${routes.front.root}/${ofType}/${program.studyFieldSlug}/${program.slug}`}>
          <a className={stls.link}>
            {linkOnly ? 'Узнать подробнее' : 'Узнать больше'}
          </a>
        </Link>
      </div>
    </div>
  )
}

export default RelatedProgramsList
