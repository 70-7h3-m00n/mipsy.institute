import { TypeLibProgram } from '@/types/index'
import { FC } from 'react'
import { NextSeo, CourseJsonLd } from 'next-seo'
import truncate from 'truncate'
import { routes, company, themeColor, dev } from '@/config/index'
import { AdditionalRobotsProps } from 'next-seo/lib/types'

type TSeoPagesProgram = {
  ofType: 'course' | 'profession'
  program: TypeLibProgram
  curProgramsStudyFieldSlug?: string
}

const SeoPagesProgram: FC<TSeoPagesProgram> = ({
  ofType,
  program,
  curProgramsStudyFieldSlug
}) => {
  // TODO: pull the rest of SEO params from API

  const { seo } = program

  const additionalMetaRobotsKeys = [
    'nosnippet',
    'maxSnippet',
    'maxImagePreview',
    'maxVideoPreview',
    'noarchive',
    'unavailableAfter',
    'noimageindex',
    'notranslate'
  ]
  const parsedMetaRobots = ((
    seo?.metaRobots &&
    seo?.metaRobots.split(',').map(item => {
      const trimmedItem = item?.trim()

      if (additionalMetaRobotsKeys.some(key => trimmedItem?.includes(key))) {
        const [key, value] = trimmedItem?.split(':')

        return { [key]: value || true }
      }

      return null
    })
  )?.filter(item => item) || null) as AdditionalRobotsProps

  // nosnippet?: boolean;
  // maxSnippet?: number;
  // maxImagePreview?: ImagePrevSize;
  // maxVideoPreview?: number;
  // noarchive?: boolean;
  // unavailableAfter?: string;
  // noimageindex?: boolean;
  // notranslate?: boolean;

  const isNoindex = !seo?.isSEOFriendly || seo?.metaRobots?.includes('noindex')

  const isNofollow =
    !seo?.isSEOFriendly || seo?.metaRobots?.includes('nofollow')

  const seoParams = {
    title:
      seo?.metaTitle ||
      `${program?.title ? program.title + ' | ' : 'Программа | '}${
        program?.typeLabel || 'Курс'
      } | ${company.name}`,
    programTitle: program?.title || 'Программа',
    desc:
      seo?.metaDescription ||
      (program?.description ? truncate(program?.description, 120) : ''),
    canonical:
      seo?.canonicalURL ||
      `${routes.front.root}${
        ofType === 'course'
          ? routes.front.courses
          : ofType === 'profession'
          ? routes.front.professions
          : routes.front.professions
      }/${curProgramsStudyFieldSlug}/${program?.slug}`
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        themeColor={themeColor}
        nofollow={dev ? true : isNofollow}
        noindex={dev ? true : isNoindex}
        {...((parsedMetaRobots && { robotsProps: parsedMetaRobots }) || {})}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: company.name,
              type: 'image/png'
            }
          ],
          site_name: company.name
        }}
      />
      <CourseJsonLd
        courseName={seoParams.programTitle}
        description={seoParams.desc}
        provider={{
          name: company.name,
          url: seoParams.canonical
        }}
      />
    </>
  )
}

export default SeoPagesProgram

