import { FC } from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import { routes, company, themeColor, dev } from '@/config/index'
import { AdditionalRobotsProps } from 'next-seo/lib/types'
import TypeLibJournal from '@/types/lib/journal/TypeLibJournal'

type TSeoPagesProgram = {
  blog: TypeLibJournal
  // curProgramsStudyFieldSlug?: string
}

const SeoPagesJournal: FC<TSeoPagesProgram> = ({ blog }) => {
  // TODO: pull the rest of SEO params from API

  // const { seo } = program
  const publishDate = new Date(blog?.date)

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
  // const parsedMetaRobots = ((
  //   seo?.metaRobots &&
  //   seo?.metaRobots.split(',').map(item => {
  //     const trimmedItem = item?.trim()

  //     if (additionalMetaRobotsKeys.some(key => trimmedItem?.includes(key))) {
  //       const [key, value] = trimmedItem?.split(':')

  //       return { [key]: value || true }
  //     }

  //     return null
  //   })
  // )?.filter(item => item) || null) as AdditionalRobotsProps

  // const isNoindex = !seo?.isSEOFriendly || seo?.metaRobots?.includes('noindex')

  // const isNofollow =
  //   !seo?.isSEOFriendly || seo?.metaRobots?.includes('nofollow')

  const seoParams = {
    title: `${
      blog?.title
        ? blog.title + ' - '
        : 'статья Московского Института Психологии'
    }`,
    desc: blog?.title
      ? 'Интересная статья о психологии по теме' + ' ' + blog.title
      : 'Интересная статья о психологии',
    canonical: `${routes.front.root}${routes.front.journals}/${blog?.slug}`
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        themeColor={themeColor}
        nofollow={true}
        noindex={true}
        // {...((parsedMetaRobots && { robotsProps: parsedMetaRobots }) || {})}
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
      <ArticleJsonLd
        type='BlogPosting'
        url={`${routes.front.root}${routes.front.journals}/${blog?.slug}`}
        title={blog?.title}
        images={[
          'https://example.com/photos/1x1/photo.jpg',
          'https://example.com/photos/4x3/photo.jpg',
          'https://example.com/photos/16x9/photo.jpg'
        ]}
        datePublished={publishDate?.toISOString()}
        dateModified={publishDate?.toISOString()}
        authorName={blog?.teacher?.name}
        description={blog?.subtitle}
      />
    </>
  )
}

export default SeoPagesJournal
